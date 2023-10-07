/*
 * @Author: xiaoshanwen
 * @Date: 2023-09-25 09:59:37
 * @LastEditTime: 2023-09-25 10:42:53
 * @FilePath: /devops-utils/src/index.js
 */
import feUtil from "./utils";
import feType from "./type";
import feString from "./string";
import feObject from "./object";
import feNumber from "./number";
import feUrl from "./url";
import fePlatform from "./platform";
import { feLocal, feSession, feCookie } from "./store";
import feDate from "./date";
import fePromise from "./promise";

export const util = feUtil;
export const type = feType;
export const string = feString;
export const object = feObject;
export const number = feNumber;
export const url = feUrl;
export const platform = fePlatform;
export const cookie = feCookie;
export const local = feLocal;
export const session = feSession;
export const date = feDate;
export const promise = fePromise

export default {
  ...util,
  ...type,
  ...string,
  ...object,
  ...number,
  ...url,
  ...platform,
  ...promise,
  cookie,
  local,
  session,
  date
};
