
 // call函数实现
Function.prototype.myCall = function(context) {
    // 判断调用对象
    if (typeof this !== "function") {
      console.error("type error");
    }
    // 获取参数
    let args = [...arguments].slice(1),
        result = null;
    // 判断 context 是否传入，如果未传入则设置为 window
    context = context || window;
    // 将调用函数设为对象的方法
    context.fn = this;
    // 调用函数
    result = context.fn(...args);
    // 将属性删除
    delete context.fn;
    return result;
  };


//手写call,bind,apply
Function.prototype.call = function(context) {
    // 判断调用对象
    if (typeof this !== "function") {
      console.error("type error");
    }
    // 获取参数
    let args = [...arguments].slice(1),
        result = null;
    // 判断 context 是否传入，如果未传入则设置为 window
    context = context || window;
    // 将调用函数设为对象的方法
    context.fn = this;
    // 调用函数
    result = context.fn(...args);
    // 将属性删除
    delete context.fn;
    return result;
  }

  //手写bind
  Function.prototype.bind = function(context) {
    // 判断调用对象
    if (typeof this !== "function") {
      console.error("type error");
    }
    // 获取参数
    let args = [...arguments].slice(1),
        result = null;
    // 判断 context 是否传入，如果未传入则设置为 window
    context = context || window;
    // 将调用函数设为对象的方法
    context.fn = this;
    // 调用函数
    result = context.fn(...args);
    // 将属性删除
    delete context.fn;
    return result;
  }


  Function.prototype.myBind = function (context = window) { // 原型上添加mybind方法
    // var args = Array.from(arguments) // 类数组转数组(es6) console.log(args instanceof Array)
    var argumentsArr = Array.prototype.slice.call(arguments) // 类数组转数组
    var args = argumentsArr.slice(1) // 后面的参数
    var self = this // 调用的方法本身
    return function () { // 返回一个待执行的方法
        var newArgs = Array.prototype.slice.call(arguments) // 返回函数的arguments,类数组转数组或者使用es6解构赋值
        self.apply(context, args.concat(newArgs)) // 合并两args
    }
 }
 
 //手写apply
  Function.prototype.apply = function(context, args) {
    // 判断调用对象
    if (typeof this !== "function") {
      console.error("type error");
    }
    // 获取参数
    let result = null;
    // 判断 context 是否传入，如果未传入则设置为 window
    context = context || window;
    // 将调用函数设为对象的方法
    context.fn = this;
    // 调用函数
    result = context.fn(...args);
    // 将属性删除
    delete context.fn;
    return result;
  }
 