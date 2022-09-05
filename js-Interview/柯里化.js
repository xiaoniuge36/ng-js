//参数定长柯里化
// function curry(fn) {
//     // 获取原函数的参数长度
//     const argLen = fn.length;
//     // 保存预置参数
//     // [].slice.call(arguments)能将具有length属性的对象转成数组
//     // 简单解释一下就是
//     // arguments是一个类数组对象
//     // []是一个空数组,也是一个对象
//     // slice()方法可以从已有的数组中返回选定的元素
//     // [].slice.call(arguments)就可以理解为arguments借用[]的slice()方法

//     const presetArgs = [].slice.call(arguments, 1)
//     // 返回一个新函数
//     return function () {
//         // 新函数调用时会继续传参
//         const restArgs = [].slice.call(arguments)
//         const allArgs = [...presetArgs, ...restArgs]
//         if (allArgs.length >= argLen) {
//             // 如果参数够了，就执行原函数
//             return fn.apply(this, allArgs)
//         } else {
//             // 否则继续柯里化
//             return curry.call(null, fn, ...allArgs)
//         }
//     }
// }

// // 虽然apply的语法与 call() 几乎相同，但根本区别在于，call() 接受一个参数列表，而 apply() 接受一个参数的单数组。
// // call，apply，bind都可以绑定this，区别在于：apply和call是绑定this后直接调用该函数，而bind会返回一个新的函数，并不直接调用，可以由程序员决定调用的时机。
// // bind的语法形式如下：
// // function.bind(thisArg[, arg1[, arg2[, ...]]])
// // 复制代码
// // bind的arg1, arg2, ...是给新函数预置好的参数（预置参数是可选的）。当然新函数在执行时也可以继续追加参数。

// function fn(a, b, c) {
//     return a + b + c;
// }
// var curried = curry(fn);
// curried(1, 2, 3); // 6
// curried(1, 2)(3); // 6
// curried(1)(2, 3); // 6
// curried(1)(2)(3); // 6
// curried(7)(8)(9); // 24
// console.log(curried(1, 2, 3)); // 6

//柯里化不定长
function curry(fn) {
    // 保存预置参数
    const presetArgs = [].slice.call(arguments, 1)
    // 返回一个新函数
    function curried () {
      // 新函数调用时会继续传参
      const restArgs = [].slice.call(arguments)
      const allArgs = [...presetArgs, ...restArgs]
      return curry.call(null, fn, ...allArgs)
    }
    // 重写toString
    curried.toString = function() {
      return fn.apply(null, presetArgs)
    }
    return curried;
  }

  function dynamicAdd() {
    return [...arguments].reduce((prev, curr) => {
      return prev + curr
    }, 0)
  }
  var add = curry(dynamicAdd);
   var a=add(1)(2)(3)(4); // 10
   add(1, 2)(3, 4)(5, 6); // 21
  console.log(a); // 10
  
  