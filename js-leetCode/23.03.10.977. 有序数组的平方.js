/**
 * @param {number[]} nums
 * @return {number[]}
 */
//常规解法
var sortedSquares = function (nums) {
  let newnums = nums.map((item, index) => {
    return Math.abs(item) ** 2;
  });
  return newnums.sort((a, b) => {
    return a - b;
  });
};
//双指针解法
var sortedSquares = function (nums) {
  let n = nums.length - 1; //表示下标
  let i = 0; //左指针
  let j = n; //右指针
  let res = new Array(nums.length).fill(0); //初始化一个数组
  while (i <= j) {
    if (nums[i] ** 2 > nums[j] ** 2) {
      res[n--] = nums[i] ** 2;
      i++;
    } else {
      res[n--] = nums[j] ** 2;
      j--;
    }
  }
  return res;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
