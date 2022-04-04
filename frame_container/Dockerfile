FROM phusion/baseimage:0.9.19
RUN apt-get update && apt-get -y install python python-dev python-pip
RUN mkdir /app
ADD index.html /app
ADD frame.runit /etc/service/frame/run
EXPOSE 8100 8100
RUN chmod u+x /etc/service/frame/run
