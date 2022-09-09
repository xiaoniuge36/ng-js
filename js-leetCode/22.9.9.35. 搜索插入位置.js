/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) { //二分法
    for(let i =0; i<nums.length;i++){ //遍历数组
        if(nums[i]>=target){ //如果当前值大于等于目标值
            return i; //返回当前值的索引
        }
    }
    return nums.length; //如果没有找到 返回数组的长度
    
};