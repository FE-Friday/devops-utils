import { isNumber, isArray } from "../type";

// 将参数转为数组，如果参数本身为数组且第一个元素也为数组则返回第一个元素
const args2Array = args => {
  let params = args;
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
export const sum = (...args) => {
  const params = args2Array(args);
  return [...params].reduce((acc, val) => acc + val, 0);
};

/**
 * 取平均数
 *
 * @export
 * @param {*} args
 * @returns
 */
export const average = (...args) => {
  const params = args2Array(args);
  return sum(...params) / (params.length ? params.length : 1);
};

/**
 * 取最小值
 *
 * @export
 * @param {*} args
 * @returns
 */
export const min = (...args) => {
  const params = args2Array(args);
  return Math.min.apply(null, params);
};

/**
 * 取最大值
 *
 * @export
 * @param {*} args
 * @returns
 */
export const max = (...args) => {
  const params = args2Array(args);
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
export const toCurrency = num =>
  String(num).replace(/(?!^)(?=(\d{3})+$)/g, ",");

/**
 * 截取小数点后几位
 *
 * @export
 * @param {*} num
 * @param {number} [size=2]
 * @returns
 */
export const toFixed = (num, size = 2) =>
  isNumber(num) ? num.toFixed(size) : num;

export default {
  sum,
  average,
  min,
  max,
  toFixed,
  toCurrency
};
