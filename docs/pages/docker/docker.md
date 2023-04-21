---
title: 容器
order: 3
---

## 容器命令

### docker run

```shell
docker run [options] IMAGES [command] [ARG...]
```

options 说明（常用）：有些是一个减号，有些是两个减号

| --name="容器新名字" | 为容器指定一个名称                                        |
| ------------------- | --------------------------------------------------------- |
| -d                  | 后台运行容器并返回容器 ID，也即启动守护式容器（后台运行） |
| -i                  | 以交互模式运行容器，通常与-t 同时使用                     |
| -t                  | 为容器重新分配一个伪输入终端，通常与-i 同时使用           |
| -P                  | 随机端口映射，大写 P                                      |
| -p                  | 指定端口映射，小写 p                                      |

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

ubuntu：ubuntu 镜像

/bin/bash：放在镜像后的是命令，这里我们希望有个交互式 shell，因此用的是 /bin/bash

要退出终端，直接输入 exit

### docker ps

```shell
docker ps [options]
```

options 说明（常用）：

| -a   | 列出当前所有正在运行的容器+历史上运行过的 |
| ---- | ----------------------------------------- |
| -l   | 显示最近创建的容器                        |
| -n i | 显示最近创建的 i 个容器                   |
| -q   | 静默模式，只显示容器编号                  |

### 退出容器

| exit     | run 进去容器，exit 退出，容器停止       |
| -------- | --------------------------------------- |
| ctrl+p+q | run 进去容器，ctrl+p+q 退出，容器不停止 |

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

```shell
docker exec -it 容器ID /bin/bash #
docker attach 容器ID #
```

attach 直接进入容器启动命令的终端，不会启动新的进程。用 exit 退出，会导致容器的停止。

exec 是在容器中打开新的终端，并且可以启动新的进程。用 exit 退出，不会导致容器的停止。

推荐使用 docker exec 命令，因为退出终端，不会导致容器停止

### docker cp

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

### docker commit

```shell
docker commit 容器id 镜像名:TAG
```

### docker push

以阿里云为例

```shell
docker login --username=songwenhe registry.cn-chengdu.aliyuncs.com   #登录到阿里云仓库
docker tag [ImageId] registry.cn-chengdu.aliyuncs.com/songwenhe/ubuntu:[镜像版本号] #安装正确的格式修改本地镜像文件
docker push registry.cn-chengdu.aliyuncs.com/songwenhe/ubuntu:[镜像版本号] # push本地镜像到阿里云镜像仓库
```

## 搭建 docker 私有镜像仓库

创建私有镜像仓库

```shell
docker pull registry
docker run -d -p 5000:5000 -v /songuse/myubuntu:/tmp/myubuntu --privileged=true registry
```

将本地制作好的镜像上传到私有仓库

```shell
docker commit -m='install vim' -a='songwenhe' 容器id ubuntu:1.5
docker tag ubuntu:1.5 192.168.88.8:5000/myubuntu:1.5
docker push 192.168.88.8:5000/myubuntu:1.5
```

docker 默认不允许 http 方式推送镜像，通过配置选项来取消这个限制

```json
"insecure-registries":["192.168.88.8:5000"]
```

## 容器数据卷

在容器中挂载宿主机的目录，方便宿主机联调

```shell
docker run -it -v 宿主机目录:容器目录:读写规则 --privileged=true ubuntu
```

读写规则：ro read only，rw 可读可写

容器卷之间的继承

```shell
docker run -it -v from 父类 --privileged=true ubuntu
```

## docker 镜像
