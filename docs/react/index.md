---
title: React学习整理
date: 2021-10-17
categories:
 - tech
tags:
 - 前端
 - React
---

::: details React328
![React328](/img/React328.png)
:::

::: details useMemo和useCallback的区别及使用场景
useMemo和useCallback都是reactHook提供的两个API，用于缓存数据，优化性能；两者接收的参数都是一样的，第一个参数表示一个回调函数，第二个表示依赖的数据。  
**共同作用**  
> 在依赖数据发生变化的时候，才会调用传进去的回调函数去重新计算结果，起到一个缓存的作用  

**两者的区别**  
> useMemo  缓存的结果是回调函数中return回来的值，主要用于缓存计算结果的值，应用场景如需要计算的状态
> useCallback  缓存的结果是函数，主要用于缓存函数，应用场景如需要缓存的函数，因为函数式组件每次任何一个state发生变化，会触发整个组件更新，一些函数是没有必要更新的，此时就应该缓存起来，提高性能，减少对资源的浪费；另外还需要注意的是，useCallback应该和React.memo配套使用，缺了一个都可能导致性能不升反而下降。

:::

::: details useEffect 与 useLayoutEffect 的区别
**相同点**  
> useEffect 与 useLayoutEffect 两者都是用于处理副作用；使用方式也完全相同 

**不同点**
> useEffect 在 React 渲染过程中是被异步调用的，用于绝大多数场景；
>useLayoutEffect 会在所有的 DOM 变更之后同步调用，需要避免在 useLayoutEffect 做计算量较大的耗时任务从而造成阻塞。

:::

::: details React与Vue的区别
![React与Vue的区别](/img/react_vue.png)
:::
