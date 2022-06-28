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

//数组去重
function unique(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) == -1) {
            result.push(arr[i]);
        }
    }
}
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

