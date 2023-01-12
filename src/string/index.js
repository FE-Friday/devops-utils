/**
 * 中华线或者下划线转化为驼峰格式
 *
 * @export
 * @param {string} str
 * @eg: 'get-element-by-id' 或者 'get_element_by_id' 转化为 'getElementById' 格式
 * @returns
 */
export const camelCase = str =>
  str.replace(/[-_]+([a-z])?/g, (_, item) => (item ? item.toUpperCase() : ""));

/**
 * 驼峰转化为中划线值
 *
 * @export
 * @param {string} str
 * @returns
 */
export const kebabCase = str =>
  str
    .replace(/([A-Z])/g, "-$1")
    .replace(/_+/g, "-")
    .toLowerCase();

/**
 * 根据附加属性生成指定条件的正则表达式
 *
 * @param {object} attrs 附加属性
 * @returns {Array}
 */
const getAttrsReg = attrs => {
  const attrsReg = [];
  Object.keys(attrs).forEach(key => {
    if (attrs[key]) {
      attrsReg.push(new RegExp(`${key}\\s*=\\s*(['"])${attrs[key]}\\1`, "gim"));
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
const getResultByAttr = (list, attrs) => {
  let result = [...list];
  const attrsReg = getAttrsReg(attrs);
  const res = [];
  attrsReg.forEach(attrReg => {
    result.forEach(item => {
      if (attrReg.test(item)) {
        res.push(item);
      }
    });
    result = res;
  });
  return result;
};

/**
 * 获取html字符串文本中的纯文本信息
 *
 * @export
 * @param {string} source 需要解析的源文本
 */
export const getPureTextFromHtmlString = source =>
  source.replace(/<style[^>]*>[\d\D]*?<\/style>|<[^>]*>/g, "");

/**
 * 转义html
 *
 * @export
 * @param {string} str
 * @returns
 */
export const escapeHtml = str => {
  const hash = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  };
  return str.replace(/[&<>'"]/g, tag => hash[tag] || tag);
};

export default {
  camelCase,
  kebabCase,
  getPureTextFromHtmlString,
  escapeHtml
};
