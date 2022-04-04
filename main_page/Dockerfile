FROM phusion/baseimage:0.9.19
RUN apt-get update && apt-get -y install python python-dev python-pip
RUN mkdir /app
ADD index.html /app
ADD main.runit /etc/service/main/run
EXPOSE 8090 8090
RUN chmod u+x /etc/service/main/run
