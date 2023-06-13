## JS基础

::: details 原型和原型链
```text 
一、原型
①所有引用类型都有一个__proto__(隐式原型)属性，属性值是一个普通的对象
②所有函数都有一个prototype(原型)属性，属性值是一个普通的对象
③所有引用类型的__proto__属性指向它构造函数的prototype

举例代码：
var a = [1,2,3];
a.__proto__ === Array.prototype; // true

二、原型链
当访问一个对象的某个属性时，会先在这个对象本身属性上查找，如果没有找到，则会去它的__proto__隐式原型上查找，即它的构造函数的prototype，如果还没有找到就会再在构造函数的prototype的__proto__中查找，这样一层一层向上查找就会形成一个链式结构，我们称为原型链。
```
:::

::: details new一个对象背后的过程(手动实现一个new)
```text 
1.创建一个空对象
2.给对象设置__proto__,值为构造函数对象的prototype属性值,    this.__proto__=Fn.prototype
3.执行构造函数体(给对象添加属性\方法)

tips: 理解原型和原型链即可理解new一个对象背后的过程
```
```js 
// 手动实现一个new
function myNew (fun, ...arg) {
    // 创建一个新对象且将其隐式原型指向构造函数原型
    let obj = {
        __proto__: fun.prototype 
    }
    // 执行构造函数
    fun.apply(obj, arg)
    
    // 返回该对象
    return obj
}

function Person (name, age) {
    this.name = name ;
    this.age = age
}

let _person = myNew(Person, 'huang', '21')
console.log(_person)
```
:::

::: details 浏览器缓存机制
![img](/img/浏览器缓存机制.png)
:::

::: details html5的新特性
```text 
一、绘画 canvas

HTML5 标签用于绘制图像(通过脚本，通常是 JavaScript)。

二、用于媒介回放的video和audio元素

HTML5 DOM 为audio和video元素提供了方法、属性和事件。

这些方法、属性和事件允许您使用 JavaScript 来操作audio和video元素。

三、本地离线存储localStorage长期存储数据，浏览器关闭后数据不丢失

localStorage ：没有时间限制的数据存储

四、sessionStorage的数据在浏览器关闭后自动删除

sessionStorage ：针对一个session的数据存储

五、语意化更好的内容元素，比如 article、footer、header、nav、section

1. 标签定义外部的内容。

2. 标签定义文档或者文档的一部分区域的页眉。 元素应该作为介绍内容或者导航链接栏的容器。

3.Nav元素可以用作页面导航的链接组，在导航链接组里面有很多的链接，点击每个链接可以链接到其他页面或者当前页面的其他部分。

4.section是带有语义的标签。

六、表单控件，calendar、date、time、email、url、search

七、新的技术webworker, websocket, Geolocation
```
:::

::: details css3的新特性
```text
1.选择器(新增了一些选择器如：p:first-of-type)
2.新样式(border-radius：创建圆角边框；box-shadow：为元素添加阴影；border-image：使用图片来绘制边框)
3.transition 过渡(transition： CSS属性，花费时间，效果曲线(默认ease)，延迟时间(默认0))
4.transform 转换
5.animation 动画
6.渐变(background-image: linear-gradient(direction, color-stop1, color-stop2, …) 线性渐变)
7.布局(flex弹性布局、Grid栅格布局)
```
:::

::: details es6的新特性
```text 
1.let const
2.解构
3.模板字符串
4.箭头函数
5.promise
6.async/await，比promise更好的解决了回调地狱。
7.Set
```
:::

::: details 前端性能优化方案
```text 
三个方面来说明前端性能优化
 一： webapck优化与开启gzip压缩 
 1.babel-loader用 include 或 exclude来帮我们避免不必要的转译，不转译node_moudules中的js文件 其次在缓存当前转译的js文件，设置loader: 'babel-loader?cacheDirectory=true' 
 2.文件采用按需加载等等
 3.具体的做法非常简单，只需要你在你的 request headers 中加上这么一句： accept-encoding:gzip 
 4.图片优化采用svg图片或者字体图标
 5.浏览器缓存机制，它又分为强缓存和协商缓存 		
 二：本地存储——从 Cookie 到 Web Storage、
IndexedDB 说明一下SessionStorage和localStorage还有cookie的区别和优缺点
 三：代码优化
 1.事件代理 
 2.事件的节流和防抖
 3.页面的回流和重绘
 4.EventLoop事件循环机制 
 5.代码优化等等
```
:::

::: details 什么是纯函数？
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
:::

::: details sessionStorage、localStorage和cookie的区别
```text 
共同点：都是保存在浏览器端、且同源的  
区别：  
1、cookie数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递，而sessionStorage和localStorage不会自动把数据发送给服务器，仅在本地保存。cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下  
2、存储大小限制也不同，cookie数据不能超过4K，同时因为每次http请求都会携带cookie、所以cookie只适合保存很小的数据，如会话标识。sessionStorage和localStorage虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大   
3、数据有效期不同，sessionStorage：仅在当前浏览器窗口关闭之前有效；localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；cookie：只在设置的cookie过期时间之前有效，即使窗口关闭或浏览器关闭   
4、作用域不同，sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；localstorage在所有同源窗口中都是共享的；cookie也是在所有同源窗口中都是共享的   
5、web Storage支持事件通知机制，可以将数据更新的通知发送给监听者   
6、web Storage的api接口使用更方便，cookie的get/set方法需自己定义  
```
:::

::: details js实现防抖节流
```javascript 
// 1.防抖debounce
function debounce(fn,delay) {
    var timeout = null; // 创建一个标记用来存放定时器的返回值
    return function (e) {
        // 每当用户输入的时候把前一个 setTimeout clear 掉
        clearTimeout(timeout); 
        // 然后又创建一个新的 setTimeout, 这样就能保证interval 间隔内如果时间持续触发，就不会执行 fn 函数
        timeout = setTimeout(() => {
            fn.apply(this, arguments);
        }, delay);
    };
}

// 2.节流throttle
function throttle(fn,delay) {
    let canRun = true; // 通过闭包保存一个标记
    return function () {
         // 在函数开头判断标记是否为true，不为true则return
        if (!canRun) return;
         // 立即设置为false
        canRun = false;
        // 将外部传入的函数的执行放在setTimeout中
        setTimeout(() => { 
        // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。
        // 当定时器没有执行的时候标记永远是false，在开头被return掉
            fn.apply(this, arguments);
            canRun = true;
        }, delay);
    };
}

```
:::

::: details for in 和 for of 的区别
1.for...in 循环：只能获得对象的键名，不能获得键值  
  for...of 循环：允许遍历获得键值
```js  
var arr = ['red', 'green', 'blue']
 
for(let item in arr) {
  console.log('for in item', item)
}
/*
  for in item 0
  for in item 1
  for in item 2
*/
 
for(let item of arr) {
  console.log('for of item', item)
}
/*
  for of item red
  for of item green
  for of item blue
*/
```

2.对于普通对象，没有部署原生的 iterator 接口，直接使用 for...of 会报错
```js 
var obj = {
   'name': 'Jim Green',
   'age': 12
 }
 
 for(let key of obj) {
   console.log('for of obj', key)
 }
 // Uncaught TypeError: obj is not iterable
```
可以使用 for...in 循环遍历键名
```js 
for(let key in obj) {
   console.log('for in key', key)
 }
 /*
   for in key name
   for in key age
 */

```

3.forEach 循环无法中途跳出，break 命令或 return 命令都不能奏效;
  for...of 循环可以与break、continue 和 return 配合使用，跳出循环
```js 
let arr = [1, 2, 3, 5, 9]
arr.forEach(item => {
  if(item % 2 === 0) {
    return
  }
  console.log('item', item)
})
/*
  item 1
  item 3
  item 5
  item 9
*/
```

```js 
for(let item of arr) {
   if(item % 2 === 0) {
     break
   }
   console.log('item', item)
 }
 // item 1
```

:::

::: details EventLoop事件循环 执行顺序
```text
执行顺序：同步代码 > nextTick > Promise> setTimeout
```
:::

