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
function _readOnlyError(name) {
  throw new TypeError("\"" + name + "\" is read-only");
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
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function () {};
      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
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
var throttle$1 = function throttle(func, interval, leading) {
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
var requestAnimationFrame$2 = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
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
  throttle: throttle$1,
  debounce: debounce,
  syncPromise: syncPromise,
  requestAnimationFrame: requestAnimationFrame$2,
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

var body = document.documentElement || document.body;

/**
 * 获取元素
 *
 * @param {*} el
 * @param {*} root window是否转为body
 * @returns
 */
var getElement = function getElement(el) {
  var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (el instanceof Window) {
    return root ? body : window;
  } else if (isElement(el)) {
    return el;
  } else if (isString(el)) {
    var currentEl = document.querySelector(el);
    return isElement(currentEl) ? currentEl : null;
  }
  console.warn("当前元素不存在");
  return null;
};

/**
 * 获取元素的样式
 *
 * @export
 * @param {HTMLElement|string|Window} el
 * @param {string} style
 * @returns
 */
var getStyle = function getStyle(el, style) {
  var currentEl = getElement(el);
  if (!currentEl) return;
  return currentEl.currentStyle ? currentEl.currentStyle[style] : getComputedStyle(currentEl)[style];
};

/**
 * 判断一个元素是否为另一个元素的子元素
 *
 * @export
 * @param {*} parent
 * @param {*} child
 * @returns
 */
var elementContains = function elementContains(parent, child) {
  var childEl = getElement(child);
  var parentEl = getElement(parent);
  if (!childEl || !parentEl) return;
  return parentEl.contains(childEl);
};

/**
 * 获取元素相对父元素的距离
 *
 * @export
 * @param {HTMLElement|string|Window} el
 * @param {HTMLElement|string|Window} parent
 */
var getElementOffsetTop = function getElementOffsetTop(el) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : body;
  var currentEl = getElement(el);
  var parentEl = getElement(parent);
  if (!currentEl || !parentEl) return;
  if (!elementContains(parentEl, currentEl)) {
    console.warn("目标元素属于提供元素的子元素");
    return;
  }
  var isSetPosition = false;
  if (getStyle(parentEl, "position") === "staic") {
    parentEl.style.position = "relative";
    isSetPosition = true;
  }
  var offsetTop = currentEl.offsetTop;
  var p = currentEl.offsetParent;
  while (p && p !== parentEl && parentEl.contains(p)) {
    if (navigator.userAgent.indexOf("MSIE 8.0") === -1) {
      offsetTop += p.clientTop;
    }
    offsetTop += p.offsetTop;
    p = p.offsetParent;
  }
  if (isSetPosition) {
    parentEl.style.position = "static";
  }
  return offsetTop;
};

/**
 * 设置元素滚动
 *
 * @export
 * @param {HTMLElement|string|Window} [el=body] 滚动条所在元素
 * @param {number} position 目标位置
 * @param {boolean} [isAnimate=true] 是否使用动画
 */
var scrollTo = function scrollTo() {
  var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : body;
  var position = arguments.length > 1 ? arguments[1] : undefined;
  var isAnimate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  // offset > 0 => 目标位置再窗口顶部的上方
  // offset < 0 => 目标位置再窗口顶部的下方
  var currentEl = getElement(el);
  if (!currentEl) return;
  var step = position - currentEl.scrollTop > 0 ? 20 : -20;
  var requestId = null;
  function scrollHandler() {
    if (isAnimate && step * (position - currentEl.scrollTop) > 0) {
      if (step * (position - currentEl.scrollTop) > 0) {
        currentEl.scrollTop += step;
        requestId = requestAnimationFrame$2(scrollHandler);
      } else {
        cancelAnimationFrame(requestId);
      }
    } else {
      currentEl.scrollTop = position;
    }
  }
  scrollHandler();
};

/**
 * 让目标元素滚动到滚动元素的可视范围
 *
 * @export
 * @param {HTMLElement|string|Window} target 要滚动到的目标元素
 * @param {HTMLElement|string|Window} [el=body] 滚动元素
 * @param {boolean} [isAnimate=true]
 * @returns
 */
var scrollToTarget = function scrollToTarget(target) {
  var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : body;
  var isAnimate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var currentEl = getElement(el);
  var targetEl = getElement(target);
  if (!currentEl || !targetEl) return;
  var offsetTop = getElementOffsetTop(targetEl, currentEl);
  if (offsetTop === null) {
    console.warn("目标元素属于提供元素的子元素");
  } else {
    scrollTo(currentEl, offsetTop, isAnimate);
  }
};

/**
 * 滚动到顶部
 *
 * @export
 * @param {HTMLElement|string|Window} [el=body] 滚动元素
 * @param {boolean} [isAnimate=true] 是否启动动画
 * @returns
 */
var scrollToTop = function scrollToTop() {
  var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : body;
  var isAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var currentEl = getElement(el);
  if (!currentEl) return;
  scrollTo(currentEl, 0, isAnimate);
};

/**
 * 滚动到底部
 *
 * @export
 * @param {HTMLElement|string|Window} [el=body] 滚动元素
 * @param {boolean} [isAnimate=true] 是否启动动画
 * @returns
 */
var scrollToBottom = function scrollToBottom() {
  var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : body;
  var isAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var currentEl = getElement(el);
  if (!currentEl) return;
  scrollTo(currentEl, currentEl.scrollHeight, isAnimate);
};

// 判断className类型格式是否正确
var checkClassNameType = function checkClassNameType(el, className) {
  var currentEl = getElement(el);
  if (!currentEl) return;
  if (className && !isString(className)) {
    console.warn("类名必须为字符串请不能为空");
    return;
  }
  var name = className.match(/\b\w+\b/g) || [];
  return name[0] || "";
};

/**
 * 为元素添加类名
 *
 * @export
 * @param {HTMLElement|string|Window} el
 * @param {string} className
 */
var addClass = function addClass(el, className) {
  var xlassName = checkClassNameType(el, className);
  if (!xlassName) return;
  if (el.classList) {
    el.classList.add(xlassName);
  } else {
    var list = el.className.match(/\b\w+\b/g) || [];
    list.push(xlassName);
    el.className = list.join(" ");
  }
};

/**
 * 移除元素的类名
 *
 * @export
 * @param {HTMLElement|string|Window} el
 * @param {string} className
 */
var removeClass = function removeClass(el, className) {
  var xlassName = checkClassNameType(el, className);
  if (!xlassName) return;
  if (el.classList) {
    el.classList.remove(xlassName);
  } else {
    var list = el.className.match(/\b\w+\b/g) || [];
    el.className = list.filter(function (item) {
      return item !== xlassName;
    }).join(" ");
  }
};

/**
 * 判断是否含有某个类
 *
 * @export
 * @param {HTMLElement|string|Window} el
 * @param {string} className
 * @returns
 */
var hasClass = function hasClass(el, className) {
  var xlassName = checkClassNameType(el, className);
  if (!xlassName) return false;
  if (el.classList) {
    return el.classList.contains(xlassName);
  }
  var list = el.className.match(/\b\w+\b/g) || [];
  return list.includes(xlassName);
};

/**
 * 动态加载js文件
 *
 * @export
 * @param {string} url
 * @returns {Promise}
 */
var loadJs = function loadJs(url) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (script.readyState) {
      script.onreadystatechange = function () {
        if (script.readyState === "loaded" || script.readyState === "complete") {
          script.onreadystatechange = null;
          resolve();
        }
      };
    } else {
      script.onload = function () {
        resolve();
      };
    }
    script.onerror = function () {
      reject();
    };
    script.src = url;
    document.body.appendChild(script);
  });
};
var feHtml = {
  getElement: getElement,
  getStyle: getStyle,
  getElementOffsetTop: getElementOffsetTop,
  elementContains: elementContains,
  scrollTo: scrollTo,
  scrollToTop: scrollToTop,
  scrollToBottom: scrollToBottom,
  scrollToTarget: scrollToTarget,
  addClass: addClass,
  removeClass: removeClass,
  hasClass: hasClass,
  loadJs: loadJs
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

/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index$1 = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

var Observer = /*#__PURE__*/function () {
  function Observer() {
    _classCallCheck(this, Observer);
    this.list = {};
  }
  _createClass(Observer, [{
    key: "on",
    value: function on(key, fn) {
      if (!this.list[key]) {
        this.list[key] = [];
      }
      this.list[key].push(fn);
    }
  }, {
    key: "emit",
    value: function emit(key) {
      var _this = this;
      for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }
      var fns = this.list[key];
      if (!fns || !fns.length) return;
      fns.forEach(function (fn) {
        fn.call.apply(fn, [_this].concat(params));
      });
    }
  }, {
    key: "remove",
    value: function remove(key, fn) {
      var fns = this.list[key];
      if (!fns || !fns.length) return;
      if (!fn) {
        _readOnlyError("fns");
      } else {
        fns.filter(function (cb) {
          return cb !== fn;
        }), _readOnlyError("fns");
      }
    }
  }]);
  return Observer;
}();
var Observer$1 = new Observer();

var resizeHandler = function resizeHandler(entries) {
  var _iterator = _createForOfIteratorHelper(entries),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var entry = _step.value;
      var listeners = entry.target.__resizeListeners__ || [];
      if (listeners.length) {
        listeners.forEach(function (fn) {
          fn();
        });
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

/**
 * 添加resize事件
 *
 * @export
 * @param {HTMLElment|string|Window} element
 * @param {Function} fn
 * @returns
 */
var addResizeListener = function addResizeListener(element, fn) {
  var el = getElement(element, false);
  if (!el) return;
  if (!el.__resizeListeners__) {
    el.__resizeListeners__ = [];
    el.__ro__ = new index$1(resizeHandler);
    el.__ro__.observe(el);
  }
  el.__resizeListeners__.push(fn);
};

/**
 * 销毁resize事件
 *
 * @export
 * @param {HTMLElment|string|Window} element
 * @param {Function} fn
 * @returns
 */
var removeResizeListener = function removeResizeListener(element, fn) {
  var el = getElement(element, false);
  if (!el || !el.__resizeListeners__) return;
  el.__resizeListeners__.splice(el.__resizeListeners__.indexOf(fn), 1);
  if (!el.__resizeListeners__.length) {
    el.__ro__.disconnect();
  }
};
var observer = Observer$1;
var feEvent = {
  addResizeListener: addResizeListener,
  removeResizeListener: removeResizeListener,
  observer: observer
};

var util = feUtil;
var type = feType;
var string = feString;
var html = feHtml;
var array = feArray;
var object = feObject;
var number = feNumber;
var url = feUrl;
var platform = fePlatform;
var cookie = feCookie;
var local = feLocal;
var session = feSession;
var event = feEvent;
var date = feDate;
var index = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, util), type), string), html), array), object), number), url), platform), event), {}, {
  cookie: cookie,
  local: local,
  session: session,
  date: date
});

exports.array = array;
exports.cookie = cookie;
exports.date = date;
exports.default = index;
exports.event = event;
exports.html = html;
exports.local = local;
exports.number = number;
exports.object = object;
exports.platform = platform;
exports.session = session;
exports.string = string;
exports.type = type;
exports.url = url;
exports.util = util;
