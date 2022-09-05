//节流
function throttle(fn, delay) {
  let curtime = Data.now();
  return function () {
    let context = this;
    args = arguments;
    nowTime = Date.now();
    // 如果两次时间间隔超过了指定时间，则执行函数。
    if (nowTime - curtime >= delay) {
      curtime = Date.now();
      return fn.apply(context, args);
    }
  }

}

// 节流
// 设置一个标志
function throttle(fn, delay) {
  let flag = true;
  return () => {
    if (!flag) return;
    flag = false;
    timer = setTimeout(() => {
      fn();
      flag = true;
    }, delay);
  };
}

//手写节流 
function throttle(fn, delay) {
  let flag = true;
  return function () {
    if (!flag) return;
    flag = false;
    timer = setTimeout(() => {
      fn();
      flag = true;
    }, delay);
  }
}
