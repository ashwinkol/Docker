FROM ubuntu:20.04

ENV TERM linux
ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update
RUN apt-get install -y  

RUN apt-get install -y mysql-server

ENTRYPOINT [ ""/etc/init.d/mysql start""]
CMD ["/bin/bash"]

EXPOSE 9090
