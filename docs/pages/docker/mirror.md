---
title: 镜像
order: 2
---

## 镜像命令

### docker images

列出本地主机上的镜像，

-a：列出本地所有镜像，-q：只显示镜像 id

各个选项说明

| REPOSITORY | 表示镜像的仓库源 |
| ---------- | ---------------- |
| TAG        | 镜像的标签版本号 |
| IMAGE ID   | 镜像 ID          |
| CREATED    | 镜像创建时间     |
| SIZE       | 镜像大小         |

同一仓库源可以有多个 TAG 版本，代表这个仓库源的不同版本，我们使用 REPOSITORY:TAG 来定义不同的镜像。如果你不指定镜像的版本标签，docker 将默认使用 REPOSITORY:latest 镜像

### docker search

```shell
docker search [options] 镜像名称
```

```
docker search --limit 5 redis #只显示前五个redis镜像
```

| NAME        | 镜像名称         |
| ----------- | ---------------- |
| DESCRIPTION | 镜像说明         |
| STARS       | 点赞数量         |
| OFFICIAL    | 是否是官方的     |
| AUTOMATED   | 是否是自动构建的 |

### docker pull

```shell
docker pull 镜像名字:TAG  #不写TAG则等价于:latest
```

### docker system df

```shell
docker system df #查看镜像/容器/数据卷所占的空间
```

### docker rmi

```shell
docker rmi -f 镜像名称/ID #删除镜像
```

```shell
docker rmi -f 镜像名1:TAG 镜像名2:TAG #删除多个镜像
```

```shell
docker rmi -f $(docker images -qa) #删除全部镜像
```
