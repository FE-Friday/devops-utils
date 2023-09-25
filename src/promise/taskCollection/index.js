/*
 * @Author: xiaoshanwen
 * @Date: 2023-09-20 11:37:04
 * @LastEditTime: 2023-09-25 10:05:53
 * @FilePath: /devops-utils/src/promise/promiseTaskCollection/index.js
 */


let __promiseMap = {};
let __promiseAllMap = {};

function initPromiseMap(key) {
    __promiseMap[key] = {};
    __promiseAllMap[key] = {};
};

function getKeys() {
    return Object.keys(__promiseMap);
};

function setPromise(key, id) {
    if (!__promiseMap[key]) {
        __promiseMap[key] = {};
    }
    let res;
    let rej;
    const promise = new Promise((resolve, reject) => {
        res = resolve;
        rej = reject;
    });
    __promiseMap[key][id] = {
        resolve: res,
        reject: rej,
        promise
    };
};

function getPromise(key, id = '') {
   if (!id) return this.__promiseMap[key] || {} 
   return this.__promiseMap?.[key]?.[id] || { resolve: () => {}, reject: () => {} } 
};

function launchPromiseAll(key) {
    let promiseList = [];
    if (Object.keys(__promiseMap[key]).length) {
        promiseList = Object.values(__promiseMap[key]).map(item => {
            return item.promise;
        });
    }
    __promiseAllMap[key] = Promise.allSettled(promiseList);
};

function targetPromiseAll(key) {
    return __promiseAllMap[key];
}

export default {
  initPromiseMap,
  getKeys,
  setPromise,
  getPromise,
  launchPromiseAll,
  targetPromiseAll,
}
