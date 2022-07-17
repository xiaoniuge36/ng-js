/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    if(!nums.length) return 0;
    let max = 1;
    nums.sort((a,b) => a-b);
    console.log(nums);
    const n = nums.length;
    const dp = new Array(n).fill(1);

    for(let i = 1; i < nums.length; i++){
        // 大于前面的
        if(nums[i] === nums[i-1] + 1) {
            dp[i] = dp[i-1] + 1;
        }else if(nums[i] === nums[i-1]){
            dp[i] = dp[i-1];
        }
        
        max = Math.max(max, dp[i]);
    }
    console.log(dp)
    return max
};

