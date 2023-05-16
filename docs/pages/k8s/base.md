---
title: k8s
order: 1
---

# kubernetes

Kubernetes 是一个可移植、可扩展的开源平台，用于管理容器化的工作负载和服务，可促进声明式配置和自动化。 Kubernetes 拥有一个庞大且快速增长的生态，其服务、支持和工具的使用范围相当广泛。

## k8s 集群机构组件

k8s 集群由 Master 节点和 Node（Worker）节点组成。

### **Master 节点**

Master 节点指的是集群控制节点，管理和控制整个集群，基本上 k8s 的所有控制命令都发给它，它负责具体的执行过程。在 Master 上主要运行着：

1. Kubernetes Controller Manager（kube-controller-manager）：k8s 中所有资源对象的自动化控制中心，维护管理集群的状态，比如故障检测，自动扩展，滚动更新等。
2. Kubernetes Scheduler（kube-scheduler）： 负责资源调度，按照预定的调度策略将 Pod 调度到相应的机器上。
3. etcd：保存整个集群的状态。

### **Node 节点**

除了 master 以外的节点被称为 Node 或者 Worker 节点，可以在 master 中使用命令 `kubectl get nodes`查看集群中的 node 节点。每个 Node 都会被 Master 分配一些工作负载（Docker 容器），当某个 Node 宕机时，该节点上的工作负载就会被 Master 自动转移到其它节点上。在 Node 上主要运行着：

1. kubelet：负责 Pod 对应的容器的创建、启停等任务，同时与 Master 密切协作，实现集群管理的基本功能
2. kube-proxy：实现 service 的通信与负载均衡
3. docker（Docker Engine）：Docker 引擎，负责本机的容器创建和管理

## k8s 核心概念

- **Controller Manager**，即控制平面，用于**调度**程序以及节点状态**检测**。
- **Nodes**，构成了 Kubernetes 集群的集体计算能力，**实际部署容器运行的地方**。
- **Pods**，Kubernetes 集群中**资源的最小单位**。
