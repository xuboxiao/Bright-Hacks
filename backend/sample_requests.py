import requests

host = 'dbeco-backend.southeastasia.azurecontainer.io'
port = '8080'
base_url = 'http://' + host + ':' + port


# ---------------------------- client data api ----------------------

# rm1
client_data_3 = {
    'client_name': 'Berkshire Hathaway Holdings',
    'industry_id': '1',
    'pwd': 'yes1'
}

# rm2
client_data_4 = {
    'client_name': 'General Electric',
    'industry_id': '3',
    'pwd': 'yes2'
}

# rm3
client_data_5 = {
    'client_name': 'JC Penny',
    'industry_id': '6',
    'pwd': 'yes3'
}

# rm4
client_data_6 = {
    'client_name': 'TATA Group',
    'industry_id': '4',
    'pwd': 'yes4'
}



'''
client_data_1 = {
    'client_name': 'Alice',
    'industry_id': '1',
    'pwd': 'yes'
}

client_data_2 = {
    'client_name': 'Bob',
    'industry_id': '4',
    'pwd': 'yes2'
}


# RM2 on-boarded client1 Alice
requests.post(base_url+'/rm/2/my_clients', json=client_data_1)

# RM2 on-boarded client2 Bob
requests.post(base_url+'/rm/2/my_clients', json=client_data_2)
# response: {"client_id":2,"client_name":"Bob","industry_name":"Real Estate"}

# display all clients of RM2
requests.get(base_url+'/rm/2/my_clients')
# response: [{"client_id":1,"client_name":"Alice","industry_name":"Environmental Services and Recycling"},{"client_id":2,"client_name":"Bob","industry_name":"Real Estate"}]

'''

requests.post(base_url+'/rm/1/my_clients', json=client_data_3)
requests.post(base_url+'/rm/2/my_clients', json=client_data_4)
requests.post(base_url+'/rm/3/my_clients', json=client_data_5)
requests.post(base_url+'/rm/4/my_clients', json=client_data_6)

# --------------------------- trade data api -------------------------
'''
# cl 1
trade_data_1 = {
    'product_id': 1,
    'units_traded': 100,
    'trade_type': 'buy'
}

# cl 1
trade_data_2 = {
    'product_id': 1,
    'units_traded': 100,
    'trade_type': 'sell'
}

# cl2
trade_data_3 = {
    'product_id': 4,
    'units_traded': 100,
    'trade_type': 'buy'
}

# client1 buys 100 shares of product1
requests.post(base_url+'/client/1/trade', json=trade_data_1)
# response: {"holding_id":1,"client_name":"Alice","product_name":"Tox free solutions","units_held":100.0,"daily_credit_award":100.0}

# client1 buys 100 shares of product1 again
requests.post(base_url+'/client/1/trade', json=trade_data_1)
# response: {"holding_id":1,"client_name":"Alice","product_name":"Tox free solutions","units_held":200.0,"daily_credit_award":200.0}

# client1 sells 100 shares of product1
requests.post(base_url+'/client/1/trade', json=trade_data_2)

# client2 buys 100 shares of product4
requests.post(base_url+'/client/2/trade', json=trade_data_3)

# client2 buys 100 shares of product1
requests.post(base_url+'/client/2/trade', json=trade_data_1)

'''

# cl 1
trade_data_1 = {
    'product_id': 2,
    'units_traded': 5000,
    'trade_type': 'BUY'
}
requests.post(base_url+'/client/1/trade', json=trade_data_1)

# cl 1
trade_data_2 = {
    'product_id': 3,
    'units_traded': 7000,
    'trade_type': 'SELL'
}
requests.post(base_url+'/client/1/trade', json=trade_data_2)


# cl2
trade_data_3 = {
    'product_id': 4,
    'units_traded': 6000,
    'trade_type': 'BUY'
}
requests.post(base_url+'/client/2/trade', json=trade_data_3)


# cl2
trade_data_4 = {
    'product_id': 3,
    'units_traded': 3000,
    'trade_type': 'BUY'
}
requests.post(base_url+'/client/2/trade', json=trade_data_4)


# cl3
trade_data_5 = {
    'product_id': 8,
    'units_traded': 8000,
    'trade_type': 'BUY'
}
requests.post(base_url+'/client/3/trade', json=trade_data_5)


# cl3
trade_data_6 = {
    'product_id': 10,
    'units_traded': 12000,
    'trade_type': 'BUY'
}
requests.post(base_url+'/client/3/trade', json=trade_data_6)


# cl4
trade_data_7 = {
    'product_id': 1,
    'units_traded': 2000,
    'trade_type': 'BUY'
}
requests.post(base_url+'/client/4/trade', json=trade_data_7)


# cl4
trade_data_8 = {
    'product_id': 7,
    'units_traded': 13000,
    'trade_type': 'BUY'
}
requests.post(base_url+'/client/4/trade', json=trade_data_8)


# cl 1
trade_data_9 = {
    'product_id': 4,
    'units_traded': 1000,
    'trade_type': 'BUY'
}
requests.post(base_url+'/client/1/trade', json=trade_data_9)


# cl 1
trade_data_10 = {
    'product_id': 2,
    'units_traded': 2000,
    'trade_type': 'SELL'
}
requests.post(base_url+'/client/1/trade', json=trade_data_10)


# cl2
trade_data_11 = {
    'product_id': 2,
    'units_traded': 15000,
    'trade_type': 'BUY'
}
requests.post(base_url+'/client/2/trade', json=trade_data_11)


# cl2
trade_data_12 = {
    'product_id': 3,
    'units_traded': 1000,
    'trade_type': 'SELL'
}
requests.post(base_url+'/client/2/trade', json=trade_data_12)


# cl3
trade_data_13 = {
    'product_id': 8,
    'units_traded': 2000,
    'trade_type': 'SELL'
}
requests.post(base_url+'/client/3/trade', json=trade_data_13)


# cl3
trade_data_14 = {
    'product_id': 10,
    'units_traded': 1000,
    'trade_type': 'SELL'
}
requests.post(base_url+'/client/3/trade', json=trade_data_14)


# cl4
trade_data_15 = {
    'product_id': 9,
    'units_traded': 2000,
    'trade_type': 'BUY'
}
requests.post(base_url+'/client/4/trade', json=trade_data_15)


# cl4
trade_data_16 = {
    'product_id': 7,
    'units_traded': 2500,
    'trade_type': 'SELL'
}
requests.post(base_url+'/client/4/trade', json=trade_data_16)
