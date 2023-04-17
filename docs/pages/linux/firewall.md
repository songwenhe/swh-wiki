---
title: 防火墙
order: 6
---

## centos

```shell
firewall-cmd --add-port=443/tcp #打开443/TCP端口
```

```shell
firewall-cmd --permanent --add-port=3690/tcp #permanent 永久

firewall-cmd --reload # 更新防火墙规则
```

## Ubuntu

```shell
ufw allow port_number/protocol #指定开放端口和协议
```

```shell
ufw allow ssh #UFW 防火墙被配置允许 SSH 远程连接
```

```shell
ufw allow 7722/tcp #开放7722/tcp端口
```

```shell
ufw allow 7100:7200/tcp #允许端口从7100到7200的tcp协议
```

```shell
ufw allow from 64.63.62.61 # IP 地址白名单
```

```shell
ufw allow from 64.63.62.61 to any port 22 #从 IP64.63.62.61的机器，通过22端口访问
```
