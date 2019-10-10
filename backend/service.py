import models
import pandas as pd
import datetime


class ClientWalletService:
    def __init__(self):
        self.model = models.ClientWalletModel()
        self.holding_model = models.HoldingsModel()

    def get_wallet_data(self, client_id):
        result = self.model.get_by_client_id(client_id);
        #return result.to_json(orient='records')
        return result. \
            loc[result['date_updated'].idxmax(),
                ['total_daily_credit_award', 'total_credit']] \
            .to_json()

    def get_history(self, client_id):
        result = self.model.get_by_client_id(client_id).sort_values(by=['date_updated'], ascending=True).head(10)
        if len(result['date_updated']) > 0:
            result['date_updated'] = result['date_updated'].dt.strftime('%d-%B-%Y %H:%M:%S')
        return result.loc[:, ['date_updated', 'client_name',
                              'total_daily_credit_award', 'total_credit']] \
                        .to_json(orient='records')

    def daily_record_single(self, client_id):
        holding = self.holding_model.get_by_client_id(client_id)
        total_daily_credit_award = holding['daily_credit_award'].sum()
        latest_record = self.model.get_by_client_id_latest(client_id).loc[0]
        total_credit = latest_record.loc['total_credit'] + total_daily_credit_award
        params = {'client_id': client_id,
                  'date_updated': datetime.datetime.now(),
                  'total_daily_credit_award': total_daily_credit_award,
                  'total_credit': total_credit}
        result = self.model.create(params).loc[0]
        return result.loc[['total_daily_credit_award', 'total_credit']].to_json()

    def daily_record_all(self):
        client_ids = models.ClientModel().list_items().loc[:, 'client_id']
        for index, client_id in client_ids.iteritems():
            self.daily_record_single(client_id)


class ClientService:
    def __init__(self):
        self.model = models.ClientModel()

    def new_client(self, params):
        result = self.model.create(params).loc[0]
        wallet_init_data = {
            'client_id': result.loc['client_id'].item(),
            'date_updated': datetime.datetime.now(),
            'total_daily_credit_award': 0,
            'total_credit': result.loc['base_credit'],
        }
        models.ClientWalletModel().create(wallet_init_data)
        return result.loc[['client_id', 'client_name', 'industry_name']].to_json()

    def get_clients(self, rm_id):
        result = self.model.get_by_rm_id(rm_id)
        return result.loc[:,['client_id', 'client_name', 'industry_name']].to_json(orient='records')

    def check_credentials(self, params):
        result = {'login_sucessful': False}
        query_result = self.model.get_by_client_id(params['client_id']).loc[0]
        if query_result.loc['pwd'] == params['pwd']:
            result['login_sucessful'] = True
        return result


class RMService:
    def __init__(self):
        self.model = models.RMModel()

    def check_rm_credentials(self, params):
        result = {'login_sucessful': False}
        query_result = self.model.get_by_rm_email(params['rm_email']).loc[0]
        if query_result.loc['pwd'] == params['pwd']:
            result['login_sucessful'] =True
        return result


class TransactionService:
    def __init__(self):
        self.model = models.TransactionModel()
        self.holding_model = models.HoldingsModel()

    def is_in_holdings(self, client_id, product_id):
        holdings = self.holding_model.get_by_client_id(client_id)
        return product_id in holdings.loc[:, 'product_id'].unique()

    def new_transaction(self, params):
        transaction = self.model.create(params).loc[0]
        is_in_holdings = self.is_in_holdings(params['client_id'],
                                             params['product_id'])
        print(is_in_holdings)
        if not is_in_holdings:
            print('not in holdings')
            para = {
                'product_id': params['product_id'],
                'units_held': params['units_traded'],
                'client_id' : params['client_id'],
                'daily_credit_award': transaction.loc['unit_daily_credit_award'] * params['units_traded']
            }
            result = self.holding_model.create(para).loc[0, ['holding_id', 'client_name',
                                                             'product_name', 'units_held', 'daily_credit_award']]
            return result.to_json()
        else:
            print('is in holdings')
            old_holding = self.holding_model.get_by_client_product_id(params['client_id'], params['product_id']).loc[0]
            if params['trade_type'].lower() == 'buy':
                update_dict = {
                    'units_held': old_holding.loc['units_held'] + params['units_traded'],
                    'daily_credit_award': old_holding.loc['daily_credit_award'] + params['units_traded'] * transaction.loc['unit_daily_credit_award']
                }
            elif params['trade_type'].lower() == 'sell':
                update_dict = {
                    'units_held': old_holding.loc['units_held'] - params['units_traded'],
                    'daily_credit_award': old_holding.loc['daily_credit_award'] - params['units_traded'] * transaction.loc['unit_daily_credit_award']
                }
            print(old_holding.loc['holding_id'])
            result = self.holding_model.update(old_holding.loc['holding_id'], update_dict).loc[0, ['holding_id', 'client_name',
                                                                                                   'product_name', 'units_held', 'daily_credit_award']]
            return result.to_json()

    def get_trade_history(self, client_id):
        result = self.model.get_by_client_id(client_id)[['transaction_id', 'time_stamp',
                                                         'trade_type', 'product_name', 'units_traded']]
        if len(result['time_stamp']) > 0:
            result['time_stamp'] = result['time_stamp'].dt.strftime('%d-%B-%Y %H:%M:%S')
        return result.sort_values(by=['time_stamp'], ascending=False).to_json(orient='records')


class HoldingsService:
    def __init__(self):
        self.model = models.HoldingsModel()

    def get_holdings(self, client_id):
        result = self.model.get_by_client_id(client_id)
        return result.loc[:, ['holding_id', 'client_name', 'product_name', 'units_held', 'daily_credit_award']].to_json(orient='records')


class ProductService:
    def __init__(self):
        self.model = models.ProductModel()

    def get_products(self):
        result = self.model.list_items()
        return result.to_json(orient='records')

