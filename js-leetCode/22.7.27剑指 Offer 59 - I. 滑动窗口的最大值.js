// ac地址：https://leetcode-cn.com/problems/sliding-window-maximum/
// 原文地址：https://xxoo521.com/2020-03-27-max-sliding-window/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
    if (k <= 1) return nums;
    const res = [];
    for (let i = 0; i < nums.length - k + 1; ++i) {
        res.push(Math.max(...nums.slice(i, i + k)));
    }
    return res;
};

// const maxSlidingWindow = (nums, k) => {
//     const len = nums.length;
//     if (!len) return [];
//     // q存放的是nums的下标i
//     const q = [];
//     for (let i = 0; i < k; i++) {
//         // 循环比较当前元素和q队尾对应的元素大小，若当前元素大，将队尾元素出队
//         while (q.length && nums[i] >= nums[q[q.length - 1]]) {
//             q.pop();
//         }
//         q.push(i);
//     }
//     // 这时候q的队头元素对应的值，肯定是初始窗口中最大的
//     const res = [nums[q[0]]];
//     for (let i = k; i < len; i++) {
//         // 窗口开始滑动，做之前相同的操作
//         while (q.length && nums[i] >= nums[q[q.length - 1]]) {
//             q.pop();
//         }
//         q.push(i);
//         // 窗口滑动，将不应该在窗口中的元素弹出
//         while (q[0] <= i - k) q.shift();
//         // 这时候q的队头元素对应的值，肯定是当前窗口中最大的
//         res.push(nums[q[0]]);
//     }
//     return res;
// };
