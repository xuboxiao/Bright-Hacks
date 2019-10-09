from flask import Flask, request, jsonify
import service

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/client/<client_id>/wallet', methods=['GET'])
def get_client_wallet_data(client_id):
    return service.ClientWalletService().get_wallet_data(client_id)


@app.route('/rm/<rm_id>/my_clients', methods=['POST', 'GET'])
def my_clients(rm_id):
    if request.method == 'POST':
        params = request.get_json()
        params['rm_id'] = rm_id
        return service.ClientService().new_client(params)
    elif request.method == 'GET':
        return service.ClientService().get_clients(rm_id)


@app.route('/login/client')
def check_client_credentials():
    params = request.get_json()
    return jsonify(service.ClientService().check_credentials(params))


@app.route('/login/rm')
def check_rm_credentials():
    params = request.get_json()
    return jsonify(service.RMService().check_rm_credentials(params))


@app.route('/client/<client_id>/trade', methods=['GET', 'POST'])
def trade(client_id):
    if request.method == 'POST':
        params = request.get_json()
        params['client_id'] = client_id
        return service.TransactionService().new_transaction(params)
    elif request.method == 'GET':
        return service.TransactionService().get_trade_history(client_id)


if __name__ == '__main__':
    app.run(debug=True, port=8080, host='0.0.0.0')
