/*
 * @Author: xiaoshanwen
 * @Date: 2023-09-25 14:14:08
 * @LastEditTime: 2023-10-07 09:17:27
 * @FilePath: /devops-utils/src/promise/asynclimit/index.js
 */
export default class asyncExecutor {
  constructor(limit, defaultFn) {
    this.limitNum = limit;
    this.defaultFn = defaultFn;
    this.initTask();
  }

  asyncLimit(resolve, reject) {
    const task = this.promiseTaskQueue.shift();
    if (task) {
      const p = task();
      const e = p.then((res) => {
        resolve(res);
        this.runningPromise.splice(this.runningPromise.indexOf(e), 1);
        if (this.promiseTaskQueue.length === 0) {
          this.initTask();
        }
      }).catch((err) => {
        reject(err);
      });
      this.runningPromise.push(e);
      if (this.runningPromise.length >= this.limitNum) {
        this.racePromise = Promise.race(this.runningPromise); // 竞速promise
      }
    }
  }

  asyncExecute(item) {
    // 返回新的pormise
    return new Promise((resolve, reject) => {
      this.promiseTaskQueue.push(this.getTask(item));
      if (this.racePromise) {
        this.racePromise = this.racePromise.then(async () => {
          this.asyncLimit(resolve, reject);
          await Promise.race(this.runningPromise);
        });
      } else {
        this.asyncLimit(resolve, reject);
      }
    });
  }

  initTask() {
    this.promiseTaskQueue = []; // 真实执行promise集合
    this.runningPromise = []; // 执行中的promise集合
    this.racePromise = ''; // 竞速promise，标志进入
  }

  getTask(item) {
    return () =>
      new Promise((resolve) => {
        resolve((item.fn || this.defaultFn)(item.value || item));
      });
  }
}
