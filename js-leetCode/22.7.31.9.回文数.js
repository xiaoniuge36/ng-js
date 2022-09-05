/**
 * @param {number} x
 * @return {boolean}
 */
// 解法二：双指针遍历比较法
var isPalindrome = function(x) {
    let temp = x.toString()
    const n = Math.floor(temp.length / 2)
    for(let i = 0; i < n; i++){
        if(temp[i] !== temp[temp.length-i-1]) return false
    }
    return true
};

