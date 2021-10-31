## 知识点整理

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

::: details new一个对象背后的过程
```text
1.创建一个空对象
2.给对象设置__proto__,值为构造函数对象的prototype属性值,    this.__proto__=Fn.prototype
3.执行构造函数体(给对象添加属性\方法)

tips: 理解原型和原型链即可理解new一个对象背后的过程
```
:::

::: details 网页输入一个URL到渲染的过程
```js 
① 获取IP地址
   1.首先会在浏览器的缓存中查找，是否缓存了URL，如果有，就直接向该URL对应的服务器发送请求；如果没有则进行下一步;
   2.在本地的hosts文件中是否保存了该URL和其对应的IP地址，如果保存了，就直接向该URL对应的服务器发送请求；如果没有则进行下一步；
   3.向本地DNS服务器（一般由本地网络接入服务器提供商提供，比如移动）发送DNS请求，本地DNS服务器会首先查询它的缓存记录，如果有就将该域名对应的IP地址返回给用户，如果没有则进行下一步；
   首先向根域名服务器发送DNS查询请求，根域名服务器返回给可能保存了该域名的一级域名服务器地址；本地主机再根据返回的地址，向一级域名服务器发送DNS查询请求；...一直迭代，直到找到对应的域名存放的服务器，向其发送DNS查询请求，该域名服务器返回该域名对应的IP地址；
② 三次握手建立浏览器与服务器的tcp连接
③ 浏览器向服务器发送http请求，并获取服务器响应信息
④ 浏览器拿到HTML文件后，根据渲染规则进行渲染：
   1.解析HTML，构建DOM树
   2.解析CSS，生成CSS规则树
   3.合并DOM树和CSS规则树，生成render树
   4.布局render树
   5.绘制render数、树，即绘制页面像素信息
   6.GPU将各层合成，结果呈现在浏览器窗口中。
⑤ 四次挥手关掉tcp连接
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

