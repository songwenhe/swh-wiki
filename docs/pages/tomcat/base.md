---
title: tomcat基础
order: 1
---

## tomcat 的配置

### 配置文件路径

```shell
/tomcat/conf/server.xml
```

### tomcat 的启动和关闭

```shell
/tomcat/bin/startup.sh #启动tomcat
/tomcat/bin/shutdown.sh #关闭tomcat
```

### tomcat 目录结构

| /bin        | 存放 tomcat 管理脚本          |
| ----------- | ----------------------------- |
| /conf       | 配置文件路径                  |
| /logs       | 日志目录                      |
| /webapps    | 站点目录                      |
| /lib tomcat | 依赖，.jar 结尾               |
| /temp       | 临时目录                      |
| /work       | tomcat 运行代码的编译临时目录 |

### tomcat配置systemctl服务

新建tomcat.service文件：vim /lib/systemd/system/tomcat.service 

写入以下代码

```shell
[Unit]
Description=The tomcat web server by songwenhe #描述
After=network.target nss-lookup.target

[Service]
Type=forking
EnvironmentFile=/etc/default/tomcat #环境变量文件
ExecStart=/export/server/tomcat/bin/startup.sh #启动
ExecStop=/export/server/tomcat/bin/shutdown.sh #关闭
ExecReload=/export/server/tomcat/bin/shutdown.sh && sleep 2 && /export/server/tomcat/bin/startup.sh #重启
[Install]
WantedBy=multi-user.target
```

配置tomcat环境变量文件。$JAVA_HOME前面的环境变量是系统的环境变量

用echo $PATH输出后直接复制进去

```shell
JAVA_HOME=/export/server/jdk
PATH=/.nvm/nvm-0.39.1/versions/node/v8.16.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/export/server/jdk/bin:$JAVA_HOME/bin
```

此时就可使用systemctl 去管理tomcat服务了

### tomcat管理端

无法访问时根据提示修改规则 /tomcat/conf/tomcat-users.xml

```xml
<role rolename="manager-gui"/>
<role rolename="admin-gui"/>
<user username="tomcat" password="s3cret" roles="manager-gui"/>
<user username="tomcat" password="s3cret" roles="admin-gui"/>
```

修改后还是无法访问管理端，是因为tomcat8.5之后，就只允许本地访问管理端，到webapps目录下

```shell
find -name context.xml
./examples/META-INF/context.xml
./host-manager/META-INF/context.xml ##
./docs/META-INF/context.xml
./manager/META-INF/context.xml ##
```

修改./host-manager/META-INF/context.xml和./manager/META-INF/context.xml，这两个文件需要修改的地方是一样的

```xml
<Valve className="org.apache.catalina.valves.RemoteAddrValve"
        allow="127\.\d+\.\d+\.\d+|::1|0:0:0:0:0:0:0:1" />
```

将 127 改成 \d+ , 运行以下代码

```shell
sed -i 's#127#\\d+#g' ./host-manager/META-INF/context.xml ./manager/META-INF/context.xml
```



