## TypeScript

::: details 什么是Typescript
>Typescript是强类型的Javascript超集，支持ES6语法，支持面向对象编程的概念，如类、接口、继承、泛型等。
>Typescript并不直接在浏览器上运行，需要编译器编译成纯Javascript来运行。

:::

::: details Typescript基础类型
![typescript_type](/img/typescript_type.png)
:::

::: details Typescript的装饰器
1.什么是装饰器  
> 装饰器是一种特殊类型的声明，它能够被附加到类声明，方法， 访问符，属性或参数上。
> 装饰器使用 @expression这种形式，expression求值后必须为一个函数，它会在运行时被调用，被装饰的声明信息做为参数传入。 
> 通俗的理解可以认为就是在原有代码外层包装了一层处理逻辑。

2.如何定义装饰器  
装饰器本身其实就是一个函数，理论上忽略参数的话，任何函数都可以当做装饰器使用。
```typescript 
// helloword.ts

function helloWord(target: any) {
    console.log('hello Word!');
}

@helloWord
class HelloWordClass {

}

// 使用tsc编译后,执行命令node helloword.js，输出结果如下：
// hello Word!

```
:::

