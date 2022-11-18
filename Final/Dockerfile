FROM ubuntu:20.04

ENV TERM linux
ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update
RUN apt-get install -y  

RUN apt-get install -y mysql-server

CMD ["/bin/bash"]

EXPOSE 9090
