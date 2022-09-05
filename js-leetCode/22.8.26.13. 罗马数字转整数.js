/**
 * @param {string} s
 * @return {number}
 */
//用Math进行计算
 var romanToInt = function(s) {
    var roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    var sum = 0;
    for (var i = 0; i < s.length; i++) {
        console.log(roman[s[i]]);
        console.log(roman[s[i+1]]);
        if (i < s.length - 1 && roman[s[i]] < roman[s[i + 1]]) {
            // sum -= roman[s[i]];
            sum = sum - roman[s[i]];
            //相当于sum = sum - roman[s[i]]
        } else {
            sum += roman[s[i]];
            //相当于sum = sum + roman[s[i]]
        }
    }
    return sum;
};

romanToInt('MCMXCIV');
//思路：
//1. 先把罗马数字转换成数字，再转换成整数

var romanToInt = function(s) {
    let map = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]]);
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        let left = map.get(s[i]); //获取左边的值
        let right = map.get(s[i + 1]); //获取右边的值 
        res += left < right ? -left : left //如果left小于right，则res减去left，否则res加上left
    }
    return res
};


