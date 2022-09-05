/**
     * @param {number[]} nums
     * @return {number[][]}
     */
 var subsets = function(nums) {
    let result = [[]]
    // 每遍历一个元素，我们需要将这个元素与前面所有的元素进行拼接;
    for (let num of nums) {
        let add = []; // 此处不能直接操作result,直接操作result就成死循环了
        for (let arr of result) {
            add.push([...arr, num]); // 为了不修改到arr的原数据，我们通过拼接的方式进行
        }
        result = [...result, ...add];
    }
    return result;
};

// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
//  var subsets = function (nums) {
//     let res = [];
//     // 记录走过的路径;
//     let track = [];
//     const backtrack = (nums, start, track) => {
//       res.push([...track]);
//       // 注意 i 从 start 开始递增
//       for (let i = start; i < nums.length; i++) {
//         // 做选择
//         track.push(nums[i]);
//         // 回溯 基于选这个数，继续递归，传入的是i+1，不是start+1
//         backtrack(nums, i + 1, track);
//         // 撤销选择
//         track.pop();
//       }
//     };
//     backtrack(nums, 0, track);
//     return res;
//   };
  
// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
//  var subsets = function (nums) {
//     const res = [];
  
//     const dfs = (index, list) => {
//       if (index == nums.length) {
//         // 指针越界
//         res.push(list.slice()); // 加入解集
//         return; // 结束当前的递归
//       }
//       list.push(nums[index]); // 选择这个数
//       dfs(index + 1, list); // 基于该选择，继续往下递归，考察下一个数
//       list.pop(); // 上面的递归结束，撤销该选择
//       dfs(index + 1, list); // 不选这个数，继续往下递归，考察下一个数
//     };
  
//     dfs(0, []);
//     return res;
//   };
  

//aa

  