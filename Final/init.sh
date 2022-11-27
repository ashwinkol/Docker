#!/bin/bash
service mysql start
mysql
CREATE USER 'user'@'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;
update mysql.user set host='%' where user='root';
FLUSH PRIVILEGES;

