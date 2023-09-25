<!--
 * @Author: xiaoshanwen
 * @Date: 2023-09-25 10:07:53
 * @LastEditTime: 2023-09-25 10:19:34
 * @FilePath: /devops-utils/src/promise/taskCollection/readme.md
-->
# 前言

前端如何监听多个独立渲染的组件是否完成渲染或执行完指定生命周期  
这里提供了基于promise的解决方案  

# 原理

一、创建n个pending状态的promise，每一个promise对应一个独立的组件，并提供方法使得对应的组件可以获得与之相对应的promise。  

二、将所有的pending状态的promise存入一个 Promise.allSettled 的大promise中，我们可以给这个promise设置渲染完成的回调， 由于里面的promise是pending状态，因此回调不会立即执行。

三、组件侧需要取到对应的promise，当自身指定时间节点经过之后，就resolve或reject这个promise，当所有组件promise都完成状态更改 Promise.allSettled 的大promise的回调就会执行，我们就能拿到对应的回调。

# 使用

## 主模块（步骤顺序，需严格执行）

```js
// 创建promiseMap，用于获取所有模块渲染标识
initPromiseMap('test')

for... {
     // 为当前所有卡片创建promise
     setPromise('test', id)
}
// 创建Promise.allSettled
launchPromiseAll('test')

// 监听Promise.allSettled的回调
targetPromiseAll('test').then(() => {
    console.log('结束')
})

```

## 组件侧
```js
// 获取组件对应的promise对象
const p = getPromise('test', id)

// 更新promise状态
p.resolve('xxx') 
```