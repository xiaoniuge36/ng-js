/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      count += 1;
    }
  }
  return count;
};

//测试
let nums = [5, 7, 7, 8, 8, 10];
let target = 8;

console.log(search(nums, target));
