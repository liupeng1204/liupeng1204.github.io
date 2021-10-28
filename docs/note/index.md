---
title: 前端学习笔记
date: 2021-10-17
categories:
 - tech
tags:
 - 前端
 - 笔记
---

::: details 前端复习
![React328](/img/Vue2.0-知识点整理.png)
:::

::: details 端口占用
```shell script
sudo lsof -i:端口号
sudo kill -9 pid
```
:::

::: details github访问不了
https://websites.ipaddress.com/github.com
https://websites.ipaddress.com/github.global.ssl.fastly.net

获取上述2个地址查询的ip，替换本地hosts地址映射
```shell script
vim /etc/hosts

...
140.82.112.4    github.com
199.232.69.194  github.global.ssl.fastly.net
...

```
:::

::: details git命令大全
![git命令大全](/img/git-directive.png)
:::
