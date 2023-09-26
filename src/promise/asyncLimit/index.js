let targetArray = []; // 目标调用数组
let resultArray = []; // 结果数组
let runningPromise = null; // 正在运行的 Promise
let limitNum = 0; // 最大并发数
let defaultFn = (value) => value; // 默认处理函数

function asyncInit(limit, fn) {
  limitNum = limit;
  defaultFn = fn;
}

 async function asyncLimit(arr) {
  const promiseArray = []; // 所有 Promise 实例
  const running = []; // 正在执行的 Promise 数组

  for (const item of arr) {
    const p = Promise.resolve((item.fn || defaultFn)(item.value || item)); // 调用元素的处理函数
    promiseArray.push(p);

    if (arr.length >= limitNum) {
      const e = p.then(() => running.splice(running.indexOf(e), 1));
      running.push(e);

      if (running.length >= limitNum) {
        await Promise.race(running);
      }
    }
  }

  return Promise.allSettled(promiseArray);
}

function asyncExecute(item) {
  targetArray.push(item);

  if (!runningPromise) {
    runningPromise = Promise.resolve().then(()=>{
      asyncLimit(targetArray).then((res) => {
        resultArray.push(...res);
        targetArray = [];
        runningPromise = null;
      });
    })
  }
}

export default {
  asyncInit,
  asyncExecute
}