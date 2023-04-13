---
title: vmware
order: 4
---

## /mnt/hgfs/share 文件夹

### 如果之前已经挂载 hgfs，先取消挂载

```shell
sudo umount /mnt/hgfs
```

### 重新用以下命令挂载即可

```shell
sudo /usr/bin/vmhgfs-fuse .host:/ /mnt/hgfs -o allow_other -o uid=1000 -o gid=1000 -o umask=022
```

### 如果出现以下报错：

```
fuse: mountpoint is not empty
fuse: if you are sure this is safe, use the 'nonempty' mount option
```

### 就允许下面这个命令

```
sudo /usr/bin/vmhgfs-fuse .host:/ /mnt/hgfs -o nonempty -o allow_other -o uid=1000 -o gid=1000 -o umask=022
```

### 开机自启

```shell
sudo vim /etc/fstab # 打开配置文件
.host:/ /mnt/hgfs fuse.vmhgfs-fuse allow_other,uid=1000,gid=1000,umask=022   0 0
```
