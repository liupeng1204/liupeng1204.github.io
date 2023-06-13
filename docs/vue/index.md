---
title: Vue学习整理
date: 2021-10-17
categories:
 - tech
tags:
 - 前端
 - Vue
---

::: details Vue生命周期
![img](/img/vue生命周期.png)
:::

::: details Vue269
![img](/img/Vue269.png)
:::

::: details Vue2.0-知识点整理
![img](/img/Vue2.0-知识点整理.png)
:::

::: details NextTick 是干嘛用的
```text
nextTick是为了解决dom不渲染时，不能做一些操作的问题;
有时需要根据数据动态的为页面某些dom元素添加事件，这就要求在dom元素渲染完毕时去设置，但是created与mounted函数执行时一般dom并没有渲染完毕，所以就会出现获取不到，添加不了事件的问题，这回就要用到nextTick处理
```
:::
