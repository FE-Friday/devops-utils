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

## 项目相关

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
|-|-|-|
| formatDateTime | 格式化日期 | date: 日期对象/日期字符串 <br> format: 日期格式，目前只支持年-月-日 (yyyy-MM-dd) |
| getBeforeDate | 获取指定时间日期距离现在的间隔 | date: 日期对象/日期字符串 |

### 格式化日期
```js
import { date } from '@devops/toolbox'

// 格式化日期
date.formatDateTime('2023-01-28'); // 2023-01-28 00:00:00
date.formatDateTime(new Date('2023-01-28')); // 2023-01-28 00:00:00
date.formatDateTime(new Date('2023-01-28'), 'yyyy-MM-dd'); // 2023-01-28
```
### 获取指定时间日期距离现在的间隔

```js
import { date } from '@devops/toolbox'

date.getBeforeDate('2023-01-05'); // 24天前
date.getBeforeDate(new Date('2023-01-05')); // 24天前

```

## 字符串
| 方法 | 描述 | 参数 |
|-|-|-|
| camelCase | 把中划线或者下划线转化为驼峰格式 | 字符串'get-element-by-id' 或者 'get_element_by_id' |
| kebabCase | 驼峰转化为中划线值 | 驼峰格式字符串getElementById |
| getPureTextFromHtmlString | 获取html字符串文本中的纯文本信息 | html字符串 |
| escapeHtml | 转义html | html字符串 |

```js
import {
  camelCase,
  kebabCase,
  getPureTextFromHtmlString,
  escapeHtml
} from '@devops/toolbox';

// 中划线或者下划线转化为驼峰格式
camelCase('get-item'); // getItem
camelCase('get_item'); // getItem

// 驼峰转化为中划线值
kebabCase('querySelector'); // query-selector
kebabCase('getElementById'); // get-element-by-id

// 获取html字符串文本中的纯文本信息
getPureTextFromHtmlString('<div><h1>只羡鸳鸯不羡仙</h1></div><span>盖周天之变，化吴为王。</span>');
// 只羡鸳鸯不羡仙盖周天之变，化吴为王。

// 转义html
escapeHtml('<div><h1>只羡鸳鸯不羡仙</h1></div><span>盖周天之变，化吴为王。</span>');
// &lt;div&gt;&lt;h1&gt;只羡鸳鸯不羡仙&lt;/h1&gt;&lt;/div&gt;&lt;span&gt;盖周天之变，化吴为王。&lt;/span&gt;

```
## 数字
| 方法 | 描述 | 参数 |
|-|-|-|
| average | 取平均数 | 数字集合 |
| min | 取最小值 | 数字集合 |
| max | 取最大值 | 数字集合 |
| toCurrency | 转化为货币形式 | 数字 |
| toFixed | 截取小数点后几位 | 数字 |

```js
// 10000000 to 10,000,000
import {
  average,
  min,
  max,
  toCurrency,
  toFixed
} from '@devops/toolbox';

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 取平均值
average(nums); // 55

// 取最大值
min(nums); // 10

// 取最小值
min(nums); // 1

// 转化为货币形式
toCurrency(1000000000); // 1,000,000,000

// 截取小数点后几位
toFixed(98.5689, 2); // 98.57 保留两位小数
```
## 浏览器存储
> 支持cookie、sessionStorage、localStorage三种方式

### Cookie
| 方法 | 描述 | 参数 |
|-|-|-|
| set(key, value, options) | cookie默认配置 | key/value(String), options(Object) |
| get(key) | cookie默认配置 | String |
| clear() | cookie默认配置 | - |
| all() | cookie默认配置 | - |

```js
import { cookie } from '@devops/toolbox'

// 设置cookie
cookie.set('name', 'Tom', {expire: '3d', ...})
cookie.set('name', 'Jerry')

// 获取cookie
cookie.get('name')

// 获取所有cookie
cookie.all()

// 清除所有cookie
cookie.clear()
```
### LocalStorage

> 因为在项目中我们可能需要对同一类型或者同一模块的数据分模块存储于本地，所以以下本地存储的工具类实现类似于命名空间的方式存储数据，默认命名空间 store。

```js
import { local } from '@devops/toolbox';

// 创建命名空间 firday
const friday = local('friday');

// 存储数据
friday.setItem('name', 'Tom');

// 获取数据
friday.getItem('name');

// 删除数据
friday.removeItem('name');

// 清除所有
friday.clear();
```
### SessionStorage

> 因为在项目中我们可能需要对同一类型或者同一模块的数据分模块存储于本地，所以以下本地存储的工具类实现类似于命名空间的方式存储数据，默认命名空间 store。

```js
import { session } from '@devops/toolbox';

// 使用默认的命名空间
const store = session();

// 设置数据
store.setItem('name', 'Tom');

// 获取数据
store.getItem('name');

// 删除数据
store.removeItem('name');

// 清除所有数据
store.clear();
```
## 平台检测
| 方法 | 说明 |
| - | - |
| isMobile | 是否手机端 |
| isPc | 是否PC端 |
|  isIOS | 是否IOS |
|  isIPad | 是否iPad |
|  isAndroid | 是否安卓 |
|  isChrome | 是否Chrome |
|  isFirefox | 是否Firefox |
|  isSafari | 是否Safari |
|  isMicroMessenger | 是否微软浏览器 |
|  isQQBrowser | 是否QQ浏览器 |
|  isWeibo | 是否微博浏览器 |
|  isDevice | 自定义设备检测 |

```js
import {
  isMobile,
  isPc,
  isIOS,
  isIPad,
  isAndroid,
  isFirefox,
  isSafari,
  isDevice
} from '@devops/toolbox'

console.log(utils.isMobile);
console.log(utils.isPc);
console.log(utils.isIOS);
console.log(utils.isIPad);
console.log(utils.isAndroid);
console.log(utils.isFirefox);
console.log('isSafari => ', utils.isSafari);
console.log('isDevice => ', utils.isDevice(/Chrome/i));
```

## URL处理
| 方法 | 描述 | 参数 |
|-|-|-|
| getParam2Json | 将链接参数转为JSON格式返回 | - |
| getUrlParam | 获取链接指定字段名的值 | string |
| getJson2Param | 转换json为链接参数字符串 | object {"name": "Tom"} |
| addParam2Url | 添加参数到链接上 | object {"name": "Tom"} |
| removeParamFromUrl | 删除链接指定的参数 | string |

```js
import {
  getParam2Json,
  getJson2Param,
  getUrlParam,
  addParam2Url,
  removeParamFromUrl
} from '@devops/toolbox';

// 当前链接参数转json
getParam2Json()

// 获取链接指定字段名的值
getUrlParam('name')

// 转换json为链接参数字符串
getJson2Param({name: 'Tom'})

// 添加参数到链接上
addParam2Url({name: 'Tom'})

// 删除链接指定的参数
removeParamFromUrl('name')
```
## 其他
| 方法 | 描述 | 参数 |
|-|-|-|
| throttle | 节流：用于有连续事件响应，每间隔一定时间触发一次 | func, interval, leading |
| debounce | 防抖：用于连续事件触发结束后只触发一次 | func, wait, immediate|
| syncPromise | 拦截Promise处理结果以数组形式返回信息，主要用于async/await | promise, error |
| delay | 延时函数 | time 毫秒，返回一个Promise对象 |
| compose | 组合函数 | ...args |
| copy | 复制到剪切板 | string 需要复制的文本 |

## 参考文章

- [30-seconds-of-code](https://github.com/30-seconds/30-seconds-of-code#isvalidjson)
- [browser-cookies](https://github.com/voltace/browser-cookies)
- [JS 正则表达式完整教程（略长）](https://juejin.im/post/5965943ff265da6c30653879)
