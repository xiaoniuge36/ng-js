function demo(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
        // 如果是数组，调用递归函数 dimension 将其扁平化，然后再 push 到 newArr 中
            newArr.push.apply(newArr, demo(arr[i]))
        } else {
            // 不是数组直接 push 到 newArr 中
            newArr.push(arr[i]);
        }
    }
    return newArr
}

//数组扁平化
function flatten(arr) {
    if (!Array.isArray(arr)) {
        return arr
    }
    return arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);
}
 

// function demo(arr){
//     var newArr = [];
//     for(var i = 0; i < arr.length; i++){
//         if(Array.isArray(arr[i])){
//             newArr.push.apply(newArr, demo(arr[i]));
//         }else{
//             // console.log(arr[i]);
//             newArr.push(arr[i]);
//         }
//     }
// }


var array = ['1', '2', ['2', ['6', ['4', '9'], '8'], '5'], '3', '3', '2'];
var reduce = demo(array);
console.log(reduce);

var reduce1 = flatten(array);

console.log(reduce1);
