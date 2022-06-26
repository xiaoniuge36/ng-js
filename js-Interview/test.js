function calculateDaysBetweenDates(startDate, endDate) {
    var millisecondsPerDay = 24 * 60 * 60 * 1000;
    return (endDate - startDate) / millisecondsPerDay;
};

// 深拷贝           
function deepCopy(obj) {
    var result = Array.isArray(obj) ? [] : {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object') {
                result[key] = deepCopy(obj[key]);
            } else {
                result[key] = obj[key];
            }
        }
    }
    return result;
}

// 浅拷贝
function shallowCopy(obj) {
    var result = Array.isArray(obj) ? [] : {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = obj[key];
        }
    }
    return result;
}

//冒泡排序
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}


//数组去重
function unique(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
}

//数组去重
function unique(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
}

//手写promise
function Promise(fn) {
    var status = 'pending';
    var value;
    var resolve = function (val) {
        if (status === 'pending') {
            status = 'resolved';
            value = val;
        }
    }
    var reject = function (val) {
        if (status === 'pending') {
            status = 'rejected';
            value = val;
        }
    }
    fn(resolve, reject);
    return {
        then: function (callback) {
            if (status === 'resolved') {
                callback(value);
            }
        }
    }
}

//手写Object.create
function ObjectCreate(obj) {
    var F = function () {};
    F.prototype = obj;
    return new F();
}


