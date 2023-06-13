## 面试高频手撕代码题

::: details 实现防抖节流函数
```js
function Debounce(fn, delay) {
  var timeout = null
  return function() {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}

function Throttle(fn, delay) {
  let canRun = true
  return function() {
    if (!canRun) return
    canRun = false
    setTimeout(() => {
      fn.apply(this, arguments)
      canRun = true
    }, delay)
  }
}
```
:::

::: details 实现 Promise.all()
```js
Promise.all = function (iterator) {
  if (!Array.isArray(iterator)) return;
  let count = 0;
  let res = [];
  return new Promise((resolve, reject) => {
    for (let item of iterator) {
      Promise.resolve(item)
        .then(data => {
          res[count++] = data;
          if (count === iterator.length) {
            resolve(res);
          }
        })
        .catch(e => {
          reject(e);
        });
    }
  });
};
```
:::

::: details 手写一个发布订阅模式
```js
class EventEmitter {
  constructor() {
    // 事件对象，存放订阅的名字和事件
    this.events = {}
  }
  // 订阅事件的方法
  on(eventName, callback) {
    if (!this.events[eventName]) {
      // 注意是数据，一个名字可以订阅多个事件函数
      this.events[eventName] = [callback]
    } else {
      // 存在则push到指定数组的尾部保存
      this.events[eventName].push(callback)
    }
  }
  // 触发事件的方法
  emit(eventName) {
    // 遍历执行所有订阅的事件
    this.events[eventName] && this.events[eventName].forEach((cb) => cb())
  }
  // 移除订阅事件
  removeListener(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(
        (cb) => cb != callback
      )
    }
  }
  // 只执行一次订阅的事件，然后移除
  once(eventName, callback) {
    // 绑定的时fn, 执行的时候会触发fn函数
    let fn = () => {
      callback() // fn函数中调用原有的callback
      this.removeListener(eventName, fn) // 删除fn, 再次执行的时候之后执行一次
    }
    this.on(eventName, fn)
  }
}

// test
let em = new EventEmitter();
let workday = 0;
em.on("work", function() {
  workday++;
  console.log("work everyday");
});
```
:::

::: details 快排序、冒泡排序
```js
function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    const baseIndex = Math.floor(arr.length/2)
    const baseNum = arr[baseIndex]
    arr.splice(baseIndex, 1)

    const arrL = []
    const arrR = []
    arr.forEach(num => {
        if (num <= baseNum) {
            arrL.push(num)
        } else {
            arrR.push(num)
        }   
    })
    return [...quickSort(arrL), baseNum, ...quickSort(arrR)]
}

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}
```
:::



