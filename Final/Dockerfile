FROM ubuntu:20.04

ENV TERM linux
ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update
RUN apt-get install -y  
RUN apt-get install -y mysql-server 

COPY init.sh /usr/local/bin/init.sh 

RUN chmod +x /usr/local/bin/init.sh 

VOLUME /var/lib/mysql

EXPOSE 3306

CMD init.sh
