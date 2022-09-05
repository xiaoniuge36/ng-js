let abc = 'asdfvfvevqwd'

var lengthOfLongestSubstring = function(s) {
    let res = 0, temp = []
    for (let i=0;i<s.length;i++) {
        if (temp.indexOf(s[i]) == -1) { //数组中无被遍历的值
            temp.push(s[i]) //将不重复的值去除
        } else {
            temp.shift() //因为有重复值出现，去除第一个元素
            i-- //控制i的值，将刚才重复的值重新压入数组
            continue    //不再进行res的赋值
        }
        res = Math.max(res, temp.length)    //Math.max(a, b)选出两个值中较大的那个值
    }
    return res
};

