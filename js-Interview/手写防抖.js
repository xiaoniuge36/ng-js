function debounce(fn, wait) {
    let timer = null;

    return function () {
        let context = this;
        args = arguments;

        // 如果此时存在定时器的话，则取消之前的定时器重新记时
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }

        // 设置定时器，使事件间隔指定事件后执行
        timer = setTimeout(() => {
            fn.apply(context, args);
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

