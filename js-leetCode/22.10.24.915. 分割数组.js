/**
 * @param {number[]} nums
 * @return {number}
 */
 var partitionDisjoint = function(nums) {
    let len = nums.length; // 数组长度
    let leftMax = new Array(len); // 左边最大值
    let rightMin = new Array(len); // 右边最小值
    leftMax[0] = nums[0]; // 左边最大值
    rightMin[len - 1] = nums[len - 1]; // 右边最小值
    for (let i = 1; i < len; i++) { // 从左到右遍历
        leftMax[i] = Math.max(leftMax[i - 1], nums[i]); // 左边最大值
    }
    for (let i = len - 2; i >= 0; i--) { // 从右到左遍历
        rightMin[i] = Math.min(rightMin[i + 1], nums[i]); // 右边最小值
    }
    for (let i = 0; i < len - 1; i++) { // 遍历
        if (leftMax[i] <= rightMin[i + 1]) { // 左边最大值 <= 右边最小值
            return i + 1; // 返回下标
        }
    }
    return 0; // 都不成立返回0
};