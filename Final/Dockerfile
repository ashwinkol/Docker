FROM ubuntu:trusty

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update
RUN apt-get install -y mysql-server 
ADD bind_0.cnf /etc/mysql/conf.d/bind_0.cnf

VOLUME /var/lib/mysql

COPY init.sh /usr/local/bin/init.sh 
RUN chmod +x /usr/local/bin/init.sh 


EXPOSE 3306

CMD init.sh
