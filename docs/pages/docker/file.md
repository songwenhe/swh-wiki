---
title: Dockerfile
order: 4
---

## docker file

| FROM       | 基础镜像，基于哪个镜像                                                                                                                                                                                            |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MAINTAINER | 镜像维护者的姓名和邮箱地址                                                                                                                                                                                        |
| RUN        | 容器构建的时候执行的命令                                                                                                                                                                                          |
| EXPOSE     | 容器对外暴露的端口                                                                                                                                                                                                |
| WORKDIR    | 指定创建容器后，默认终端登录进来的工作目录                                                                                                                                                                        |
| USER       | 指定该镜像以什么样的用户去执行，如果不指定，默认是 root                                                                                                                                                           |
| ENV        | 用来在构建镜像的过程中设置环境变量                                                                                                                                                                                |
| ADD        | 将宿主机目录下的文件拷贝进镜像且会自动处理 URL 和解压 tar 压缩包                                                                                                                                                  |
| COPY       | 类似`ADD`，拷贝文件和目录到镜像中                                                                                                                                                                                 |
| VOLUME     | 容器数据卷，用于数据保存和持久化工作                                                                                                                                                                              |
| CMD        | 指定容器启动后要干的事情。<br />CMD ["参数 1","参数 2"]。在指定`ENTRYPOINT`指令后，用`CMD`指定具体参数<br />一个 docker file 可以有多个 CMD 指令，但只有最后一个会生效，`CMD`指令还会被`docker run`之后的参数替换 |
| ENTRYPOINT | 指定容器启动时要允许的命令<br />类似`CMD`指令，但是`ENTRYPOINT`不会被 docker run 后面的命令覆盖<br />而且这些命令行参数会被当做参数传给`ENTRYPOINT`指令指定的程序                                                 |

构建一个安装了 vim，net-tools，jdk8 的 ubunut 镜像

```dockerfile
FROM ubuntu
MAINTAINER songwenhe<songwenhe1997@qq.com>
ENV MYPATH /usr/local
WORKDIR $MYPATH
RUN apt update
RUN apt -y install vim
RUN apt -y install net-tools
RUN mkdir /usr/local/java
ADD jdk-8u351-linux-x64.tar.gz /usr/local/java/
ENV JAVA_HOME /usr/local/java/jdk1.8.0_351
ENV JRE_HOME $JAVA_HOME/jre
ENV CLASSPATH $JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib:$CLASSPATH
ENV PATH $JAVA_HOME/bin:$PATH
EXPOSE 80
CMD echo $MYPATH
CMD echo "successful"
CMD /bin/bash
```

```shell
docker build -t centosjava8:2.0 .
```
