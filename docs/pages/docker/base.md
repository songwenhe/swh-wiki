---
title: docker安装
order: 1
---

## 安装

以阿里云镜像为例

```shell
apt-get update
```

```shell
apt-get -y install apt-transport-https ca-certificates curl software-properties-common #安装GPG证书
```

```shell
curl -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add - # 写入软件源信息 可能会报错
curl -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg #报错用该命令
```

```shell
sudo add-apt-repository "deb [arch=amd64] https://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"  # Step 4: 更新并安装Docker-CE
```

```shell
sudo apt-get -y update
```

```shell
sudo apt-get -y install docker-ce
```

## 配置镜像加速器

针对 Docker 客户端版本大于 1.10.0 的用户

您可以通过修改 daemon 配置文件/etc/docker/daemon.json 来使用加速器

```shell
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://fozrpo1g.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```
