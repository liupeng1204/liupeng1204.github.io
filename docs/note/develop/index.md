---
title: 开发常见问题
date: 2021-10-20
---

::: details 端口占用
```shell script
sudo lsof -i:端口号
sudo kill -9 pid
```
:::

::: details git命令大全
![git命令大全](/img/git-directive.png)
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


