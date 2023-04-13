---
title: 容器
order: 3
---
## 容器命令

### docker run

```shell
docker run [options] IMAGES [command] [ARG...]
```

options说明（常用）：有些是一个减号，有些是两个减号

| --name="容器新名字" | 为容器指定一个名称                                       |
| ------------------- | -------------------------------------------------------- |
| -d                  | 后台运行容器并返回容器ID，也即启动守护式容器（后台运行） |
| -i                  | 以交互模式运行容器，通常与-t同时使用                     |
| -t                  | 为容器重新分配一个伪输入终端，通常与-i同时使用           |
| -P                  | 随机端口映射，大写P                                      |
| -p                  | 指定端口映射，小写p                                      |

```shell
docker run -it ubuntu /bin/bash #用ubuntu镜像运行一个docker容器
```

```shell
 docker run -it --name=myubuntu ubuntu bash  #用ubuntu镜像运行一个docker容器，并命名为myubuntu
```

```shell
docker ps #查看运行的容器
CONTAINER ID   IMAGE     COMMAND       CREATED          STATUS          PORTS     NAMES
db539c10ea38   ubuntu    "bash"        29 seconds ago   Up 28 seconds             myubuntu
371c4c119465   ubuntu    "/bin/bash"   7 minutes ago    Up 7 minutes              gifted_kare
```

参数说明：

-i：交互式操作

-t：终端

ubuntu：ubuntu镜像

/bin/bash：放在镜像后的是命令，这里我们希望有个交互式shell，因此用的是 /bin/bash

要退出终端，直接输入exit

### docker ps

```shell
docker ps [options]
```

options说明（常用）：

| -a   | 列出当前所有正在运行的容器+历史上运行过的 |
| ---- | ----------------------------------------- |
| -l   | 显示最近创建的容器                        |
| -n i | 显示最近创建的i个容器                     |
| -q   | 静默模式，只显示容器编号                  |

### 退出容器

| exit     | run进去容器，exit退出，容器停止       |
| -------- | ------------------------------------- |
| ctrl+p+q | run进去容器，ctrl+p+q退出，容器不停止 |

### docker start 

```shell
docker start 容器ID或者容器名 #启动已停止运行的容器
```

### docker restart

```shell
docker restart 容器ID或者容器名 #重启容器
```

### docker stop

```shell
docker stop 容器ID或者容器名 #停止容器
```

### docker kill

```shell
docker kill 容器ID或者容器名 #强制停止容器
```

### docker rm

```shell
docker rm 容器ID #删除已停止的容器
docker rm $(docker ps -aq) #删除所有已停止的容器
docker rm -f 容器ID #强制删除容器
docker rm -f $(docker ps -aq) #强制删除所有容器，慎用
```

### docker logs

```shell
docker logs 容器ID #查看容器日志
```

### docker top 

```shell
docker top 容器ID #查看容器内运行的进程
```

### docker inspect

```shell
docker inspect 容器ID #查看容器内部细节
```

### 进入正在运行的容器

```
docker exec -it 容器ID bashShell #
docker attach 容器ID #
```

attach直接进入容器启动命令的终端，不会启动新的进程。用exit退出，会导致容器的停止。

exec是在容器中打开新的终端，并且可以启动新的进程。用exit退出，不会导致容器的停止。

推荐使用docker exec 命令，因为退出终端，不会导致容器停止

###  docker cp

```
docker cp 容器ID:容器内路径 目的主机路径
```

### 容器的备份和还原

```shell
docker export 容器ID > 文件名.tar #导出容器的内容留作为一个tar归档文件[对于import命令]
```

```shell
cat 文件名.tar | docker import - 镜像用户/镜像名:镜像版本号 #从tar包中的内容创建一个新的文件系统再导入问镜像[对应export]
```

## docker镜像


