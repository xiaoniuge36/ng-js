function removeDuplicates(nums) {
  if (nums.length === 0) return 0; // 特判空数组

  let i = 0; // 慢指针
  for (let j = 1; j < nums.length; j++) {
    // 快指针
    if (nums[j] !== nums[i]) {
      // 如果快指针指向的元素不等于慢指针指向的元素
      nums[++i] = nums[j]; // 慢指针向前移动一位，然后把快指针指向的元素赋值给慢指针指向的元素
    }
  }
  return i + 1; // 返回慢指针的下标 + 1
}

// 测试用例
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
removeDuplicates(nums);
