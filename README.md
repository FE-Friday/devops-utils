# DevOps前端工具箱

## 目录
- [前言](#前言)
- [快速开始](#快速开始)
- [类型检测](#类型检测)
- [对象](#对象)
- [日期格式化](#日期格式化)
- [字符串](#字符串)
- [数字](#数字)
- [浏览器存储](#浏览器存储)
- [平台检测](#平台检测)
- [URL处理](#URL处理)
- [其他](#其他)

## 前言

项目地址：[https://github.com/FE-Friday/devops-utils](https://github.com/FE-Friday/devops-utils)

## 快速开始
**1. 安装**
```sh
# 安装依赖

npm install -S @devops/toolbox
```

**2. 引入**

```js
// 全局引入
import tool from '@devops/toolbox'

// 按需引入
import {
  type,     // 类型检测模块
  number,   // 数字模块
  string,   // 字符串模块
  object,   // 对象模块
  platform, // 平台检测模块
  cookie,   // cookie模块
  local,    // 本地存储localStorage模块
  session,  // 本地存储sessionStorage模块
  date,     // 日期模块
  util      // 其他工具模块
} from '@devops/toolbox'
```

## 类型检测

#### 方法引用
```js
// 全局引入
import tool from '@devops/toolbox';

// 按需引入
import { type as check } from '@devops/toolbox';

// 使用
check.isString('字符串') // 'String true'
check.isFunction(() => {}) // 'Function true'
check.isString(1) // 'String false'

// 如果预置函数没有你想要的，可以直接使用isType函数进行检测

// 检测是否为字符串
check.isType('String')('字符串') // 'String true'

// 检测是否为数字
check.isType('Number')(1) // 'String true'

......
```
#### 方法说明

| 方法 | 描述 | 参数 |
|-----|------|-----|
| isType | 检测各数据的类型 | isType('目标类型字符串')(检测数据) |
| isObject | 是否为对象 | * |
| isEmpty | 是否为null或undefined | * |
| isEmptyObject | 是否为空对象 | * |
| isArray | 是否为数组 | * |
| isArguments | 是否为参数列 | * |
| isNull | 是否为Null类型 | * |
| isNumber | 是否为Number类型 | * |
| isString | 是否为String类型 | * |
| isFunction | 是否为Function类型 |   * |
| isPromise | 是否为Promise类型 | * |
| isDate | 是否为Date类型 | * |
| isRegExp | 是否为RegExp类型 | * |
| isMap | 是否为Map类型 | * |
| isSet | 是否为Set类型 | * |
| isSymbol | 是否为Symbol类型 | * |
| isError | 是否为Error类型 | * |
| isUndefined | 是否为Undefined类型 | * |
| isNaN | 是否为NaN | * |
| isElement | 是否为DOM元素 | * / DOM节点对象 |

## 对象

#### 方法引用
```js
// 全局引入
import tool from '@devops/toolbox';

// 按需引入
import { clone, deepClone, keepKeys, removeKeys, replaceKeys } from '@devops/toolbox';

```

#### 方法说明
| 方法 | 描述 |
|-----|------|
| clone | 浅拷贝对象 |
| deepClone | 深拷贝对象 |
| keepKeys | 保留给定字段 |
| removeKeys | 删除给定字段 |
| replaceKeys | 替换对象字段名 |

## 日期格式化
| 方法 | 描述 | 参数 |
|-----|------|-----|
｜｜｜｜


## 字符串



## 数字



## 浏览器存储



## 平台检测


## URL处理


## 其他



## 参考文章

- [30-seconds-of-code](https://github.com/30-seconds/30-seconds-of-code#isvalidjson)
- [browser-cookies](https://github.com/voltace/browser-cookies)
- [JS 正则表达式完整教程（略长）](https://juejin.im/post/5965943ff265da6c30653879)
