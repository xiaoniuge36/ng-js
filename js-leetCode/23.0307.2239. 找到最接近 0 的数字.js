// 定义函数，参数为一个整数数组，返回最接近 0 的数字。
function findClosestNumber(nums) {
  // 初始化变量 closestIndex 为数组的第一个元素的索引。
  let closestIndex = 0;
  // 遍历整个数组，从第二个元素开始。
  for (let i = 1; i < nums.length; i++) {
    // 如果当前元素距离 0 更近，更新最接近 0 的数字的索引。 随机找个值一直比较
    if (Math.abs(nums[i]) < Math.abs(nums[closestIndex])) {
      closestIndex = i;
    }
    // 如果当前元素和之前找到的最接近 0 的数字距离相等，比较它们的值。
    // 如果当前元素更大，更新最接近 0 的数字的索引。
    else if (Math.abs(nums[i]) === Math.abs(nums[closestIndex])) {
      closestIndex = nums[i] > nums[closestIndex] ? i : closestIndex;
    }
  }
  // 返回最接近 0 的数字。
  return nums[closestIndex];
}

// 定义一个整数数组。
const nums = [-5, 7, 2, 1, -4, 3, -8, -2];
// 调用函数，将结果保存到变量 result 中。
const result = findClosestNumber(nums);
// 输出结果。
console.log(result); // 输出 -1，因为它是距离 0 最近的负数，并且在与 0 距离相等的数字中是最大的一个。
