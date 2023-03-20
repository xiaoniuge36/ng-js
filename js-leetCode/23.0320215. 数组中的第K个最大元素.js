/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 1. 排序
var findKthLargest = function (nums, k) {
  nums.sort((a, b) => a - b); //  升序
  return nums[nums.length - k];
};

// 2. 快速选择o(n) 排序
// 入口函数，用于调用 quickSelect 函数查找第 k 大元素
function findKthLargest(nums, k) {
  return quickSelect(nums, 0, nums.length - 1, k);
}

// 核心函数，用于实现快速选择算法
function quickSelect(nums, left, right, k) {
  // 如果左右边界相等，说明已经找到第 k 大元素，直接返回该元素即可
  if (left === right) {
    return nums[left];
  }

  // 选择一个随机的枢纽元素 pivot
  const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
  const pivot = nums[pivotIndex];

  // 初始化左右指针 i 和 j
  let i = left;
  let j = right;

  // 将数组中的元素根据与枢纽元素的大小关系分为三部分：小于枢纽元素的元素、等于枢纽元素的元素和大于枢纽元素的元素
  while (i <= j) {
    while (nums[i] > pivot) {
      i++;
    }
    while (nums[j] < pivot) {
      j--;
    }
    if (i <= j) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j--;
    }
  }

  // 判断第 k 大元素在哪一部分中，如果在大于枢纽元素的部分，就在该部分中递归查找；如果在小于枢纽元素的部分，就在该部分中递归查找；如果在等于枢纽元素的部分，直接返回该元素
  if (left + k - 1 <= j) {
    return quickSelect(nums, left, j, k);
  } else if (left + k - 1 >= i) {
    return quickSelect(nums, i, right, k - (i - left));
  } else {
    return nums[j + 1];
  }
}
