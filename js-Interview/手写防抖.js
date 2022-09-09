function debounce(fn, wait) {
    let timer = null; // 创建一个标记用来存放定时器的返回值 

    return function () {
        let context = this; // 保存当前this的指向
        args = arguments; // 保存当前调用debounce函数时传入的参数

        // 如果此时存在定时器的话，则取消之前的定时器重新记时
        if (timer) {
            clearTimeout(timer); // 取消定时器
            timer = null; // 清空定时器
        }

        // 设置定时器，使事件间隔指定事件后执行
        timer = setTimeout(() => {
            fn.apply(context, args); // 执行事件
        }, wait);
    }
}

function debounce1(fn,wait){
    let timer = null;

    return function (){
        if (timer){
            clearTimeout(timer);
        }

        timer = setTimeout(()=>{
            fn.apply(this,arguments);
            timer = null;
        },wait)
    }
}

function debounce2(fn,wait){
    let timer = null;
    return function (){
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(()=>{
            fn.apply(this,arguments);
        },wait)
    }
}

function debounce(fn,wait){
    let timer = null;
    return function(){
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(()=>{
            fn.apply(this,arguments);
        },wait)
    }
}

function debounce(fn,wait){
    let timer = null;
    return function(){
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(()=>{
            fn.apply(this,arguments);
        },wait)
    }
}

