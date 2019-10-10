FROM ubuntu:latest
MAINTAINER xuboxiao "xuboxiao55@gmail.com"
RUN apt-get update -y
RUN apt-get install -y python3 python3-dev python3-pip
RUN mkdir /app
COPY requirements.txt /app
COPY Dockerfile /app
COPY update.py /app
WORKDIR /app
RUN pip3 install -r requirements.txt
ENTRYPOINT ["python3"]
CMD ["./update.py"]