FROM ubuntu:trusty

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update
RUN apt-get install -yq mysql-server && rm -rf /var/lib/apt/lists/*
ADD bind_0.cnf /etc/mysql/conf.d/bind_0.cnf

VOLUME /var/lib/mysql

ADD init.sh /init.sh
RUN chmod 755 /*.sh
ENTRYPOINT ["/init.sh"]


EXPOSE 3306

