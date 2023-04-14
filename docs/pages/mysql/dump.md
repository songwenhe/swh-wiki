---
title: 数据库的备份与还原
order: 2
---

#### 备份（mysqldump）

```shell
mysqldump -u root -p密码 -A > 备份文件路径 #全量备份（数据+结构）
```

```shell
mysqldump -u root -p123456 库名 > 备份文件路径 #指定库备份（数据+结构）
```

```shell
mysqldump -u root -p123456 -B db1 db2 > 备份文件路径 #多个库备份（数据+结构）
```

```shell
mysqldump -u root -psql1234 test > /root/sql_2023.sql #备份test数据库
```

```shell
mysqldump -u root -psql1234 test table1 table2 > 备份文件路径 #备份指定数据库表
```

#### 还原（source）

```sql
source 备份文件路径 #mysql命令行还原全部数据库
```

```shell
mysql -uroot -pSql1234@ < 备份文件路径 #系统命令行还原全部数据库
```

```sql
use 数据库名 #还原单个数据库（需指定数据库）
source 备份文件路径
```

