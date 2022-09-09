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
function throttle(fn, delay) { // fn是要执行的函数，delay是时间间隔
  let flag = true; // 设置一个标志，初始值为true
  return () => { // 返回一个函数
    if (!flag) return; // 如果标志为false，直接返回
    flag = false; // 如果标志为true，将标志设置为false
    timer = setTimeout(() => { // 设置一个定时器
      fn(); // 执行函数
      flag = true; // 执行完函数后，将标志设置为true
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
