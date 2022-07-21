
//发布订阅者模式
// class EventEmitter{
//     //存放注册事件与回调
//     constructor(){
//         this._events = {};
//     }
//     //注册事件
//     on(eventName,callback){
//         if(!this._events[eventName]){
//             this._events[eventName] = [];
//         }
//         this._events[eventName].push(callback);
//     }
//     //触发事件
//     emit(eventName,...args){
//         if(this._events[eventName]){
//             this._events[eventName].forEach(callback=>{
//                 callback(...args);
//             });
//         }
//     }
// }
// let emitter = new EventEmitter();
// emitter.on('event',function(...args){
//     console.log(args);
// }
// emitter.emit('event','a','b','c');


class EventEmitter{
    //存放注册事件与回调
    constructor(){
        this._events = {};
    }
     //注册事件  
     on(eventName,callback){
        const callbacks = this._events[eventName] || [];
        callbacks.push(callback);
        this._events[eventName] = callbacks;
    }
    //触发事件
    //扩展运算符 ...arg 讲字符串转换为数组
    emit(eventName,...args){
        const callbscks = this._events[eventName] || [];
        // console.log(callbscks);
        callbscks.forEach(callback=>{
            callback(...args);
            // console.log(args);
            // console.log(callback(args));
        });
    }
    off(eventName,callback){
        const callbscks = this._events[eventName] || [];
        callbscks.forEach((cb,index)=>{
            if(cb === callback){
                callbscks.splice(index,1);
            }
        });
    }
}
let emitter = new EventEmitter();
emitter.on('event',function(...args){
    console.log(args);
    return args;
});
emitter.emit('event','a','b','c');
// emitter.off('event',function(...args){
//     console.log(args);
// }

// console.log(...('a','b','c'));
// console.log(...['a','b','c']);

// var str = "h"+"ello";
// console.log(...str);

//拓展运算符
// let arr = [1,2,3];
// let arr2 = [...arr];
// console.log(arr2);
// let arr3 = [...arr,...arr];

function add(...args){
    console.log(args);
}
add(1,2,3);
add(...[1,2,3]);
add(...[1,2,3,4,5]);

