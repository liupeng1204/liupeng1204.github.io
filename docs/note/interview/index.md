---
title: 面试总结
date: 2021-10-20
categories:
 - tech
tags:
 - 前端
 - 笔记
 - 面试
---

::: details 前端复习
![React328](/img/Vue2.0-知识点整理.png)
:::

::: details 【前端面试】什么是纯函数？
纯函数要满足以下三点：
1.相同输入总是会返回相同的输出。
2.不产生副作用。
3.不依赖于外部状态。

例1
那么根据第一点，这个是纯函数吗？
```js
var a = 10
        function f(b){
            return a+b
        }
        console.log(f(5));
```  
答案是否定的，因为当全局的 a = 10 时，输出是 15，当全局的 a = 0 时，输出是 5。不满足第一条还有第三条规定。

例2
```js
obj={}
        function f(b){
            obj.a = 10
            return b
        }
        console.log(f(5));
```
这个是纯函数吗？答案也是否定的，因为函数改变了全局作用域里面的 obj。不满足第二条规定。

面试的时候直接给面试官说这两个例子就行，他会清楚的明白你懂了。

:::
