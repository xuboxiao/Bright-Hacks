import requests
import time
import os

'''
os.environ['BACKEND_NAME'] = 'backend-server-8'
os.environ['SECONDS_AS_DAY'] = '20'

'''


backend_name = os.environ['BACKEND_NAME']
seconds_as_day = int(os.environ['SECONDS_AS_DAY'])
url = 'http://' + backend_name + '.southeastasia.azurecontainer.io:8080/daily-update'

while True:
    requests.get(url)
    time.sleep(seconds_as_day)

