---
title: docker网络
order: 5
---

## docker 网络

### 网络模式

`bridge`：为每个容器分配 IP 地址，并将容器连接到 docker0 的虚拟网桥，默认模式

`host`：容器使用宿主机的 IP 地址和端口

`none`：容器有独立的 network namespace，但没有对网络进行任何设置

`container`：新创建的容器不会创建自己的网卡，而是和一个指定的容器共享 IP、端口等。

### 基础命令

```shell
docker network ls #查看网络
docker network inspect 网络名字 #查看网络源数据
docker network rm 网络名字 #删除网络
docker network connect 网络名称 容器名称 #为容器连接新的网络模式
```

### 自定义网络

```shell
docker network create 网络名字 #创建网络
```

新建的自定义网络，自动做了 DNS 解析，默认使用桥接模式。可以让容器之间用服务名通讯。
