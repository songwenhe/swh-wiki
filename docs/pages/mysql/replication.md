---
title: 主从复制
order: 4
---

## 主从复制

### 主机配置

配置文件设置

```shell
#必选
server-id=1 #主服务器唯一ID
log_bin=/var/log/mysql/mysql-bin.log #启用二进制日志，指明路径
#可选
read-only=0 #0表示可读可写（主机），1表示只读（从机）
binlog_expire_logs_seconds=2592000 #设置日志保留的时长，单位是秒
max_binlog_size=200M #控制单个二进制日志的大小
binlog_do_db=db01 #设置需要复制的数据库，默认全部记录
binlog_ignore_db=test #设置不要复制的数据库
binlog_format=STATEMENT #设置binlog格式
```

主机建立账户并授权

```sql
create user 'slave1'@'%' identified by 'Sql1234@'; -- 创建用户

grant replication slave on *.* to 'slave1'@'%'; -- 授予主从复制权限

alter user 'slave1'@'%' identified with mysql_native_password BY 'Sql1234@'; -- 再次更新密码

flush privileges; -- 刷新

show master status; -- 显示状态
```

| File             | Position | Binlog_Do_DB | Binlog_Ignore_DB | Executed_Gtid_Set |
| ---------------- | -------- | ------------ | ---------------- | ----------------- |
| mysql-bin.000001 | 1136     | db01         | test             |                   |

### 从机配置

配置文件配置

```shell
#必选
server-id=2
#可选 启用中继日志
relay-log=mysql-relay
```

在 mysql 命令行输入以下命令

```sql
change master to
master_host='192.168.88.8',
master_port=3307,
master_user='slave1',
master_password='Sql1234@',
master_log_file='mysql-bin.000001',
master_log_pos=1136;
```

```sql
start slave;
```
