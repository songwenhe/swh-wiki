---
title: linux面试
order: 1
---

# Linux 面试

## 1.分析日志 t.log(访问量)，将各个 ip 地址截取，并统计出现次数，并按从大到小排序

```
http://192.168.200.10/index1.html
http://192.168.200.10/index2.html
http://192.168.200.20/index1.html
http://192.168.200.30/index1.html
http://192.168.200.40/index1.html
http://192.168.200.30/order.html
http://192.168.200.10/order.html
```

```shell
cat t.txt | cut -d '/' -f 3 | sort | uniq -c | sort -nr #
```

```
3 192.168.200.10
2 192.168.200.30
1 192.168.200.40
1 192.168.200.20
```

## 2.统计连接到服务器的各个 ip 情况，并按连接数从大到小排序

```shell
ss -tan | grep ESTAB | awk -F " " '{print $5}' | awk -F ":" '{print $1}' | sort | uniq -c | sort -nr
```

## 3.如果忘记了 mysql 数据库的 root 用户的密码，如何找回？

MySQL8.0：在配置文件中加上 skip-grant-tables。登录 mysql

```mysql
use mysql;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123';
```

## 4.写出指令：统计 IP 访问情况，要求分析 nginx 访问日志（accesss.log），找出访问页面数量在前两位的 ip

```
 cat access.log | awk -F " " '{print $1}' | sort | uniq -c | sort -nr | head -2
```

## 5.使用 tcpdump 监听本机，将来着 ip x.x.x.x，tcp 端口为 22 的数据，保存输出到 tcpdump.log

```shell
tcpdump -i ens33 host 192.168.88.8 and port 22 >> /path/tcpdump.log
```

## 6.常用的 nginx 模块，用来做什么

<details class="details-block"><summary>答案</summary>

`rewrite` 模块：实现路径重写

`access` 模块：来源控制

`ssl` 模块：安全加密

`ngx_http_gzip_module`：网络传输压缩模块

`ngx_http_proxy_module`：代理实现模块

`ngx_http_upstream_module`：定义后端服务器列表模块

`ngx_cache_purge`：清楚缓存功能模块

</details>

## 7.如果你是系统管理员，在 Linux 系统权限划分时，应考虑哪些因素？

首先阐述 Linux 权限的主要对象
