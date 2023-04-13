---
title: mysql基础
order: 1
---

## 安装 MySQL

```shell
apt install mysql-server
```

## 卸载 mysql

查询 mysql 相关版本及文件，

```
dpkg -l | grep mysql
```

卸载相关文件

```shell
sudo apt-get remove mysql-common
```

进一步卸载

```shell
sudo apt-get autoremove --purge mysql-server-8.0
```

基本能彻底卸载 mysql 了！！！

## MySQL 配置

### 配置文件路径

```shell
/etc/mysql/mysql.conf.d/mysqld.cnf
```

跳过密码验证，在 mysql 的配置文件中加上

```shell
skip-grant-tables
```

### 修改密码

```mysql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123';
```

注意：1.localhost 是 root 对应的 host，也有可能是%。

```mysql
select user,host from user; #查看user对应的host
```

​ 2.如果报 error 1396，先重置密码为空

```mysql
update user set authentication_string='' where user='root';
flush privileges; #刷新
```

​ 3.如果报 error 1209,根据提示说明在 skip-grant-tables 模式下无法执行此语句。只需要 flush privileges; 一下再执行

```shell
ERROR 1290 (HY000): The MySQL server is running with the --skip-grant-tables option so it cannot execute this statement
```
