/**
 * @param {number[]} nums
 * @return {number}
 */
 var arrayPairSum = function(nums) {
    nums.sort((a, b) => a - b);
    let length = nums.length;
  
    let ans = 0;
  
    for (let i = 0; i < length; i = i + 2) {
      ans += nums[i];
    }
  
    return ans;
  };
  