import feUtil from "./utils";
import feType from "./type";
import feString from "./string";
import feObject from "./object";
import feNumber from "./number";
import feUrl from "./url";
import fePlatform from "./platform";
import { feLocal, feSession, feCookie } from "./store";
import feDate from "./date";

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

export default {
  ...util,
  ...type,
  ...string,
  ...object,
  ...number,
  ...url,
  ...platform,
  cookie,
  local,
  session,
  date
};
