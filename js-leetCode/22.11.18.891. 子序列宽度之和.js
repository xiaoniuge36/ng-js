/**
 * @param {number[]} nums
 * @return {number}
 */
 var sumSubseqWidths = function(nums) {
    let mod = 1e9 + 7; // 10的9次方+7
    let len = nums.length; // 数组长度
    let res = 0; // 结果
    let pow = 1;  
    nums.sort((a, b) => a - b); // 排序 从小到大
    for (let i = 0; i < len; i++) { // 循环数组
        res = (res + (nums[i] - nums[len - i - 1]) * pow) % mod; // 求和
        pow = pow * 2 % mod; // 求幂
    }
    return res; // 返回结果
};