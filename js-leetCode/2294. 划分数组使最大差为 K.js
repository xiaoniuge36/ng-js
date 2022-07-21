//贪心（局部最优解）加排序解题

var partitionArray = function (nums, k) {
    nums.sort((a, b) => a - b);
    let ans = 1;
    let min = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] - min <= k) {
            continue
        } else {
            min = nums[i];
            ans++
        }
    }
    return ans;
};
