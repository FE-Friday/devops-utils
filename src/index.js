import feUtil from "./utils";
import feType from "./type";
import feString from "./string";
import feHtml from "./html";
import feArray from "./array";
import feObject from "./object";
import feNumber from "./number";
import feUrl from "./url";
import fePlatform from "./platform";
import { feLocal, feSession, feCookie } from "./store";
// import feDate from "./date";
import feEvent from "./event";

export const util = feUtil;
export const type = feType;
export const string = feString;
export const html = feHtml;
export const array = feArray;
export const object = feObject;
export const number = feNumber;
export const url = feUrl;
export const platform = fePlatform;
export const cookie = feCookie;
export const local = feLocal;
export const session = feSession;
export const event = feEvent;
// export const date = feDate;

export default {
  ...util,
  ...type,
  ...string,
  ...html,
  ...array,
  ...object,
  ...number,
  ...url,
  ...platform,
  ...event,
  cookie,
  local,
  session,
  // date
};
