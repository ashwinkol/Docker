FROM ubuntu:trusty

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update
RUN apt-get install -y mysql-server 
ADD bind_0.cnf /etc/mysql/conf.d/bind_0.cnf

ADD init.sh /init.sh
RUN chmod 755 /*.sh
ENTRYPOINT ["/init.sh"]


EXPOSE 3306

CMD ["mysqld_safe"]
