'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

/**
 * 节流：用于有连续事件响应，每间隔一定时间触发一次
 *
 * @param {Function} func
 * @param {number} wait 触发长度间隔时间
 * @param {boolean} leading  leading=false首次不会触发(如果触发了多次)
 * @returns
 */
var throttle = function throttle(func, interval, leading) {
  var previous = 0;
  var timer = null;
  var handler = function handler(context, args) {
    func.apply(context, args);
  };
  return function () {
    var now = Date.now();
    if (!previous && leading === false) {
      previous = now;
    }
    var remaining = interval - (now - previous);
    timer && clearTimeout(timer);
    if (remaining <= 0) {
      previous = now;
      handler(this, arguments);
    } else {
      timer = setTimeout(handler, remaining, this, arguments);
    }
  };
};

/**
 * 防抖：用于连续事件触发结束后只触发一次
 *
 * @param {Func} func
 * @param {number} wait
 * @param {boolean} immediate 是否立即执行
 * @returns
 */
var debounce = function debounce(func, wait, immediate) {
  var timer = null;
  var handler = function handler(context, args) {
    func.apply(context, args);
  };
  return function () {
    if (immediate && !timer) {
      handler(this, arguments);
    }
    timer && clearTimeout(timer);
    timer = setTimeout(handler, wait, this, arguments);
  };
};

/**
 * 拦截Promise处理结果以数组形式返回信息，主要用于async/await
 * 如果成功则返回的第一个元素（错误信息）为null，否则为错误信息
 *
 * 如：
 * async function () {
 *    const [err, res] = await syncPromise(promiseFunc)
 *    if (!err) {
 *      // 成功
 *    } else {
 *      // 失败
 *    }
 * }
 *
 * @export
 * @param {Promise} promise
 * @param {any} error
 * @returns {Array} 第一个元素为错误信息，第二个元素为返回结果
 */
var syncPromise = function syncPromise(promise, error) {
  return promise.then(function (data) {
    return [null, data];
  })["catch"](function (err) {
    if (error) {
      Object.assign(err, error);
    }
    return [err, undefined];
  });
};

// requestAnimationFrame和cancelAnimationFrame兼容封装
var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
  animationTimer = setTimeout(callback, 1000 / 60);
};
var cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function () {
  clearTimeout(animationTimer);
};

/**
 * 延时函数
 *
 * @export
 * @param {*} time
 * @returns
 */
var delay = function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
};

/**
 * 组合函数
 *
 * @export
 * @param {*} args
 * @returns
 */
function compose() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var start = args.length - 1; // 倒序调用
  return function () {
    var i = start;
    var result = args[start].apply(this, args);
    while (i--) result = args[i].call(this, result);
    return result;
  };
}

/**
 * 复制到剪切板
 *
 * @export
 * @param {string} str 需要复制的文本
 * @returns
 */
var copy = function copy(str) {
  return new Promise(function (resolve, reject) {
    var el = document.createElement("textarea");
    el.value = str;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    var selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
    el.select();
    var isSuccess = false;
    if (document.execCommand && document.execCommand("copy")) {
      document.execCommand("copy");
      document.body.removeChild(el);
      isSuccess = true;
    }
    if (selected) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }
    isSuccess ? resolve() : reject("当前浏览器不支持复制API");
  });
};

// 是否匹配提供的正则表达式规则
var isRule = function isRule(rule) {
  return function (val) {
    return rule.test(val);
  };
};

// 是否为合法链接
var isLink = isRule(/((https|http|ftp|rtsp|mms)?:\/\/)(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}\.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+\.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.[a-z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+\/?)/);

// 是否为合法邮箱
var isEMail = isRule(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/);

// 是否为合法手机号码
var isTel = isRule(/^(\+?0?86-?)?1(3|4|5|6|7|8|9)\d{9}$/);

// 是否为合法固话
var isLandline = isRule(/^(\d{3,4}-)?\d{7,8}$/);

// 是否为合法身份证
var isIdCard = isRule(/(^\d{15}$)|(^\d{17}([0-9xX])$)/);

// 是否为合法QQ
var isQQ = isRule(/^[1-9][0-9]{4,11}$/);

// 是否为合法微信
var isWechat = isRule(/^[a-zA-Z][a-zA-Z0-9_-]{5,19}$/);

// 是否为邮政编码
var isPost = isRule(/^[1-9]\d{5}(?!\d)$/);

// 是否为汉字
var isCharacters = isRule(/^[\u4e00-\u9fa5]+$/);
var feUtil = {
  throttle: throttle,
  debounce: debounce,
  syncPromise: syncPromise,
  requestAnimationFrame: requestAnimationFrame,
  cancelAnimationFrame: cancelAnimationFrame,
  delay: delay,
  compose: compose,
  copy: copy,
  isRule: isRule,
  isLink: isLink,
  isEMail: isEMail,
  isTel: isTel,
  isLandline: isLandline,
  isWechat: isWechat,
  isQQ: isQQ,
  isIdCard: isIdCard,
  isPost: isPost,
  isCharacters: isCharacters
};

/**
 * 获取各数据数据类型
 * @param {string} type string 预期的参数类型
 * @param * val 要检测类型的数据
 * @returns Boolean
 * @example isType('String')('字符串')
 */
var isType = function isType(type) {
  return function (val) {
    return Object.prototype.toString.call(val) === "[object ".concat(type, "]");
  };
};

// 判断是否为对象
var isObject = function isObject(val) {
  return typeof val === "function" || _typeof(val) === "object" && !!val;
};

// 判断是否为null或undefined
var isEmpty = function isEmpty(val) {
  return isNull(val) || isUndefined(val);
};

// 判断是否为{}空对象
var isEmptyObject = function isEmptyObject(val) {
  return isObject(val) && JSON.stringify(val) == "{}";
};

// 判断是否为数组
var isArray = function isArray(val) {
  return Array.isArray(val);
};

// 判断是否为参数列
var isArguments = isType("Arguments");

// 判断是否为Null类型
var isNull = isType("Null");

// 判断是否为Number类型
var isNumber = isType("Number");

// 判断是否为String类型
var isString = isType("String");

// 判断是否为Promise类型
var isPromise = isType("Promise");

// 判断是否为Date类型
var isDate = isType("Date");

// 判断是否为RegExp类型
var isRegExp = isType("RegExp");

// 判断是否为Map类型
var isMap = isType("Map");

// 判断是否为Set类型
var isSet = isType("Set");

// 判断是否为Symbol类型
var isSymbol = isType("Symbol");

// 判断是否为Error类型
var isError = isType("Error");

// 判断是否为Undefined类型
var isUndefined = isType("Undefined");

// 判断是否为NaN
var isNaN = function isNaN(val) {
  return Number.isNaN(val);
};

// 判断是否为DOM元素
var isElement = function isElement(val) {
  return isObject(HTMLElement) ? val instanceof HTMLElement : isObject(val) && isString(val.nodeName) && val.nodeType === 1;
};
var feType = {
  isType: isType,
  isObject: isObject,
  isEmptyObject: isEmptyObject,
  isEmpty: isEmpty,
  isArray: isArray,
  isNumber: isNumber,
  isString: isString,
  isNull: isNull,
  isUndefined: isUndefined,
  isNaN: isNaN,
  isArguments: isArguments,
  isSet: isSet,
  isMap: isMap,
  isSymbol: isSymbol,
  isPromise: isPromise,
  isError: isError,
  isDate: isDate,
  isRegExp: isRegExp,
  isElement: isElement
};

/**
 * 中划线或者下划线转化为驼峰格式
 *
 * @export
 * @param {string} str
 * @eg: 'get-element-by-id' 或者 'get_element_by_id' 转化为 'getElementById' 格式
 * @returns
 */
var camelCase = function camelCase(str) {
  return str.replace(/[-_]+([a-z])?/g, function (_, item) {
    return item ? item.toUpperCase() : "";
  });
};

/**
 * 驼峰转化为中划线值
 *
 * @export
 * @param {string} str
 * @returns
 */
var kebabCase = function kebabCase(str) {
  return str.replace(/([A-Z])/g, "-$1").replace(/_+/g, "-").toLowerCase();
};

/**
 * 获取html字符串文本中的纯文本信息
 *
 * @export
 * @param {string} source 需要解析的源文本
 */
var getPureTextFromHtmlString = function getPureTextFromHtmlString(source) {
  return source.replace(/<style[^>]*>[\d\D]*?<\/style>|<[^>]*>/g, "");
};

/**
 * 转义html
 *
 * @export
 * @param {string} str
 * @returns
 */
var escapeHtml = function escapeHtml(str) {
  var hash = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  };
  return str.replace(/[&<>'"]/g, function (tag) {
    return hash[tag] || tag;
  });
};
var feString = {
  camelCase: camelCase,
  kebabCase: kebabCase,
  getPureTextFromHtmlString: getPureTextFromHtmlString,
  escapeHtml: escapeHtml
};

/**
 * 浅拷贝对象
 *
 * @export
 * @param {*} origin 需要克隆的原对象
 * @param {*} target 克隆结果
 * @returns
 */
var clone = function clone(origin) {
  var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  for (var prop in origin) {
    if (origin.hasOwnProperty(prop)) {
      result[prop] = origin[prop];
    }
  }
  return result;
};

/**
 * 深拷贝对象
 *
 * @export
 * @param {*} obj
 * @param {*} [hash=new WeakMap()]
 * @returns
 */
var deepClone = function deepClone(data) {
  var weak = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new WeakMap();
  if (_typeof(data) !== "object" || data === null) return data;
  var result;
  var Constructor = data.constructor;
  switch (Constructor) {
    case RegExp:
      result = new Constructor(data);
      break;
    case Date:
      result = new Constructor(data.getTime());
      break;
    default:
      if (weak.has(data)) return weak.get(data);
      result = new Constructor();
      weak.set(data, result);
  }
  for (var key in data) {
    result[key] = isObject(data[key]) ? deepClone(data[key], weak) : data[key];
  }
  return result;
};

/**
 * 根据保留/删除类型过滤字段
 *
 * @param {*} type
 * @returns
 */
var filterKeys = function filterKeys(type) {
  return function (obj) {
    var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    return Object.keys(obj).reduce(function (acc, key) {
      if (type === "keep" ? keys.includes(key) : !keys.includes(key)) {
        acc[key] = obj[key];
      }
      return acc;
    }, {});
  };
};

/**
 * 保留给定字段
 *
 * @export
 * @param {*} obj
 * @param {*} [keys=[]]
 * @returns
 */
var keepKeys = filterKeys("keep");

/**
 * 删除给定字段
 *
 * @export
 * @param {*} obj
 * @param {*} [keys=[]]
 * @returns
 */
var removeKeys = filterKeys("remove");

/**
 * 替换对象字段名
 *
 * @export
 * @param {*} obj
 * @param {*} rule={name: 'firstName'} 键值对，key 为 原字段，value为替换字段
 * @returns
 */
var replaceKeys = function replaceKeys(obj) {
  var rules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var keys = Object.keys(rules);
  console.log("keys => ", keys);
  return Object.keys(obj).reduce(function (acc, key) {
    console.log(keys.includes(key) ? rules[key] : key);
    acc[keys.includes(key) ? rules[key] : key] = obj[key];
    return acc;
  }, {});
};
var feObject = {
  clone: clone,
  deepClone: deepClone,
  keepKeys: keepKeys,
  removeKeys: removeKeys,
  replaceKeys: replaceKeys
};

// 将参数转为数组，如果参数本身为数组且第一个元素也为数组则返回第一个元素
var args2Array = function args2Array(args) {
  var params = args;
  if (args.length === 1 && isArray(args[0])) {
    params = args[0];
  }
  return params;
};

/**
 * 求和
 *
 * @export
 * @param {*} args
 * @returns
 */
var sum = function sum() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var params = args2Array(args);
  return _toConsumableArray(params).reduce(function (acc, val) {
    return acc + val;
  }, 0);
};

/**
 * 取平均数
 *
 * @export
 * @param {*} args
 * @returns
 */
var average = function average() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }
  var params = args2Array(args);
  return sum.apply(void 0, _toConsumableArray(params)) / (params.length ? params.length : 1);
};

/**
 * 取最小值
 *
 * @export
 * @param {*} args
 * @returns
 */
var min = function min() {
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }
  var params = args2Array(args);
  return Math.min.apply(null, params);
};

/**
 * 取最大值
 *
 * @export
 * @param {*} args
 * @returns
 */
var max = function max() {
  for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    args[_key4] = arguments[_key4];
  }
  var params = args2Array(args);
  return Math.max.apply(null, params);
};

/**
 * 转化为货币形式
 *
 * @export
 * @param {*} num
 * @returns 
 * @example 10000000 to 10,000,000
 */
var toCurrency = function toCurrency(num) {
  return String(num).replace(/(?!^)(?=(\d{3})+$)/g, ",");
};

/**
 * 截取小数点后几位
 *
 * @export
 * @param {*} num
 * @param {number} [size=2]
 * @returns
 */
var toFixed = function toFixed(num) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return isNumber(num) ? num.toFixed(size) : num;
};
var feNumber = {
  sum: sum,
  average: average,
  min: min,
  max: max,
  toFixed: toFixed,
  toCurrency: toCurrency
};

/**
 * 将链接参数转为JSON格式返回
 *
 * @export
 * @param {string} url
 * @returns
 */
var getParam2Json = function getParam2Json() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : location.href;
  var search = url.substring(url.lastIndexOf("?") + 1);
  var result = {};
  var reg = /([^?&=]+)=([^?&=]*)/g;
  search.replace(reg, function (res, $1, $2) {
    var name = decodeURIComponent($1);
    var val = decodeURIComponent($2);
    val = String(val);
    result[name] = val;
    return res;
  });
  return result;
};

/**
 * 获取链接指定字段名的值
 *
 * @export
 * @param {Array|string} key 指定获取的字段名
 * @param {string} url
 * @returns {any} 如果参数key为数组则返回对象
 */
var getUrlParam = function getUrlParam(key) {
  var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : location.href;
  var params = getParam2Json(url);
  if (Array.isArray(key)) {
    var res = {};
    key.forEach(function (item) {
      res[item] = params[item];
    });
    return res;
  } else if (typeof key === "string") {
    return params[key];
  }
  return void 0;
};

/**
 * @description 转换json为链接参数字符串
 * @param {Object} json
 * @returns {String}
 */
var getJson2Param = function getJson2Param(json) {
  if (!json) return "";
  return Object.keys(json).map(function (key) {
    if (json[key] === void 0) return "";
    return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(json[key]));
  }).join("&");
};

/**
 * 添加参数到链接上
 *
 * @export
 * @param {object} [params={}] 需要添加的参数
 * @param {string} [url=location.href]
 * @returns
 */
var addParam2Url = function addParam2Url() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : location.href;
  var path = url.split("?")[0];
  var json = getParam2Json(url);
  var paramStr = getJson2Param(_objectSpread2(_objectSpread2({}, json), params));
  return "".concat(path, "?").concat(paramStr);
};

/**
 * 删除链接指定的参数
 *
 * @export
 * @param {string} [url=location.href]
 * @param {string|Array} [params=""]
 * 如果为字符串时，多个参数需要用英文','分割，如果不传或者传的时空字符串或者空数组则删除全部参数
 * @returns
 */
var removeParamFromUrl = function removeParamFromUrl() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : location.href;
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var path = url.split("?")[0];
  if (!params || Array.isArray(params) && !params.length) return path;
  var json = getParam2Json(url);
  json = removeKeys(json, Array.isArray(params) ? params : params.match(/\b\w+\b/g));
  var paramStr = getJson2Param(json);
  return paramStr ? "".concat(path, "?").concat(paramStr) : path;
};
var feUrl = {
  getParam2Json: getParam2Json,
  getJson2Param: getJson2Param,
  getUrlParam: getUrlParam,
  addParam2Url: addParam2Url,
  removeParamFromUrl: removeParamFromUrl
};

var isPlatform = function isPlatform(regexp) {
  return regexp.test(navigator.userAgent);
};
var isMobile = isPlatform(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i);
var isPc = function isPc() {
  return !isMobile();
};
var isIOS = isPlatform(/\(i[^;]+;( U;)? CPU.+Mac OS X/gi);
var isIPad = isPlatform(/iPad/gi);
var isAndroid = isPlatform(/android|adr/gi);
var isChrome = isPlatform(/Chrome/i);
var isFirefox = isPlatform(/Firefox/i);
var isSafari = isPlatform(/Safari/i);
var isMicroMessenger = isPlatform(/MicroMessenger/i);
var isQQBrowser = isPlatform(/qq/gi);
var isWeibo = isPlatform(/weibo/gi);
var isDevice = function isDevice(regexp) {
  return isPlatform(regexp);
};
var fePlatform = {
  isMobile: isMobile,
  isPc: isPc,
  isIOS: isIOS,
  isIPad: isIPad,
  isAndroid: isAndroid,
  isChrome: isChrome,
  isFirefox: isFirefox,
  isSafari: isSafari,
  isMicroMessenger: isMicroMessenger,
  isQQBrowser: isQQBrowser,
  isWeibo: isWeibo,
  isDevice: isDevice
};

var defaults = {};
var set = function set(name, value) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _defaults$options = _objectSpread2(_objectSpread2({}, defaults), options),
    expires = _defaults$options.expires,
    domain = _defaults$options.domain,
    path = _defaults$options.path,
    secure = _defaults$options.secure,
    httponly = _defaults$options.httponly,
    samesite = _defaults$options.samesite;
  path = path || "/";
  var expDate = expires ? new Date(typeof expires === "number" ? new Date().getTime() + expires * 864e5 : expires) : 0;
  document.cookie = name.replace(/[^+#$&^`|]/g, encodeURIComponent).replace("(", "%28").replace(")", "%29") + "=" + value.replace(/[^+#$&/:<-\[\]-}]/g, encodeURIComponent) + (expDate && expDate.getTime() >= 0 ? ";expires=" + expDate.toUTCString() : "") + (domain ? ";domain=" + domain : "") + (path ? ";path=" + path : "") + (secure ? ";secure" : "") + (httponly ? ";httponly" : "") + (samesite ? ";samesite=" + samesite : "");
};
var getHanlder = function getHanlder(name) {
  var all = {};
  var cookies = document.cookie.split(";");
  while (cookies.length) {
    var cookie = cookies.pop();
    var separatorIndex = cookie.indexOf("=");
    separatorIndex = separatorIndex < 0 ? cookie.length : separatorIndex;
    var cookie_name = decodeURIComponent(cookie.slice(0, separatorIndex).replace(/^\s+/, ""));
    if (name === void 0) {
      all[cookie_name] = decodeURIComponent(cookie.slice(separatorIndex + 1));
    } else if (cookie_name === name) {
      return decodeURIComponent(cookie.slice(separatorIndex + 1));
    }
  }
  return name === void 0 ? all : null;
};
var get = function get(name) {
  return getHanlder(name);
};
var clear = function clear(name, options) {
  return set(name, "", {
    expires: -1,
    domain: options && options.domain,
    path: options && options.path,
    secure: 0,
    httponly: 0
  });
};
var all = function all() {
  return getHanlder();
};
var cookie$1 = {
  set: set,
  get: get,
  clear: clear,
  all: all
};

var Store$1 = window.localStorage;
var storeMap$1 = new Map();
function localStore() {
  var namespaced = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "store";
  if (storeMap$1.has(namespaced)) {
    return storeMap$1.get(namespaced);
  }
  storeMap$1.set(namespaced, new Storage$1(namespaced));
  return storeMap$1.get(namespaced);
}
function saveState$1(namespaced, state) {
  Store$1.setItem(namespaced, JSON.stringify(state));
}
var Storage$1 = /*#__PURE__*/function () {
  function Storage(namespaced) {
    _classCallCheck(this, Storage);
    this.namespaced = namespaced;
    this.state = {};
    this.init();
  }
  _createClass(Storage, [{
    key: "init",
    value: function init() {
      try {
        var data = Store$1.getItem(this.namespaced);
        if (data) {
          this.state = JSON.parse(data);
        }
        saveState$1(this.namespaced, this.state);
      } catch (err) {
        this.state = {};
        saveState$1(this.namespaced, this.state);
      }
    }
  }, {
    key: "setItem",
    value: function setItem(key, data) {
      this.state[key] = data;
      saveState$1(this.namespaced, this.state);
      return this.state;
    }
  }, {
    key: "getItem",
    value: function getItem(key) {
      return this.state[key];
    }
  }, {
    key: "removeItem",
    value: function removeItem(key) {
      this.state = removeKeys(this.state, [key]);
      saveState$1(this.namespaced, this.state);
      return this.state;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.state = {};
      Store$1.removeItem(this.namespaced);
    }
  }]);
  return Storage;
}();

var Store = window.sessionStorage;
var storeMap = new Map();
function sessionStore() {
  var namespaced = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "store";
  if (storeMap.has(namespaced)) {
    return storeMap.get(namespaced);
  }
  storeMap.set(namespaced, new Storage(namespaced));
  return storeMap.get(namespaced);
}
function saveState(namespaced, state) {
  Store.setItem(namespaced, JSON.stringify(state));
}
var Storage = /*#__PURE__*/function () {
  function Storage(namespaced) {
    _classCallCheck(this, Storage);
    this.namespaced = namespaced;
    this.state = {};
    this.init();
  }
  _createClass(Storage, [{
    key: "init",
    value: function init() {
      try {
        var data = Store.getItem(this.namespaced);
        if (data) {
          this.state = JSON.parse(data);
        }
        saveState(this.namespaced, this.state);
      } catch (err) {
        this.state = {};
        saveState(this.namespaced, this.state);
      }
    }
  }, {
    key: "setItem",
    value: function setItem(key, data) {
      this.state[key] = data;
      saveState(this.namespaced, this.state);
      return this.state;
    }
  }, {
    key: "getItem",
    value: function getItem(key) {
      return this.state[key];
    }
  }, {
    key: "removeItem",
    value: function removeItem(key) {
      this.state = removeKeys(this.state, [key]);
      saveState(this.namespaced, this.state);
      return this.state;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.state = {};
      Store.removeItem(this.namespaced);
    }
  }]);
  return Storage;
}();

var feCookie = cookie$1;
var feLocal = localStore;
var feSession = sessionStore;

function addZero(num) {
  return num < 10 ? '0' + num : num.toString();
}

/**
 * 用于日期格式化
 * @param {*} date 日期
 * @returns 返回格式化日期
 */
var formatDateTime = function formatDateTime(date, format) {
  if (!date) return '';
  var time = date instanceof Date ? date : new Date(date);
  var Y = time.getFullYear() + '-';
  var M = addZero(time.getMonth() + 1) + '-';
  var D = addZero(time.getDate());
  var h = addZero(time.getHours()) + ':';
  var m = addZero(time.getMinutes()) + ':';
  var s = addZero(time.getSeconds());
  if (format === 'yyyy-MM-dd') {
    return Y + M + D;
  } else {
    return Y + M + D + ' ' + h + m + s;
  }
};

/**
 * 获取指定时间日期距离现在的间隔
 * @param {Date} date 日期
 * @returns string 返回距离当前时间的间隔
 */
var getBeforeDate = function getBeforeDate(date) {
  if (!date) return '';
  var time = date instanceof Date ? date : new Date(date);
  var ms = Date.now() - time.getTime();
  var seconds = Math.round(ms / 1000);
  var minutes = Math.round(ms / 60000);
  var hours = Math.round(ms / 3600000);
  var days = Math.round(ms / 86400000);
  var months = Math.round(ms / 2592000000);
  var years = Math.round(ms / 31104000000);
  switch (true) {
    case seconds < 60:
      return "".concat(seconds, "\u79D2\u524D\"");
    case minutes < 60:
      return "".concat(minutes, "\u5206\u949F\u524D\"");
    case hours < 24:
      return "".concat(hours, "\u5C0F\u65F6\u524D\"");
    case days < 30:
      return "".concat(days, "\u5929\u524D");
    case months < 12:
      return "".concat(months, "\u6708\u524D");
    default:
      return "".concat(years, "\u5E74\u524D");
  }
};
var feDate = {
  formatDateTime: formatDateTime,
  getBeforeDate: getBeforeDate
};

var util = feUtil;
var type = feType;
var string = feString;
var object = feObject;
var number = feNumber;
var url = feUrl;
var platform = fePlatform;
var cookie = feCookie;
var local = feLocal;
var session = feSession;
var date = feDate;
var index = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, util), type), string), object), number), url), platform), {}, {
  cookie: cookie,
  local: local,
  session: session,
  date: date
});

exports.cookie = cookie;
exports.date = date;
exports.default = index;
exports.local = local;
exports.number = number;
exports.object = object;
exports.platform = platform;
exports.session = session;
exports.string = string;
exports.type = type;
exports.url = url;
exports.util = util;
