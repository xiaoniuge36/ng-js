// let p1 = new Promise((resolve, reject) => {
//     resolve('成功')
//     reject('失败')
// })
// console.log('p1', p1)

// let p2 = new Promise((resolve, reject) => {
//     reject('失败')
//     resolve('成功')
// })
// console.log('p2', p2)

// let p3 = new Promise((resolve, reject) => {
//     throw('报错')
// })
// console.log('p3', p3)



//手写Promise
// function Promise(executor) {
//     this.status = 'pending';
//     this.value = undefined;
//     this.reason = undefined;
//     this.onResolve = [];
//     this.onReject = [];
//     let resolve = value => {
//         if (this.status === 'pending') {
//             this.status = 'resolved';
//             this.value = value;
//             this.onResolve.forEach(fn => fn(value));
//         }
//     }
//     let reject = reason => {
//         if (this.status === 'pending') {
//             this.status = 'rejected';
//             this.reason = reason;
//             this.onReject.forEach(fn => fn(reason));
//         }
//     }
//     try {
//         executor(resolve, reject);
//     } catch (e) {
//         reject(e);
//     }
// }
// Promise.prototype.then = function(onResolve, onReject) {
//     if (this.status === 'resolved') {
//         onResolve(this.value);
//     }
//     if (this.status === 'rejected') {
//         onReject(this.reason);
//     }
//     if (this.status === 'pending') {
//         this.onResolve.push(onResolve);
//         this.onReject.push(onReject);
//     }
// }
// let p = new Promise((resolve, reject) => {
//     resolve('成功')
//     reject('失败')
// }
// )
// console.log('p', p)
// p.then(value => {
//     console.log('成功', value)
// }
// , reason => {
//     console.log('失败', reason)
// }
// )
// p.then(value => {
//     console.log('成功', value)
// }
// , reason => {
//     console.log('失败', reason)
// }
// )
// const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve();
//     console.log(2);
// });

// promise.then(() => {
//     console.log(3);
// });

// console.log(4);

// const promise = new Promise((resolve, reject) => {
//     resolve('第 1 次 resolve')
//     console.log('resolve后的普通逻辑')
//     reject('error')
//     resolve('第 2 次 resolve')
//   })
   
//   promise
//   .then((res) => {
//     console.log('then: ', res)
//   })
//   .catch((err) => {
//     console.log('catch: ', err)
//   })

// Promise.resolve(1).then(console.log);
// //   .then(Promise.resolve(2))
// //   .then(3)
// //   .then()
// //   .then(console.log)


// a = console.log

// console.log(typeof(a) );
// console.log(typeof console.log);


// function CutePromise(executor) {
//     // value 记录异步任务成功的执行结果
//     this.value = null;
//     // reason 记录异步任务失败的原因
//     this.reason = null;
//     // status 记录当前状态，初始化是 pending
//     this.status = 'pending';
     
//     // 把 this 存下来，后面会用到
//     var self = this;
  
//     // 定义 resolve 函数
//     function resolve(value) {
//         // 异步任务成功，把结果赋值给 value
//         self.value = value;
//         // 当前状态切换为 resolved
//         self.status = 'resolved'; 
//     }
    
//     // 定义 reject 函数
//     function reject(reason) {
//         // 异步任务失败，把结果赋值给 value
//         self.reason = reason; 
//         // 当前状态切换为 rejected
//         self.status = 'rejected';
//     }
  
//     // 把 resolve 和 reject 能力赋予执行器
//     executor(resolve, reject);
// }

// // then 方法接收两个函数作为入参（可选）
// CutePromise.prototype.then = function(onResolved, onRejected) {
  
//     // 注意，onResolved 和 onRejected必须是函数；如果不是，我们此处用一个透传来兜底
//     if (typeof onResolved !== 'function') {
//         onResolved = function(x) {return x};
//     }
//     if (typeof onRejected !== 'function') {
//         onRejected = function(e) {throw e};
//     }

//     // 依然是保存 this
//     var self = this;
//     // 判断是否是 resolved 状态
//     if (self.status === 'resolved') {
//         // 如果是 执行对应的处理方法
//         onResolved(self.value);
//     } else if (self.status === 'rejected') {
//         // 若是 rejected 状态，则执行 rejected 对应方法
//         onRejected(self.reason);
//     }
// };

// new CutePromise(function(resolve, reject){
//     resolve('成了！');
// }).then(function(value){
//     console.log(value);
// }, function(reason){
//     console.log(reason);
// });

// // 输出 “成了！”

// new CutePromise(function(resolve, reject){
//     reject('错了！');
// }).then(function(value){
//     console.log(value);
// }, function(reason){
//     console.log(reason);
// });

// // 输出“错了！”

// function CutePromise(executor) {
//     // value 记录异步任务成功的执行结果
//     this.value = null;
//     // reason 记录异步任务失败的原因
//     this.reason = null;
//     // status 记录当前状态，初始化是 pending
//     this.status = 'pending';
  
//     // 缓存两个队列，维护 resolved 和 rejected 各自对应的处理函数
//     this.onResolvedQueue = [];
//     this.onRejectedQueue = [];
         
//     // 把 this 存下来，后面会用到
//     var self = this;
  
//     // 定义 resolve 函数
//     function resolve(value) {
//         // 如果不是 pending 状态，直接返回
//         if (self.status !== 'pending') {
//             return;
//         }
//         // 异步任务成功，把结果赋值给 value
//         self.value = value;
//         // 当前状态切换为 resolved
//         self.status = 'resolved'; 
//         // 用 setTimeout 延迟队列任务的执行
//         setTimeout(function(){
//             // 批量执行 resolved 队列里的任务
//             self.onResolvedQueue.forEach(resolved => resolved(self.value)); 
//         });
//     }
        
//     // 定义 reject 函数
//     function reject(reason) {
//         // 如果不是 pending 状态，直接返回
//         if (self.status !== 'pending') {
//             return;
//         }
//         // 异步任务失败，把结果赋值给 value
//         self.reason = reason; 
//         // 当前状态切换为 rejected
//         self.status = 'rejected';
//         // 用 setTimeout 延迟队列任务的执行
//         setTimeout(function(){
//             // 批量执行 rejected 队列里的任务
//             self.onRejectedQueue.forEach(rejected => rejected(self.reason));
//         });
//     }
  
//     // 把 resolve 和 reject 能力赋予执行器
//     executor(resolve, reject);
// }
// // then 方法接收两个函数作为入参（可选）
// CutePromise.prototype.then = function(onResolved, onRejected) {
  
//     // 注意，onResolved 和 onRejected必须是函数；如果不是，我们此处用一个透传来兜底
//     if (typeof onResolved !== 'function') {
//         onResolved = function(x) {return x};
//     }
//     if (typeof onRejected !== 'function') {
//         onRejected = function(e) {throw e};
//     }
 
//     // 依然是保存 this
//     var self = this;
//     // 判断是否是 resolved 状态
//     if (self.status === 'resolved') {
//         // 如果是 执行对应的处理方法
//         onResolved(self.value);
//     } else if (self.status === 'rejected') {
//         // 若是 rejected 状态，则执行 rejected 对应方法
//         onRejected(self.reason);
//     } else if (self.status === 'pending') {
//         // 若是 pending 状态，则只对任务做入队处理
//         self.onResolvedQueue.push(onResolved);
//         self.onRejectedQueue.push(onRejected);
//     }
//     return this
// };
// const cutePromise = new CutePromise(function (resolve, reject) {
//     resolve('成了！');
// });
// cutePromise.then((value) => {
//     console.log(value)
//     console.log('我是第 1 个任务')
// }).then(value => {
//     console.log('我是第 2 个任务')
// });
// // 依次输出“成了！” “我是第 1 个任务” “我是第 2 个任务”

// const promise = new Promise((resolve, reject) => {
//     resolve('第 1 次 resolve')
//     console.log('resolve后的普通逻辑')
//   })
   
//   promise
//   .then((res) => {
//     console.log(res);
//     console.log("第 1次 resolve");
//   }).then((res) => {
//     console.log('then: ', '第 2 次 resolve',res)
//   }).then(() => {
//     console.log('then: ', '第 3 次 resolve')
//   })

// new Promise((resolve, reject) => {
//     console.log(1);
//      resolve();
//    })
//    .then((a) => {
//     console.log(2);
//      return new Promise((resolve,reject) => {
//       console.log(3);
//        resolve();
//      })
//      .then((c) => {
//       console.log(4);
//      })
//      .then((d) => {
//       console.log(6);
//      })
//      .then((b) => {
//        console.log(5);
//      });
//    })

// var p1 = new Promise((resolve, reject) => {
//     console.log('hhh')
//     resolve(1)
//     // setTimeout(() => {
//     //   resolve(1)
//     // }, 1000);
//   }).then(res => {
//     return new Promise((resolve, reject) => {
//     //   setTimeout(() => {
//     //     resolve(res+1)
//     //   }, 1000);
//     resolve(res+1)
//     })
//   }).then(res => {
//     console.log(res);
//     return res;
//   })
