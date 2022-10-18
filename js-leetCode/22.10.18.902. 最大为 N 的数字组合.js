//最大为N的数字组合
/**
 * @param {string[]} digits
 * @param {number} n
 * @return {number}
 */
 var atMostNGivenDigitSet = function(digits, n) {
    let nStr = n.toString(); //将数字转换为字符串
    let len = nStr.length; //获取字符串长度
    let res = 0;    //结果
    for (let i = 1; i < len; i++) { //遍历字符串长度
        res += Math.pow(digits.length, i); //计算结果
    }
    for (let i = 0; i < len; i++) { //遍历字符串长度
        let flag = false; //标记
        for (let j = 0; j < digits.length; j++) { //遍历字符串
            if (digits[j] < nStr[i]) { //如果当前字符小于字符串当前字符
                res += Math.pow(digits.length, len - i - 1);    //计算结果
            } else if (digits[j] == nStr[i]) { 
                flag = true;   //标记为true
                break;  //跳出循环
            }
        }
        if (!flag) return res; //如果标记为false，返回结果
    }
    return res + 1; //返回结果
};