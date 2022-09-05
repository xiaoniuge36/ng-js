//整数反转 只考虑了正数
var reverse= function (params) {
    //1.toString() 会报错 进行数字到字符串的转换时，建议用小括号将要转换的目标括起来，防止出错
    //(1).toString(); 不会报错
    // let str = params.toString(); // 将数字转换为字符串
    // let arr = str.split(''); // 将字符串转换为数组
    let arr = params.toString().split(''); // 将数字转换为数组
    let newArr = []; // 创建一个新数组
    for (var i = arr.length - 1; i >= 0; i--) { // 循环数组 倒序
        newArr.push(arr[i]); // 将数组中的每一项添加到新数组中
    }
    return newArr.join('');   // 将新数组转换为字符串
}
console.log(reverser(123)); // 321

// 思路： 
// 1. 将数字转换为字符串
// 2. 将字符串转换为数组
// 3. 倒序数组
// 4. 将数组转换为字符串
// 5. 返回字符串


// 整数反转 另一种写法

let reverse =function (x) {
    let a, sum = 0, max = Math.pow(2, 31) - 1, min = -max - 1
    if (x > max || x < min) return 0
    while (x !== 0) {
        a = x % 10
        x = parseInt(x / 10)
        sum = sum * 10 + a
    }
    if (sum > max || sum < min) return 0
    return sum
}
