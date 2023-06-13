## LeetCode算法题

::: details 实现数组扁平化，k是展开的层级
```js
function flat(arr, k) {
    if (k === 0) return arr
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flat(arr[i], k - 1))
        } else {
            result = result.concat(arr[i])
        }
    }
    return result
}
```
:::



