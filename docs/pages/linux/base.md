---
title: linux 基础知识
order: 1
---

# Linux 基础

## Linux 目录结构

| 路径        | 说明                                                         |
| ----------- | ------------------------------------------------------------ |
| /bin        | 存放命令(二进制文件)                                         |
| /boot       | 一些连接文件以及镜像文件                                     |
| /dev        | Device(设备) 的缩写，存放的是 Linux 的外部设备               |
| /etc        | 系统管理的配置文件和子目录。                                 |
| /home       | 用户的主目录                                                 |
| /lib        | 动态连接共享库                                               |
| /lost+found | 系统非法关机的错误日志                                       |
| /media      | 自动识别的设备                                               |
| /mnt        | 临时挂载别的文件系统                                         |
| /opt        | 额外安装软件的目录，默认是空的。                             |
| /proc       | proc 是 Processes(进程) 的缩写，/proc 是一种伪文件系统（也即虚拟文件系统）。 |
| /root       | 超级权限者的用户主目录                                       |
| /sbin       | 系统管理员使用的系统管理程序                                 |
| /selinux    | 存放 selinux 相关的文件                                      |
| /srv        | 存放一些服务启动之后需要提取的数据。                         |
| /sys        | 新的一个文件系统 sysfs                                       |
| /tmp        | 存放一些临时文件的                                           |
| /usr        | 共享资源                                                     |
| /usr/bin    | 系统用户使用的应用程序                                       |
| /usr/sbin   | 超级用户使用的比较高级的管理程序和系统守护程序               |
| /usr/src    | 内核源代码默认的放置目录。                                   |
| /var        | 不断扩充着的文件目录。包括各种日志文件。                     |
| /run        | 是一个临时文件系统，存储系统启动以来的信息。                 |
| /etc        | 系统中的配置文件                                             |

**/home**：用户的主目录，在 Linux 中，每个用户都有一个自己的目录，一般该目录名是以用户的账号命名的，如上图中的 alice、bob 和 eve。

**/lib**：lib 是 Library(库) 的缩写这个目录里存放着系统最基本的动态连接共享库，其作用类似于 Windows 里的 DLL 文件。几乎所有的应用程序都需要用到这些共享库。

**/media**：linux 系统会自动识别一些设备，例如 U 盘、光驱等等，当识别后，Linux 会把识别的设备挂载到这个目录下。

**/mnt**：系统提供该目录是为了让用户临时挂载别的文件系统的，我们可以将光驱挂载在 /mnt/ 上，然后进入该目录就可以查看光驱里的内容了。

**/proc**：proc 是 Processes(进程) 的缩写，/proc 是一种伪文件系统（也即虚拟文件系统），存储的是当前内核运行状态的一系列特殊文件，这个目录是一个虚拟的目录，它是系统内存的映射，我们可以通过直接访问这个目录来获取系统信息。
这个目录的内容不在硬盘上而是在内存里，我们也可以直接修改里面的某些文件，比如可以通过下面的命令来屏蔽主机的 ping 命令，使别人无法 ping 你的机器：

```shell
echo 1 > /proc/sys/net/ipv4/icmp_echo_ignore_all
```

**/selinux**：
这个目录是 Redhat/CentOS 所特有的目录，Selinux 是一个安全机制，类似于 windows 的防火墙，但是这套机制比较复杂，这个目录就是存放 selinux 相关的文件的。

**/sys**：这是 Linux2.6 内核的一个很大的变化。该目录下安装了 2.6 内核中新出现的一个文件系统 sysfs 。sysfs 文件系统集成了下面 3 种文件系统的信息：针对进程信息的 proc 文件系统、针对设备devfs 文件系统以及针对伪终端的 devpts 文件系统。该文件系统是内核设备树的一个直观反映。当一个内核对象被创建的时候，对应的文件和目录也在内核对象子系统中被创建。

**/usr**：usr 是 unix shared resources(共享资源) 的缩写，这是一个非常重要的目录，用户的很多应用程序和文件都放在这个目录下，类似于 windows 下的 program files 目录。

注释：**/bin, /sbin, /usr/bin, /usr/sbin**: 这是系统预设的执行文件的放置目录，比如 **ls** 就是在 **/bin/ls** 目录下的。值得提出的是 **/bin**、**/usr/bin** 是给系统用户使用的指令（除 root 外的通用用户），而/sbin, /usr/sbin 则是给 root 使用的指令。

## Linux 忘记密码解决方法

进入单用户模式更改一下 root 密码即可。


## Linux 用户和用户组管理

### Linux 系统用户账号的管理

#### 添加新的用户账号

使用 useradd 命令，其语法如下：

```shell
useradd 选项 用户名
```

选项:

| -c  | comment 指定一段注释性描述。                                                 |
| :-: | ---------------------------------------------------------------------------- |
| -d  | 目录 指定用户主目录，如果此目录不存在，则同时使用-m 选项，可以创建主目录。   |
| -g  | 用户组 指定用户所属的用户组。                                                |
| -G  | 用户组，用户组 指定用户所属的附加组。                                        |
| -s  | Shell 文件 指定用户的登录 Shell。                                            |
| -u  | 用户号 指定用户的用户号，如果同时有-o 选项，则可以重复使用其他用户的标识号。 |

用户名: 指定新账号的登录名。

#### 删除账号

删除一个已有的用户账号使用`userdel`命令，其格式如下：

```shell
userdel 选项 用户名
```

常用的选项是 **-r**，它的作用是把用户的主目录一起删除。

例如：

```shell
userdel -r sam
```

此命令删除用户 sam 在系统文件中（主要是/etc/passwd, /etc/shadow, /etc/group 等）的记录，同时删除用户的主目录。

#### 修改帐号

修改用户账号就是根据实际情况更改用户的有关属性，如用户号、主目录、用户组、登录 Shell 等。

修改已有用户的信息使用`usermod`命令，其格式如下：

```shell
usermod 选项 用户名
```

常用的选项包括`-c, -d, -m, -g, -G, -s, -u以及-o等`，这些选项的意义与`useradd`命令中的选项一样，可以为用户指定新的资源值。

另外，有些系统可以使用选项：-l 新用户名

这个选项指定一个新的账号，即将原来的用户名改为新的用户名。

例如：

```shell
usermod -s /bin/ksh -d /home/z –g developer sam
```

此命令将用户 sam 的登录 Shell 修改为 ksh，主目录改为/home/z，用户组改为 developer。

#### 用户口令的管理

指定和修改用户口令的 Shell 命令是`passwd`。超级用户可以为自己和其他用户指定口令，普通用户只能用它修改自己的口令。命令的格式为：

```shell
passwd 选项 用户名
```

可使用的选项：

- -l 锁定口令，即禁用账号。
- -u 口令解锁。
- -d 使账号无口令。
- -f 强迫用户下次登录时修改口令。

如果默认用户名，则修改当前用户的口令。

例如，假设当前用户是 sam，则下面的命令修改该用户自己的口令：

```shell
$ passwd
Old password:******
New password:*******
Re-enter new password:*******
```

如果是超级用户，可以用下列形式指定任何用户的口令：

```shell
$ passwd sam
New password:*******
Re-enter new password:*******
```
