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
 * 转化为驼峰值
 *
 * @export
 * @param {string} val
 * @returns
 */
var camelize = function camelize(val) {
  return val.replace(/[-_]+(.)?/g, function (match, item) {
    return item ? item.toUpperCase() : "";
  });
};

/**
 * 转化为中划线值
 *
 * @export
 * @param {string} val
 * @returns
 */
var dasherize = function dasherize(val) {
  return val.replace(/([A-Z])/g, "-$1").replace(/_+/g, "-").toLowerCase();
};

/**
 * 根据附加属性生成指定条件的正则表达式
 *
 * @param {object} attrs 附加属性
 * @returns {Array}
 */
var getAttrsReg = function getAttrsReg(attrs) {
  var attrsReg = [];
  Object.keys(attrs).forEach(function (key) {
    if (attrs[key]) {
      attrsReg.push(new RegExp("".concat(key, "\\s*=\\s*(['\"])").concat(attrs[key], "\\1"), "gim"));
    }
  });
  return attrsReg;
};

/**
 * 通过附加属性的筛选获取元素列表
 *
 * @param {Array}} list 元素列表
 * @param {object} attrs 附加属性值
 * @returns {Array}
 */
var getResultByAttr = function getResultByAttr(list, attrs) {
  var result = _toConsumableArray(list);
  var attrsReg = getAttrsReg(attrs);
  var res = [];
  attrsReg.forEach(function (attrReg) {
    result.forEach(function (item) {
      if (attrReg.test(item)) {
        res.push(item);
      }
    });
    result = res;
  });
  return result;
};

/**
 * 从文本中获取指定条件的标签
 *
 * @export
 * @param {source: string, tag: str, attrs?: object}
 * source: 需要解析的源文本
 * tag: 需要解析元素的tagName
 * attrs: 附加属性添加更快查询解析元素
 * @returns {Array}
 */
var getTagfromHtmlString = function getTagfromHtmlString() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    source = _ref.source,
    tag = _ref.tag,
    _ref$attrs = _ref.attrs,
    attrs = _ref$attrs === void 0 ? {} : _ref$attrs;
  if (!source) {
    console.warn("请添加source字段");
    return [];
  }
  if (!tag) {
    console.warn("请添加tag字段");
    return [];
  }
  var singleTags = "br,hr,img,input,param,meta,link".split(",");
  var reg = new RegExp("<".concat(tag, "[^<>]*>[\\d\\D]*?</").concat(tag, ">"), "gmi");
  // 判断是否为但标签
  if (singleTags.includes(tag)) {
    reg = new RegExp("<".concat(tag, "[^<>]*/?>"), "gmi");
  }
  var result = source.match(reg);
  if (result && result.length && attrs && Object.keys(attrs).length) {
    result = getResultByAttr(result, attrs);
  }
  return result || [];
};

/**
 * 获取html文本中某类元素指定属性的属性值
 *
 * @export
 * @param {source: string, tag: str, attr: string, attrs?: object}
 * source: 需要解析的源文本
 * tag: 需要解析元素的tagName
 * attr: 需要获取属性值的解析元素的属性名称
 * attrs: 附加属性添加更快查询解析元素
 * @returns {Array}
 */
var getAttrFromHtmlString = function getAttrFromHtmlString() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    source = _ref2.source,
    tag = _ref2.tag,
    attr = _ref2.attr,
    _ref2$attrs = _ref2.attrs,
    attrs = _ref2$attrs === void 0 ? {} : _ref2$attrs;
  if (!source) {
    console.warn("请添加source字段");
    return [];
  }
  if (!tag) {
    console.warn("请添加tag字段");
    return [];
  }
  if (!attr) {
    console.warn("请添加attr字段");
    return [];
  }
  var result = getTagfromHtmlString({
    source: source,
    tag: tag,
    attrs: attrs
  });
  var attrList = result.map(function (item) {
    var reg = new RegExp("".concat(attr, "\\s*=\\s*(['\"])([^\\1]+?)\\1"), "gmi");
    var list = reg.exec(item);
    if (list && list.length > 1) {
      return list[2];
    }
    return "";
  });
  return attrList;
};

/**
 * 获取html文本中转化为html后的纯文本信息
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
  camelize: camelize,
  dasherize: dasherize,
  getTagfromHtmlString: getTagfromHtmlString,
  getAttrFromHtmlString: getAttrFromHtmlString,
  getPureTextFromHtmlString: getPureTextFromHtmlString,
  escapeHtml: escapeHtml
};

var ScreenFullAPIList = ["exitFullscreen", "requestFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"];
var ScreenfullHash = function () {
  var prefix = ["webkit", "", "moz", "ms"];
  var _loop = function _loop(i) {
    if (camelize("".concat(prefix[i]).concat(prefix[i] ? "-" : "").concat(ScreenFullAPIList[0])) in document) {
      return {
        v: ScreenFullAPIList.reduce(function (acc, val, index) {
          acc[val] = camelize("".concat(prefix[i], "-").concat(ScreenFullAPIList[index]));
          return acc;
        }, {})
      };
    }
  };
  for (var i = 0; i < prefix.length; i++) {
    var _ret = _loop(i);
    if (_typeof(_ret) === "object") return _ret.v;
  }
}();
var Screenfull = /*#__PURE__*/function () {
  function Screenfull() {
    _classCallCheck(this, Screenfull);
  }
  _createClass(Screenfull, [{
    key: "isFullScreen",
    get: function get() {
      return document[ScreenfullHash.fullscreenElement] || docunent.fullscreen;
    }
  }, {
    key: "isEnabled",
    get: function get() {
      document[ScreenfullHash.fullscreenEnabled];
    }
  }, {
    key: "exit",
    value: function exit() {
      var _this = this;
      return new Promise(function (resolve, reject) {
        if (!_this.isFullScreen) {
          resolve();
          return;
        }
        var exitCallback = function exitCallback() {
          _this.off("fullscreenchange", exitCallback);
          resolve();
        };
        _this.on("fullscreenchange", exitCallback);
        resolve(document[ScreenfullHash.exitFullscreen]())["catch"](reject);
      });
    }
  }, {
    key: "request",
    value: function request(el) {
      var _this2 = this;
      var element = el || document.documentElement || document.body;
      return new Promise(function (resolve, reject) {
        var requestCallback = function requestCallback() {
          _this2.off("fullscreenchange", requestCallback);
          resolve();
        };
        _this2.on("fullscreenchange", requestCallback);
        resolve(element[ScreenfullHash.requestFullscreen]())["catch"](reject);
      });
    }
  }, {
    key: "toggle",
    value: function toggle(el) {
      return this.isFullscreen ? this.exit() : this.request(el);
    }
  }, {
    key: "onChange",
    value: function onChange(fn) {
      this.on("fullscreenchange", fn);
    }
  }, {
    key: "onError",
    value: function onError(fn) {
      this.on("fullscreenerror", fn);
    }
  }, {
    key: "on",
    value: function on(eventName, fn) {
      document.addEventListener(ScreenfullHash[eventName], fn, false);
    }
  }, {
    key: "off",
    value: function off(eventName, fn) {
      document.removeEventListener(ScreenfullHash[eventName], fn, false);
    }
  }]);
  return Screenfull;
}();
var Screenfull$1 = new Screenfull();

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

// 全屏功能
var screenfull = Screenfull$1;
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
  isCharacters: isCharacters,
  screenfull: screenfull
};

// 获取各数据数据类型
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

// 判断是否为Function类型
var isFunction = isType("Function");

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
 * 克隆对象
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
 * 深克隆对象
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
 * 合并对象
 *
 * @export
 * @param {*} src
 */
var extend = function extend(target) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return Object.assign.apply(Object, [target].concat(args));
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
 * @param {*} [rule={}] 键值对，key 为 原字段，value为替换字段
 * @returns
 */
var replaceKeys = function replaceKeys(obj) {
  var rules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var keys = Object.keys(rules);
  return Object.keys(obj).reduce(function (acc, key) {
    acc[keys.includes(key) ? rules[key] : key] = obj[key];
    return acc;
  }, {});
};
var feObject = {
  clone: clone,
  deepClone: deepClone,
  extend: extend,
  keepKeys: keepKeys,
  removeKeys: removeKeys,
  replaceKeys: replaceKeys
};

// 从前后遍历数组
var forEachType = function forEachType() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "left";
  return function (arr, cb) {
    var list = type === "left" ? arr : _toConsumableArray(arr).reverse();
    list.forEach(cb);
  };
};

/**
 * 数组去重
 *
 * @export
 * @param {Array} arr
 * @returns
 */
var unique = function unique(arr) {
  return _toConsumableArray(new Set(arr));
};

/**
 * 取两个数组的交集
 *
 * @export
 * @param {*} arr1
 * @param {*} arr2
 * @returns
 */
var intersection = function intersection(arr1, arr2) {
  var arr = new Set(arr1);
  return arr2.filter(function (item) {
    return arr.has(item);
  });
};

/**
 * 取多个数组的交集
 *
 * @export
 * @param {*} args
 * @returns
 */
var intersectionAll = function intersectionAll() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return args.reduce(function (acc, val) {
    return intersection(val, acc);
  });
};

/**
 * 多个元素的并集
 *
 * @export
 * @param {*} args
 * @returns
 */
var union = function union() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }
  return unique(flatten(args, 2));
};

/**
 * 两个数组的差集
 *
 * @export
 * @param {*} arr1
 * @param {*} arr2
 * @returns
 */
var difference = function difference(arr1, arr2) {
  var allList = union(arr1, arr2);
  var intersectionList = intersection(arr1, arr2);
  return allList.filter(function (item) {
    return !intersectionList.includes(item);
  });
};

/**
 * 多个数组的差集
 *
 * @export
 * @param {*} args
 * @returns
 */
var differenceAll = function differenceAll() {
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }
  return args.reduce(function (acc, val) {
    return difference(val, acc);
  });
};

/**
 * 将单层级数组转化为树形结构
 * 说明：`parentId`为父元素的唯一标识，`id`为元素的唯一标识，默认为`'id'`, `pid`为元素的父元素标识，默认为`'pid'`，`children`为要生成多层级子元素的字段名，默认为`'children'`
 * @export
 * @param {*} arr
 * @param {number} [parentId=0]
 * @param {*} [{ id = "id", pid = "pid", children = "children" }={}]
 * @returns
 */
var array2Tree = function array2Tree(arr) {
  var parentId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref$id = _ref.id,
    id = _ref$id === void 0 ? "id" : _ref$id,
    _ref$pid = _ref.pid,
    pid = _ref$pid === void 0 ? "pid" : _ref$pid,
    _ref$children = _ref.children,
    children = _ref$children === void 0 ? "children" : _ref$children;
  return arr.filter(function (item) {
    return item[pid] === parentId;
  }).map(function (item) {
    return _objectSpread2(_objectSpread2({}, item), {}, _defineProperty({}, children, array2Tree(arr, item[id], {
      id: id,
      pid: pid,
      children: children
    })));
  });
};

/**
 * 树状结构转为一维数组
 * 说明：`id`为每个元素的唯一标识，默认为`'id'`，`children`为多层级的子元素列表字段，默认为`'children'`
 * @export
 * @param {*} tree
 * @param {*} [{ id = "id", pid = "pid", children = "children" }={}]
 * @returns
 */
var tree2Array = function tree2Array(tree) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref2$id = _ref2.id,
    id = _ref2$id === void 0 ? "id" : _ref2$id,
    _ref2$children = _ref2.children,
    children = _ref2$children === void 0 ? "children" : _ref2$children;
  var list = tree.reduce(function (acc, item) {
    if (Array.isArray(item[children]) && item[children].length) {
      return [].concat(_toConsumableArray(acc), [item], _toConsumableArray(tree2Array(item[children], {
        id: id,
        children: children
      })));
    }
    return [].concat(_toConsumableArray(acc), [item]);
  }, []);
  return list.map(function (item) {
    return removeKeys(item, [children]);
  });
};

/**
 * 根据标识获取树状结构的数据链
 *
 * @param {*} [{
 *   id,
 *   tree = [],
 *   filter = ['id'],
 *   options = {}
 * }={}]
 * @returns
 */
var getTreeChains = function getTreeChains(_ref3) {
  var id = _ref3.id,
    tree = _ref3.tree,
    _ref3$filter = _ref3.filter,
    filter = _ref3$filter === void 0 ? ["id"] : _ref3$filter,
    _ref3$options = _ref3.options,
    options = _ref3$options === void 0 ? {} : _ref3$options;
  var opts = {
    id: "id",
    pId: "pId",
    children: "children"
  };
  opts = _objectSpread2(_objectSpread2({}, opts), options);
  var list = tree2Array(tree, {
    id: opts.id,
    children: opts.children
  }).reverse();
  var currentId = id;
  list = list.reduce(function (acc, item) {
    if (currentId === item[opts.id]) {
      var chainItem = filter.reduce(function (subject, key) {
        subject[key] = item[key];
        return subject;
      }, {});
      acc.unshift(chainItem);
      currentId = item[opts.pId];
    }
    return acc;
  }, []);
  if (filter.length === 1) {
    list = list.map(function (item) {
      return item[filter[0]];
    });
  }
  return list;
};

/**
 * 数组转为对象
 * 说明：如果数组元素为对象时指定对象的某个唯一字段为key值，没有指定则默认为下标索引值
 * @export
 * @param {Array} arr
 * @param {string} key
 * @returns
 */
var array2Object = function array2Object(arr, key) {
  if (!arr.length) {
    console.warn("传入数组为空");
    return null;
  }
  return arr.reduce(function (acc, val, index) {
    acc[key && val[key] ? val[key] : index] = val;
    return acc;
  }, {});
};

/**
 * 类数组转为数组
 *
 * @export
 * @param {*} obj 类数组
 * @returns
 */
var arrayLike2Array = function arrayLike2Array(obj) {
  if (!isArrayLike(obj)) {
    console.warn("当前传入数据不是类数组");
    return [];
  }
  return Array.from(obj);
};

// forEach 元素由 左->右 执行
var forEach = forEachType();

// forEach 元素由 右->左 执行
var forEachRight = forEachType("right");

/**
 * 根据给定长度进行分组
 *
 * @export
 * @param {Array} arr
 * @param {number} size 每组最大长度
 * @returns {Array}
 */
var chunk = function chunk(arr, size) {
  return Array.from({
    length: Math.ceil(arr.length / size)
  }, function (item, index) {
    return arr.slice(size * index, size * (index + 1));
  });
};

/**
 * 根据条件获取元素的出现次数
 *
 * @export
 * @param {Array} arr
 * @param {*} fn
 * @returns
 */
var countBy = function countBy(arr) {
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (item) {
    return item;
  };
  return arr.map(function (item) {
    return isFunction(fn) ? fn(item) : item;
  }).reduce(function (acc, item) {
    acc[item] = acc[item] ? ++acc[item] : 1;
    return acc;
  }, {});
};

/**
 * 获取元素的出现次数
 *
 * @export
 * @param {Array} arr
 * @param {*} val
 * @returns
 */
var countByValue = function countByValue(arr, val) {
  return countSameBy(arr)[val];
};

/**
 * 获取指定元素的下标值
 *
 * @export
 * @param {*} arr
 * @param {*} val
 */
var indexOfAll = function indexOfAll(arr, val) {
  return arr.reduce(function (acc, item, index) {
    return item === val ? [].concat(_toConsumableArray(acc), [index]) : acc;
  }, []);
};

/**
 * 随机排序
 *
 * @export
 * @param {*} arr
 * @returns
 */
var shuffe = function shuffe(arr) {
  var list = _toConsumableArray(arr);
  var len = list.length;
  while (len) {
    var i = Math.floor(Math.random() * len--);
    var _ref4 = [list[i], list[len]];
    list[len] = _ref4[0];
    list[i] = _ref4[1];
  }
  return list;
};

/**
 * 随机取数组中数据
 *
 * @export
 * @param {Array} arr
 * @param {number} [size=1]
 * @returns
 */
var sample = function sample(arr) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var list = shuffe(arr);
  return list.slice(0, size);
};
var feArray = {
  isArrayLike: isArrayLike,
  flatten: flatten,
  deepFlatten: deepFlatten,
  intersection: intersection,
  intersectionAll: intersectionAll,
  union: union,
  difference: difference,
  differenceAll: differenceAll,
  array2Tree: array2Tree,
  array2Object: array2Object,
  arrayLike2Array: arrayLike2Array,
  unique: unique,
  forEach: forEach,
  forEachRight: forEachRight,
  chunk: chunk,
  countBy: countBy,
  countByValue: countByValue,
  indexOfAll: indexOfAll,
  shuffe: shuffe,
  sample: sample,
  getTreeChains: getTreeChains
};

var testDigit = function testDigit(digit) {
  return /^\d$/.test(digit);
};
var abs = function abs(number) {
  if (typeof number === "undefined") {
    return;
  }
  var bigNumber = BigNumber(number);
  bigNumber.sign = 1;
  return bigNumber;
};
var isValidType = function isValidType(number) {
  return [typeof number === "number", typeof number === "string" && number.length > 0, Array.isArray(number) && number.length > 0, number instanceof BigNumber].some(function (bool) {
    return bool === true;
  });
};
var errors = {
  invalid: "Invalid Number",
  divisionZero: "Division By Zero"
};
function BigNumber(initialNumber) {
  if (!(this instanceof BigNumber)) {
    return new BigNumber(initialNumber);
  }
  this.number = [];
  this.sign = 1;
  this.rest = 0;
  if (!isValidType(initialNumber)) {
    this.number = errors["invalid"];
    return;
  }
  if (Array.isArray(initialNumber)) {
    if (initialNumber.length && ["+", "-"].includes(initialNumber[0])) {
      this.sign = initialNumber[0] === "+" ? 1 : -1;
      initialNumber.shift(0);
    }
    for (var index = initialNumber.length - 1; index >= 0; index--) {
      if (!this.addDigit(initialNumber[index])) return;
    }
  } else {
    initialNumber = initialNumber.toString();
    var first = initialNumber.charAt(0);
    if (["+", "-"].includes(first)) {
      this.sign = first === "+" ? 1 : -1;
      initialNumber = initialNumber.substring(1);
    }
    for (var _index = initialNumber.length - 1; _index >= 0; _index--) {
      if (!this.addDigit(parseInt(initialNumber.charAt(_index), 10))) {
        return;
      }
    }
  }
}
BigNumber.prototype.addDigit = function (digit) {
  if (!testDigit(digit)) {
    this.number = errors["invalid"];
    return false;
  }
  this.number.push(digit);
  return this;
};
BigNumber.prototype.isEven = function () {
  return this.number[0] % 2 === 0;
};
BigNumber.prototype._compare = function (number) {
  if (!isValidType(number)) return null;
  var bigNumber = BigNumber(number);
  if (this.sign !== bigNumber.sign) return this.sign;
  var offset = this.number.length - bigNumber.number.length;
  if (offset !== 0) return this.sign * offset / Math.abs(offset);
  for (var index = this.number.length - 1; index >= 0; index--) {
    offset = this.number[index] - bigNumber.number[index];
    if (offset !== 0) return this.sign * offset / Math.abs(offset);
  }
  return 0;
};
BigNumber.prototype.gt = function (number) {
  return this._compare(number) > 0;
};
BigNumber.prototype.gte = function (number) {
  return this._compare(number) >= 0;
};
BigNumber.prototype.equals = function (number) {
  return this._compare(number) === 0;
};
BigNumber.prototype.lte = function (number) {
  return this._compare(number) <= 0;
};
BigNumber.prototype.lt = function (number) {
  return this._compare(number) < 0;
};
BigNumber.prototype.add = function (number) {
  if (typeof number === "undefined") return this;
  var bigNumber = BigNumber(number);
  if (this.sign !== bigNumber.sign) {
    var numbers = [bigNumber, this];
    var index = this.sign > 0 ? [0, 1] : [1, 0];
    numbers[index[0]].sign = 1;
    return numbers[index[1]].minus(numbers[index[0]]);
  }
  this.number = BigNumber._add(this, bigNumber);
  return this;
};
BigNumber.prototype.subtract = function (number) {
  if (typeof number === "undefined") return this;
  var bigNumber = BigNumber(number);
  if (this.sign !== bigNumber.sign) {
    this.number = BigNumber._add(this, bigNumber);
    return this;
  }
  this.sign = this.lt(bigNumber) ? -1 : 1;
  this.number = abs(this).lt(abs(bigNumber)) ? BigNumber._subtract(bigNumber, this) : BigNumber._subtract(this, bigNumber);
  return this;
};
BigNumber._add = function (a, b) {
  var length = Math.max(a.number.length, b.number.length);
  for (var index = 0, remainder = 0; index < length || remainder > 0; index++) {
    remainder += (a.number[index] || 0) + (b.number[index] || 0);
    a.number[index] = remainder % 10;
    remainder = Math.floor(remainder / 10);
  }
  return a.number;
};
BigNumber._subtract = function (a, b) {
  for (var _index2 = 0, remainder = 0, _length = a.number.length; _index2 < _length; _index2++) {
    a.number[_index2] -= (b.number[_index2] || 0) + remainder;
    remainder = a.number[_index2] < 0 ? 1 : 0;
    a.number[_index2] += remainder * 10;
  }
  var index = 0;
  var length = a.number.length - 1;
  while (a.number[length - index] === 0 && length - index > 0) {
    index++;
  }
  if (index > 0) {
    a.number.splice(-index);
  }
  return a.number;
};
BigNumber.prototype.multiply = function (number) {
  if (typeof number === "undefined") return this;
  var bigNumber = BigNumber(number);
  if (this.isZero() || bigNumber.isZero()) return BigNumber(0);
  this.sign *= bigNumber.sign;
  var result = [];
  for (var index = 0; index < this.number.length; index++) {
    for (var remainder = 0, givenNumberIndex = 0; givenNumberIndex < bigNumber.number.length || remainder > 0; givenNumberIndex++) {
      remainder += (result[index + givenNumberIndex] || 0) + this.number[index] * (bigNumber.number[givenNumberIndex] || 0);
      result[index + givenNumberIndex] = remainder % 10;
      remainder = Math.floor(remainder / 10);
    }
  }
  this.number = result;
  return this;
};
BigNumber.prototype.divide = function (number) {
  if (typeof number === "undefined") return this;
  var bigNumber = BigNumber(number);
  if (bigNumber.isZero()) {
    this.number = errors["divisionZero"];
    return this;
  } else if (this.isZero()) {
    this.rest = BigNumber(0);
    return this;
  }
  this.sign *= bigNumber.sign;
  bigNumber.sign = 1;
  if (bigNumber.number.length === 1 && bigNumber.number[0] === 1) {
    this.rest = BigNumber(0);
    return this;
  }
  var result = [];
  var rest = BigNumber(0);
  for (var _index3 = this.number.length - 1; _index3 >= 0; _index3--) {
    rest.multiply(10);
    rest.number[0] = this.number[_index3];
    result[_index3] = 0;
    while (bigNumber.lte(rest)) {
      result[_index3]++;
      rest.subtract(bigNumber);
    }
  }
  var index = 0;
  var length = result.length - 1;
  while (result[length - index] === 0 && length - index > 0) {
    index++;
  }
  if (index > 0) {
    result.splice(-index);
  }
  this.rest = rest;
  this.number = result;
  return this;
};
BigNumber.prototype.mod = function (number) {
  return this.divide(number).rest;
};
BigNumber.prototype.power = function (number) {
  if (typeof number === "undefined") return;
  if (!isValidType(number)) {
    this.number = errors["invalid"];
    return;
  }
  var bigNumberPower = BigNumber(number);
  if (bigNumberPower.isZero()) return BigNumber(1);
  if (bigNumberPower.val() === "1") return this;
  var bigNumber = BigNumber(this);
  this.number = [1];
  while (bigNumberPower.gt(0)) {
    if (!bigNumberPower.isEven()) {
      this.multiply(bigNumber);
      bigNumberPower.subtract(1);
      continue;
    }
    bigNumber.multiply(bigNumber);
    bigNumberPower.div(2);
  }
  return this;
};
BigNumber.prototype.abs = function () {
  this.sign = 1;
  return this;
};
BigNumber.prototype.isZero = function () {
  var index;
  for (index = 0; index < this.number.length; index++) {
    if (this.number[index] !== 0) {
      return false;
    }
  }
  return true;
};
BigNumber.prototype.toString = function () {
  if (typeof this.number === "string") return this.number;
  var str = "";
  for (var index = this.number.length - 1; index >= 0; index--) {
    str += this.number[index];
  }
  return this.sign > 0 ? str : "-" + str;
};
BigNumber.prototype.plus = BigNumber.prototype.add;
BigNumber.prototype.minus = BigNumber.prototype.subtract;
BigNumber.prototype.div = BigNumber.prototype.divide;
BigNumber.prototype.mult = BigNumber.prototype.multiply;
BigNumber.prototype.pow = BigNumber.prototype.power;
BigNumber.prototype.valueOf = BigNumber.prototype.toString;

// 将参数转为数组，如果参数本身为数组且第一个元素也为数组则返回第一个元素
var args2Array = function args2Array(args) {
  var params = args;
  if (args.length === 1 && isArray(args[0])) {
    params = args[0];
  }
  return params;
};

// 升降序
function sort(sign, args) {
  return args.sort(function (a, b) {
    return (a - b) * sign;
  });
}

/**
 * 汇总
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

/**
 * 升序
 *
 * @export
 * @param {*} args
 * @returns
 */
var sortAsc = function sortAsc() {
  for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    args[_key5] = arguments[_key5];
  }
  var params = args2Array(args);
  return sort(1, params);
};

/**
 * 降序
 *
 * @export
 * @param {*} args
 * @returns
 */
var sortDesc = function sortDesc() {
  for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    args[_key6] = arguments[_key6];
  }
  var params = args2Array(args);
  return sort(-1, params);
};

// bigInteger类型处理
var bigInt = BigNumber;
var feNumber = {
  sum: sum,
  average: average,
  min: min,
  max: max,
  toFixed: toFixed,
  toCurrency: toCurrency,
  sortAsc: sortAsc,
  sortDesc: sortDesc,
  bigInt: bigInt
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
  return function () {
    return regexp.test(navigator.userAgent);
  };
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
  return name === void 0 ? null : all;
};
var get = function get(name) {
  getHanlder(name);
};
var clear = function clear(name, options) {
  set(name, "", {
    expires: -1,
    domain: options && options.domain,
    path: options && options.path,
    secure: 0,
    httponly: 0
  });
};
var all = function all() {
  getHanlder();
};
var cookie$1 = {
  defaults: defaults,
  set: set,
  get: get,
  clear: clear,
  all: all
};

var Store$1 = window.localStorage;
var storeMap$1 = new Map();
function localStore() {
  var namespaced = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "zstore";
  if (storeMap$1.has(namespaced)) {
    return storeMap$1.get(namespaced);
  }
  storeMap$1.set(namespaced, new Storage$1(namespaced));
  return storeMap$1.get(namespaced);
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
        this.saveState();
      } catch (err) {
        this.state = {};
        this.saveState();
      }
    }
  }, {
    key: "saveState",
    value: function saveState() {
      Store$1.setItem(this.namespaced, JSON.stringify(this.state));
    }
  }, {
    key: "setItem",
    value: function setItem(key, data) {
      this.state[key] = data;
      this.saveState();
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
      this.setState();
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
  var namespaced = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "zstore";
  if (storeMap.has(namespaced)) {
    return storeMap.get(namespaced);
  }
  storeMap.set(namespaced, new Storage(namespaced));
  return storeMap.get(namespaced);
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
        this.saveState();
      } catch (err) {
        this.state = {};
        this.saveState();
      }
    }
  }, {
    key: "saveState",
    value: function saveState() {
      Store.setItem(this.namespaced, JSON.stringify(this.state));
    }
  }, {
    key: "setItem",
    value: function setItem(key, data) {
      this.state[key] = data;
      this.saveState();
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
      this.saveState();
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
var feDate = {
  formatDateTime: formatDateTime
};

var util = feUtil;
var type = feType;
var string = feString;
var array = feArray;
var object = feObject;
var number = feNumber;
var url = feUrl;
var platform = fePlatform;
var cookie = feCookie;
var local = feLocal;
var session = feSession;
var date = feDate;
var index = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, util), type), string), array), object), number), url), platform), {}, {
  cookie: cookie,
  local: local,
  session: session,
  date: date
});

exports.array = array;
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
