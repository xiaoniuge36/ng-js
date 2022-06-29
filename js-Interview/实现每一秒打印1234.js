
//实现每一秒打印1234    使用setInterval
// var i = 0;
// var timer = setInterval(function() {
//     console.log(i);
//     i++;
//     if (i > 5) {
//         clearInterval(timer);
//     }
// }   , 1000);


//使用闭包实现每一秒打印1234    使用setTimeout
// var i = 1;
// var timer1 = setTimeout(function() {
//     console.log(i);
//     i++;
//     if (i > 5) {
//         clearTimeout(timer1);
//     }
// }   , 1000);

// timer1;

// for(var i = 1; i < 5; i++) {
//     (function(i) {  //闭包
//     setTimeout(function() {
//         console.log(i);
//     }   , 1000); //闭包
// })(i);           
// }


//使用let块级作用域实现每一秒打印1234    使用setTimeout
// let i = 1;
// let timer2 = setTimeout(function() {
//     console.log(i);
//     i++;
//     if (i > 5) {
//         clearTimeout(timer2);
//     }
// }   , 1000);

//使用let块级作用域实现每一秒打印1234    使用setInterval
for(let i = 1; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }   , i*1000);
}