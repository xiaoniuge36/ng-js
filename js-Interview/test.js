// // function calculateDaysBetweenDates(startDate, endDate) {
// //     var millisecondsPerDay = 24 * 60 * 60 * 1000;
// //     return (endDate - startDate) / millisecondsPerDay;
// // };

// // // 深拷贝           
// // function deepCopy(obj) {
// //     var result = Array.isArray(obj) ? [] : {};
// //     for (var key in obj) {
// //         if (obj.hasOwnProperty(key)) {
// //             if (typeof obj[key] === 'object') {
// //                 result[key] = deepCopy(obj[key]);
// //             } else {
// //                 result[key] = obj[key];
// //             }
// //         }
// //     }
// //     return result;
// // }

// // // 浅拷贝
// // function shallowCopy(obj) {
// //     var result = Array.isArray(obj) ? [] : {};
// //     for (var key in obj) {
// //         if (obj.hasOwnProperty(key)) {
// //             result[key] = obj[key];
// //         }
// //     }
// //     return result;
// // }

// // //冒泡排序
// // function bubbleSort(arr) {
// //     var len = arr.length;
// //     for (var i = 0; i < len; i++) {
// //         for (var j = 0; j < len - i - 1; j++) {
// //             if (arr[j] > arr[j + 1]) {
// //                 var temp = arr[j];
// //                 arr[j] = arr[j + 1];
// //                 arr[j + 1] = temp;
// //             }
// //         }
// //     }
// //     return arr;
// // }


// // //数组去重
// // function unique(arr) {
// //     var result = [];
// //     for (var i = 0; i < arr.length; i++) {
// //         if (result.indexOf(arr[i]) === -1) {
// //             result.push(arr[i]);
// //         }
// //     }
// //     return result;
// // }

// // //数组去重
// // function unique(arr) {
// //     var result = [];
// //     for (var i = 0; i < arr.length; i++) {
// //         if (result.indexOf(arr[i]) === -1) {
// //             result.push(arr[i]);
// //         }
// //     }
// //     return result;
// // }

// // //手写promise
// // function Promise(fn) {
// //     var status = 'pending';
// //     var value;
// //     var resolve = function (val) {
// //         if (status === 'pending') {
// //             status = 'resolved';
// //             value = val;
// //         }
// //     }
// //     var reject = function (val) {
// //         if (status === 'pending') {
// //             status = 'rejected';
// //             value = val;
// //         }
// //     }
// //     fn(resolve, reject);
// //     return {
// //         then: function (callback) {
// //             if (status === 'resolved') {
// //                 callback(value);
// //             }
// //         }
// //     }
// // }

// // //手写Object.create
// // function ObjectCreate(obj) {
// //     var F = function () {};
// //     F.prototype = obj;
// //     return new F();
// // }

// // //统计数组出现次数最多的元素
// // function mostFrequent(arr) {
// //     var result = {};
// //     for (var i = 0; i < arr.length; i++) {
// //         if (result[arr[i]]) {
// //             result[arr[i]]++;
// //         } else {
// //             result[arr[i]] = 1;
// //         }
// //     }
// //     var max = 0;
// //     var maxKey = '';
// //     for (var key in result) {
// //         if (result[key] > max) {
// //             max = result[key];
// //             maxKey = key;
// //         }
// //     }
// //     return maxKey;
// // }

// // //reduce方法
// // function reduce(arr, fn, init) {
// //     var result = init;
// //     for (var i = 0; i < arr.length; i++) {
// //         result = fn(result, arr[i]);
// //     }
// //     return result;
// // }

// // //parseInt方法
// // function parseInt(str, radix) {
// //     var result = 0;
// //     if (radix) {
// //         result = parseInt(str, radix);
// //     } else {
// //         result = parseInt(str);
// //     }
// //     return result;
// // }

// // var obj = {a:1, b:2, c:3};

// // for (var prop in obj) {
// //     console.log(prop);
// //     console.log(obj[prop]);
// //     console.log([prop]);
// //   console.log("obj." + prop + " = " + obj[prop]);
// // }

// // let arr = [1,2,3,4,5];
// // for(let item in arr){
// //     if(item>=2){
// //         break;
// //     }
// //     console.log(item);
// // }

// // var arr = [1, 2, 3, 4]
// // var sum = arr.reduce((prev, cur, index, arr) => {
// //     // console.log(prev, cur, index);
// //     return prev + cur;
// //     if(prev>3){
// //         throw new Error('error');
// //     }
// // })
// // console.log(arr, sum);

// // reduce跳出循环
// // var arr = [1, 2, 3, 4];
// // var sum = arr.reduce((prev, cur, index, arr) => {
// //     console.log(prev, cur, index);
// //     if (index > 1) {
// //         throw new Error('error');
// //     }
// //     return prev + cur;
// // }
// // , 0)
// // console.log(arr, sum);

// // // [1, 2, 3, 4] 10;

// //加try 利用 throw 解决;
// // var arr = [1,3,5,7,9];
// // var id = 5;
// // try {
// //      arr.map(function (curItem, i) {
// //          if(curItem === 1) return;
// //          console.log(curItem)
// //          if (curItem === id) {
// //              throw Error();         //满足条件，跳出循环
// //          }
// //      })
// //  } catch (e) {
// //  }

// //防抖节流立即执行 去实现
// // 100vmin实现浏览器可视区域内最大的正方形


// // for (var i = 0; i < 5; i++) {
// //     setTimeout(function() {
// //         console.log(i);
// //     }, 1000);
// // }

// // console.log(i);


// // for (var i = 0; i < 5; i++) {
// //     console.log(i);
// // }

// // console.log(i);

// function foo(a,b){
//     console.log(b);
//     return {
//       foo:function(c){
//         return foo(c,a);
//       }
//     }
//   }
   
//   var func1=foo(0);
//   func1.foo(1);
//   func1.foo(2);
//   func1.foo(3);
//   var func2=foo(0).foo(1).foo(2).foo(3);
//   var func3=foo(0).foo(1);
//   func3.foo(2);
//   func3.foo(3);

//   function addTen(num) { 
//     num += 10; 
//     return num; 
//    } 
//    let count = 20; 
//    let result = addTen(count); 
//    console.log(count); // 20，没有变化
//    console.log(result); // 30
//    console.log(num);    // undefined，因为num是局部变量，不是全局变量

//    //一般不推荐这么命名，严格模式下会报错
//    function aa(){
//     //报错  只能在函数内部使用 var 声明变量
//     // a += 1;
//     // a = a+1;
//     // a++;
//     //不报错，因为a是局部变量，不是全局变量
//     // a=1;
//     console.log(a);
//    }
//     aa();
//     console.log(a);   

//     function aa(){
//         var a = 1;
//         console.log(a);
//     }
//     aa();
//     console.log(a); 

//     function testA() {
//         console.log('执行第一个测试函数的逻辑');
//         testB();
//         console.log('再次执行第一个测试函数的逻辑');
//       }
      
//       function testB() {
//         console.log('执行第二个测试函数的逻辑');
//       }
      
//       testA();


//       let name = 'xiuyan'; // 全局作用域内的变量

// // 函数作用域
// function showName() {
//     console.log(name);
// }

// // 块作用域
// {
//   name = 'BigBear'
// }

// showName(); // 输出 'BigBear'


// // var name = 'xiuyan'; // 全局作用域内的变量

// // // 函数作用域
// // function showName() {
// //     console.log(name);
// // }

// // // 块作用域
// // {
// //   name = 'BigBear'
// // }

// // showName(); // 输出 'BigBear'


// // var name = 'xiuyan'; // name 是全局变量
// // function showName(myName) {
// //   // myName 是传入 showName 的局部变量
// //   console.log(myName);
// // }
// // function sayHello() {
// //   // hello 被定义成局部作用域变量
// //   var helloString = 'hello everyone';
// //   console.log(helloString);
// // }


// // showName(name); // 输出 'xiuyan'
// // sayHello(); // 输出 'hello everyone'
// // console.log(myName); // 抛出错误：myName 在全局作用域未定义
// // console.log(helloString); // 抛出错误：hello 在全局作用域未定义

// // {
// //   console.log(helloString, myName) // 抛出错误
// // }

// {
//     var a = 1;
//     let b = 2;
// }
// console.log(a, b); // 1 2

// function addA(a) {
//     console.log(a + b)
//     console.log(c) // 报错
//   }
  
//   var b = 1
  
//   addA(2) //3

//   function generateName(prefix, type, itemName) {
//     return prefix + type + itemName
// }

// // 调用时一口气传入3个入参
// var itemFullName = generateName('大卖网', '母婴', '奶瓶')

// function generateName(prefix) {
//     return function(type, itemName) {
//         return prefix + type + itemName
//     }
// }

// // 把3个参数分两部分传入
// var itemFullName = generateName('大卖网')('母婴', '奶瓶')


// function generateName(prefix) {  
//     return function(type) {
//         return function (itemName) {
//             return prefix + type + itemName
//         }    
//     }
// }

// // 生成大卖网商品名专属函数
// var salesName = generateName('大卖网')

// // “记住”prefix，生成大卖网母婴商品名专属函数
// var salesBabyName = salesName('母婴')

// // "记住“prefix和type，生成洗菜网生鲜商品名专属函数
// var vegFreshName = generateName('洗菜网')('生鲜')

// // 输出 '大卖网母婴奶瓶'
// salesBabyName('奶瓶')
// // 输出 '洗菜网生鲜菠菜'
// vegFreshName('菠菜')

// // 啥也不记，直接生成一个商品名
// var itemFullName = generateName('洗菜网')('生鲜')('菠菜')


// function addABC(){
//     var a = 1,b = 2;
    
//     function add(){
//       return a+b+c;
//     }
//     return add;
//   }
  
//   var c = 3
  
//   var globalAdd = addABC()
  
//   console.log(globalAdd()) // 6


//   for (let i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 1000);
// }

// console.log(i);

// for (var i = 0; i < 5; i++) {
//     setTimeout(function(j) {
//         console.log(j);
//     }, 1000, i);
// }

// var output = function (i) {
//     setTimeout(function() {
//         console.log(i);
//     }, 1000);
// };

// for (var i = 0; i < 5; i++) {
//     // 这里的 i 被赋值给了 output 作用域内的变量 i
//     output(i);  
// }

// for (var i = 0; i < 5; i++) {
//     // 这里的 i 被赋值给了立即执行函数作用域内的变量 j
//     (function(j) {  
//         setTimeout(function() {
//             console.log(j);
//         }, 1000);
//     })(i);
// }

// i=1;
// a = ++i;
// console.log(a);
// console.log(i);

// // 定义常量 MY_FAV 并赋值 7

// const MY_FAV = 7;

// // 报错 - Uncaught TypeError: Assignment to constant variable.
// MY_FAV = 20;

// // MY_FAV is 7
// console.log('my favorite number is: ' + MY_FAV);

// // // 尝试重新声明会报错
// // // Uncaught SyntaxError: Identifier 'MY_FAV' has already been declared
// // const MY_FAV = 20;

// // // MY_FAV 保留给上面的常量，这个操作会失败
// // var MY_FAV = 20;

// // // 也会报错
// let MY_FAV = 20;


const a =2;

 a =3;
console.log(a);
