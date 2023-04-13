---
title: Linux 包管理
order: 3
---

### yum 命令

#### yum 语法（centos）

```shell
yum [options] [command] [package ...]
```

- **options：**可选，选项包括-h（帮助），-y（当安装过程提示选择全部为 "yes"），-q（不显示安装的过程）等等。
- **command：**要进行的操作。
- **package：**安装的包名。

---

#### yum 常用命令

| yum check-update                                                      | 列出所有可更新的软件清单命令         |
| --------------------------------------------------------------------- | ------------------------------------ |
| yum update                                                            | 更新所有软件命令                     |
| `yum install <package_name>`                                          | 仅安装指定的软件命令                 |
| `yum update <package_name>`                                           | 仅更新指定的软件命令                 |
| yum list                                                              | 列出所有可安裝的软件清单命令         |
| `yum remove <package_name>`                                           | 删除软件包命令                       |
| `yum search <keyword>`                                                | 查找软件包命令                       |
| yum clean packages                                                    | 清除缓存目录下的软件包               |
| yum clean headers                                                     | 清除缓存目录下的 headers             |
| yum clean oldheaders                                                  | 清除缓存目录下旧的 headers           |
| yum clean, yum clean all (= yum clean packages; yum clean oldheaders) | 清除缓存目录下的软件包及旧的 headers |

### apt 命令

#### apt 语法

```shell
  apt [options] [command] [package ...]
```

- **options：**可选，选项包括 -h（帮助），-y（当安装过程提示选择全部为"yes"），-q（不显示安装的过程）等等。
- **command：**要进行的操作。
- **package**：安装的包名。

#### apt 常用命令

| sudo apt update                                        | 列出所有可更新的软件清单命令                            |
| ------------------------------------------------------ | ------------------------------------------------------- |
| sudo apt upgrade                                       | 升级软件包                                              |
| apt list --upgradeable                                 | 列出可更新的软件包及版本信息                            |
| sudo apt full-upgrade                                  | 升级软件包，升级前先删除需要更新软件包                  |
| `sudo apt install <package_name>`                      | 安装指定的软件命令                                      |
| `sudo apt install <package_1> <package_2> <package_3>` | 安装多个软件包                                          |
| `sudo apt install <package_name>`                      | 更新指定的软件命令                                      |
| `sudo apt show <package_name>`                         | 显示软件包具体信息,例如：版本号，安装大小，依赖关系等等 |
| `sudo apt remove <package_name>`                       | 删除软件包命令                                          |
| sudo apt autoremove                                    | 清理不再使用的依赖和库文件                              |
| `sudo apt purge <package_name>`                        | 移除软件包及配置文件                                    |
| `sudo apt search <package_name>`                       | 查找软件包命令                                          |
| apt list --installed                                   | 列出所有已安装的包                                      |
| apt list --all-versions                                | 列出所有已安装的包的版本信息                            |
