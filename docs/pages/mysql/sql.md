---
title: sql
order: 3
---

## SQL 命令

### DDL（操作数据库、表）

#### 操作数据库

##### 创建数据库

```sql
create database 数据库名;
create database if not exists 数据库名称; #判断不存在，再创建
create database 数据库名称 character set 字符集名; #创建数据库，并指定字符集
```

##### 查询数据库

```sql
show databases;
show create database 数据库名称; #查询某个数据库的创建语句
```

##### 修改数据库

```sql
alter database 数据库名称 character set 字符集名称; #修改数据库的字符集
```

##### 删除数据库

```sql
drop database 数据库名;
drop database if exists 数据库名称; #判断数据库存在，存在再删除
```

##### 使用数据库

```sql
select database(); #查询当前正在使用的数据库名称
use 数据库名; #使用数据库

```

#### 操作表

##### 创建表

```sql
create table user(
列名 数据类型,
id int(11) not null auto_increment,
name varchar(20),
primary key(id)
);
create table tab like user; -- 复制user表的表结构到tab并创建
```

##### 复制表

```sql
create table 表名 like 被复制的表名;
```

##### 查询表

```sql
show tables;
desc 表名; #查询表结构
```

##### 修改表

```sql
alter table 表名 rename to 新的表名; #修改表名
alter table 表名 character set 字符集名称; #修改表的字符集
alter table 表名 add 列名 数据类型; #添加一个列
alter table 表名 change 列名 新列名 新数据类型; #修改列名称
alter table 表名 modify 列名 新数据类型; #修改列数据类型
alter table 表名 drop 列名; #删除列
```

##### 删除表

```sql
drop table 表名;
drop table if exists 表名 ;
```

### DML(增删改表中数据)

#### 插入数据

```sql
insert into user (username, password) values ('swh', 'swh123');
```

#### 删除数据

```sql
delete from 表名 where [条件];
delete from user where id = 2; #删除id为2的记录
delete from 表名; #不推荐使用。有多少条记录就会执行多少次删除操作
TRUNCATE TABLE 表名; #推荐使用，效率更高 先删除表，然后再创建一张一样的表。
```

#### 修改数据

```sql
update 表名称 set 列名 = 值  where 列名称 = 值
update user set password = '123456' where id>=2; #更新大于等于2的记录
```

### DQL(查询表中的记录)

#### 语法

```sql
select 字段列表 from 表名列表
where
    条件列表
group by
    分组字段
having
    分组之后的条件
order by
    排序
limit
    分页限定
```

#### 基础查询

```sql
select * from user;//查询全部字段
select username,password from user where id=2;//查询指定字段
```

#### distinct 去除重复

```sql
select distinct 列 from user;
select distinct password from user; #返回不重复的密码
```

#### AS

```sql
SELECT name,(chinese+english+math) AS total_score from student; #将成绩总和加起来并命名为total_score
```

#### where

在 where 语句中经常使用的运算符

#### 比较运算符

| > < <= >= = <> !=           | 大于、小于、大于（小于）等于、<> !=都是不等于                                                                                                                                                  |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BENTWEEN ... AND ...        | 显示某一区间的值，闭区间                                                                                                                                                                       |
| IN(set)                     | 显示在 in 列表中的值，例：in(100,200)                                                                                                                                                          |
| LIKE '宋%'<br />NOT LIKE '' | 模糊查询。<br />"%" 百分号通配符: 表示任何字符出现任意次数 (可以是 0 次)。<br />"\_" 下划线通配符:表示只能匹配单个字符,不能多也不能少,就是一个字符。当然，也可以 like "陈\_\_\_\_"，数量不限。 |
| IS NULL                     | 判断是否为空                                                                                                                                                                                   |

#### 逻辑运算符

| and | 多个条件同时成立                   |
| --- | ---------------------------------- |
| or  | 多个条件任一成立                   |
| not | 不成立，例：where not(salary>100); |

#### order by

order by 指定排序的列，排序的列既可以是表中的列名，也可以是 select 语句后指定的列名。

asc 升序（默认），desc 降序。

order by 语句应位于 select 语句的结尾，遵从先查询在排序，最后分页。

#### 合计/统计函数

##### count

count(\*)和 count(列)的区别

count(\*)返回满足条件的记录的行数

count(列)返回满足条件的某列有多少个，但是会排除为 null 的情况

##### sum

sum 函数返回满足 where 条件的行的和，一般使用在数值列

```sql
select sum(列名),sum(列名),sum(列名) from table where [where条件]
```

##### avg

avg 函数返回满足 where 条件的行的平均值，一般使用在数值列

```sql
select avg(列名),avg(列名),avg(列名) from table where [where条件]
```

##### max/min

max/min 函数返回满足 where 条件的行的最大值和最小值，一般使用在数值列

```sql
select max(列名),max(列名),max(列名) from table where [where条件]
```

#### group by 和 having

使用 group by 子句对列进行分组查询，使用 having 子句对分组后的结果进行过滤。

查询每个部门的平均工资和最高工资

```sql
SELECT avg(sal),max(sal),depno FROM emp GROUP BY depno;
```

查询每个部门的每种岗位的平均工资和最低工资

```sql
SELECT avg(sal),min(sal),depno,job FROM emp GROUP BY depno,job;
```

查询平均工资低于 2000 的部门好和它的平均工资

```sql
SELECT avg(sal),depno FROM emp GROUP BY depno having avg(sal)<2000;
SELECT avg(sal) AS avg_sal,depno FROM emp GROUP BY depno having avg_sal<2000;
```

#### 字符串的相关函数

| charset(str)                                       | 返回字符串字符集                                                                 |
| -------------------------------------------------- | -------------------------------------------------------------------------------- |
| concat(string2 string2)                            | 连接字串，返回字串                                                               |
| instr(string,substring)                            | 返回 substring 在 string 中出现的位置，没有返回 0                                |
| ucase(string)                                      | 转换成大写                                                                       |
| lcase(string)                                      | 转换成小写                                                                       |
| left(string,length)<br />right(string,length)      | 从 string 中的左边（右边）起取 length 个字符                                     |
| length(string)                                     | 返回 string 长度【按照字节】                                                     |
| replace(str,search_str,replace_str)                | 在 str 中用 replace_str 替换 search_str                                          |
| strcmp(string1,string2)                            | 逐字符比较两字符串的大小                                                         |
| substring(str,position,[length])                   | 从 str 的 postion 开始【从 1 开始计算】，取 length 个字符，length 不写就是取全部 |
| ltrim(string)<br />rtrim(string)<br />trim(string) | 去除前端空格<br />去除后端空格<br />去左右两端的                                 |

#### 数学相关函数

| ABS(num)                        | 绝对值                                                               |
| ------------------------------- | -------------------------------------------------------------------- |
| BIN(decimal_number)             | 十进制转二进制                                                       |
| CEILING(number)                 | 向上取整，得到比 num 大的最小整数                                    |
| FLOOR(number,decimal_places)    | 向下取整，得到比 num 小的最大整数                                    |
| CONV(number2,from_base,to_base) | 进制转换                                                             |
| FORMAT(number,decimal_places)   | 保留小数位数，四舍五入                                               |
| HEX(DecimalNumber)              | 转十六进制                                                           |
| LEAST(number,number2,...)       | 求最小值                                                             |
| MOD(numerator,denominator)      | 求余                                                                 |
| RAND(seed)                      | RAND()返回随机数，其范围为 0<=v<=1.0，如果 seed 不变，该随机数也不变 |

#### 日期相关函数

| CURRENT_DATE()                         | 当前日期                                         |
| -------------------------------------- | ------------------------------------------------ |
| CURRENT_TIME                           | 当前时间                                         |
| CURRENT_TIMESTAMP                      | 当前时间戳                                       |
| DATE(datetime)                         | 返回 datetime 的日期部分                         |
| DATE_ADD(date,INTERVAL d_value d_type) | 在 date 中加上日期或时间                         |
| DATE_SUB(date,INTERVAL d_value d_type) | 在 date 上减去一个时间                           |
| DATEDIFF(date1,date2)                  | 两个日期差（结果是天）                           |
| TIMEDIFF(date1,date2)                  | 两个时间差（结果是时 分 秒）                     |
| NOW()                                  | 当前时间                                         |
| YEAR\|Month\|DATE(datetime)            | 返回时间的年月 日                                |
| FROM_UNIXTIME()                        | 可以把一个时间戳转成一个指定格式的日期           |
| UNIX_TIMESTAMP()                       | 返回时间戳，不写参数返回 1970-1-1 到现在的毫秒数 |

#### 加密和系统函数

| USER()        | 查询用户                                                                                   |
| ------------- | ------------------------------------------------------------------------------------------ |
| DATABASE()    | 数据库名称                                                                                 |
| MD5(str)      | 为字符串算出一个 MD5 32 位的字符串，（用户密码）加密                                       |
| PASSWORD(str) | 从原文密码 str 计算并返回密码字符串，通常用于对 mysql 数据库的用户密码加密，8.0 过后取消了 |

#### 流程控制函数

| IF(expr1,expr2,expr3)                                                                           | 如果 expr1 为 true ，则返回 expr2，否则返回 expr3                                                   |
| ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| IFNULL(expr1,expr2)                                                                             | 如果 expr1 不为空 ，则返回 expr1，否则返回 expr2                                                    |
| SELECT CASE <br />WHEN expr1 THEN expr2 <br />WHEN expr3 THEN expr4 <br />ELSE expr5 <br />END; | 如果 expr1 为 true ，则返回 expr2，<br />如果 expr3 为位 true ，则返回 expr4，<br />否则返回 expr35 |

#### 分页查询

```sql
select ... limit rows*(第几页-1),rows -- 表示从rows*(第几页-1)行开始取，取出rows行，rows表示每页显示记录数
```

#### 多表查询

```sql
SELECT * FROM table1,table2;
```

默认情况下：当两个表同时查询时，规则

1.从第一张表中，取出一行和第二张表的每一行进行组合，返回结果【含有两张表的所有列】

2.一共返回的记录数：第一张表行数\*第二张表行数

3.这样多表查询默认处理返回的结果，称为笛卡尔积

4.解决这个多表的关键就是要写出正确的过滤条件 where table1.column = table2.column 列名要一样

5.多表查询的条件不能少于 表的个数-1，否则会出现笛卡尔积

##### 自连接查询

```sql
SELECT worker.ename AS '员工', boss.ename AS '上级' FROM emp worker,emp boss WHERE worker.mgr=boss.empno;
```

1.把同一张表当成两张表使用

2.需要给表取别名 表明 表别名

##### 子查询

```sql
SELECT * FROM emp WHERE deptno = (SELECT deptno FROM emp WHERE ename = 'SMITH') #单行子查询
```

```sql
SELECT ename,job,sal,deptno from emp WHERE job IN (SELECT DISTINCT job FROM emp WHERE deptno = 10) AND deptno <> 10; #多行子查询
```

##### 临时表

ALL 和 ANY

##### 去重

##### 合并查询

unino，unino all

##### 外连接

左外连接，即使左边表没有匹配到相应的值也会完全显示

```sql
select .. from table1 left join table2 on 条件; -- table1是左表，table2是右表
```

右外连接，即使右边表没有匹配到相应的值也会完全显示

```sql
select .. from table1 right join table2 on 条件; -- table1是左表，table2是右表
```

### DCL（管理用户，授权）

#### 管理用户

##### 添加用户

```sql
CREATE USER '用户名'@'主机名' IDENTIFIED BY '密码';
```

##### 删除用户

```sql
DROP USER '用户名'@'主机名';
```

##### 修改用户密码

```sql
UPDATE USER SET PASSWORD = PASSWORD('新密码') WHERE USER = '用户名';
UPDATE USER SET PASSWORD = PASSWORD('abc') WHERE USER = 'lisi';

SET PASSWORD FOR '用户名'@'主机名' = PASSWORD('新密码');
SET PASSWORD FOR 'root'@'localhost' = PASSWORD('123');
```

##### 查询用户

```sql
USE myql; #切换到mysql数据库
SELECT * FROM USER; #查询user表
```

#### 权限管理

##### 查询权限

```sql
SHOW GRANTS FOR '用户名'@'主机名';
```

##### 授予权限

```sql
grant 权限列表 on 数据库名.表名 to '用户名'@'主机名';
GRANT ALL ON *.* TO 'zhangsan'@'localhost'; #给张三用户授予所有权限，在任意数据库任意表上
```

##### 撤销权限

```sql
revoke 权限列表 on 数据库名.表名 from '用户名'@'主机名';
REVOKE ALL ON *.* FROM 'zhangsan'@'localhost'; #给张三用户撤销所有权限，在任意数据库任意表上
```

## SQL 列类型

### 数值类型

#### 整形

tinyint [1 个字节]

smalllint[2 个字节]

mediumint[3 个字节]

int[4 个字节]

bigint[8 个字节]

#### 小数类型

float[单精度 4 个字节]

double[双精度 8 个字节]

decimal[M,D] #可以支持更加精确的小数位，M 是小数位（精度）的总数，D 是小数点（标度）后面的位数。M 最大 65，D 最大 30。如果 D 被省略，默认是 0。如果 M 被省略，默认是 10。

### 文本类型（字符串类型）

char 0-255 表示的是字符 不区分字母还是汉字，固定长度，可能造成资源浪费。

varchar 0-65535[0~2^16-1] 变长，节约资源。但是 varchar 本身还需要占用 1-3 个字节来记录存放内容长度

text 0~2^16-1

longtext 0-2^32-1

### 二进制数据类型

blob [0-2^16-1]

longblob [0~2^32-1]

### 位类型（bit）

bit(m) m 在 1~64 8bit=1 个字节，显示的时候按位来显示

比如 m=8 表示一个字节 0~255

### 日期类型

date [日期 年月日]

time [时间 时分秒]

datetime [年月日 时分秒]

timestamp [时间戳]

year [年]

### 主键

primary key

复合主键

### unique

定义该列值不能重复

### 外键

```sql
FOREIGN KEY (本表字段名) REFERENCES 主表名(主键名或unique字段名)
```

### check 约束

```sql
check 约束条件
```

### 自增长

auto_increment

如果添加数据时，给自增长字段指定的有值，则以指定的值为准

```sql
alter table 表名 auto_increment = 新的开始值; -- 默认从1开始，可自行设置
```

### 创建索引

```sql
CREATE INDEX 索引名 on 表名(列名)
```

索引本身也会占用空间
