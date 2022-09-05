console.log(aa);
//整数转罗马数字
//罗马数字包含以下七种字符: I，V，X，L，C，D 和 M。
//贪心算法
function intToRoman(num) {
    var roman = '';
    var arr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var str = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    for (var i = 0; i < arr.length; i++) { //遍历数组
        while (num >= arr[i]) { //如果num大于数组中的数字，就进行循环 循环的条件是num大于数组中的数字
            roman += str[i]; //把数组中的数字添加到roman中
            num -= arr[i]; //把数组中的数字减去num
        }
    }
    return roman;
}
//整数转罗马数字
//用Math.floor()取整数部分，用Math.floor()取小数部分
//Math.floor()向下取整，Math.ceil()向上取整
// %取余 /取商 
function intToRoman(num) {
    var Q = ["", "M", "MM", "MMM"];
    var B = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    var S = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    var G = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    return Q[Math.floor(num/1000)] + B[Math.floor(num%1000/100)] + S[Math.floor(num%100/10)] + G[num%10];
}

//罗马数字转整数
function romanToInt(s) {
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
        if (i < s.length - 1 && roman[s[i]] < roman[s[i + 1]]) {
            sum -= roman[s[i]];
        } else {
            sum += roman[s[i]];
        }
    }
    return sum;
}