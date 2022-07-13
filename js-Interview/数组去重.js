//数组去重
function unique(arr) {
    var result = [],
        hash = {};
    for (var i = 0, elem;
        (elem = arr[i]) != null; i++) {
        if (!hash[elem]) {
            result.push(elem);
            hash[elem] = true;
        }
    }
    return result;
}

//数组去重
function uniqueArr(arr) {
    return [...new Set(arr)];
}

function unique(arr){
    return [...new Set(arr)];
}

//数组去重
function unique(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) == -1) {
            result.push(arr[i]);
        }
    }
}
// function unique(arr){
//     var result = [];
//     for(let i =0;i<arr.length;i++){
//         if(result.indexOf)
//     }
// }
//数组去重
function unique(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) == -1) {
            result.push(arr[i]);
        }
    }
    return result;
}

//数组扁平化
function flatten(arr) {
    return arr.reduce((prev, curr) => {
        return prev.concat(curr);
    }, []);
}

function flatten(arr) {
    return arr.reduce((prev, curr) => {
        return prev.concat(curr);
        //把数组中的元素放入prev中  prev是一个数组  curr是一个数组  把curr中的元素放入prev中    prev是一个数组))
    }, []);

}


// console.log([].indexOf(1));

function unique4(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) == -1) {
            result.push(arr[i]);
        }
        console.log(result);
        return result;
    }
}

// console.log(unique4([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//定义一个有重复数据的数组
let arr = [1,2,1,'j',5,'1',true,2,5,'h',true];
//去重方法
function duplicateRemoval(arr) {
	//定义接收去重后结果的新数组
    let newArr = [];
    for(let i = 0;i<arr.length;i++){
    	//判断新数组中是否存在当前索引为i的原数组元素
        if (newArr.indexOf(arr[i])===-1) {
        	//如果不存在，则将其放到新数组的最后位置
            newArr.push(arr[i]);
        }
    }
    //返回去重后的新数组
    return newArr;
}
//打印方法执行返回结果
console.log(duplicateRemoval(arr));
