//数组总和
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

//回溯法
 var combinationSum = function(candidates, target) { //回溯法
    let res = [] //结果集
    let path = [] //路径
    candidates.sort((a,b) => a-b) //排序 小于零从小到大 大于零从大到小
    function dfs(target, start) { //target目标值 start开始索引
        if(target < 0) return //如果目标值小于0 直接返回
        if(target === 0) { //如果目标值等于0
            res.push(path.slice()) //将路径复制到结果集中 浅拷贝
            return //返回
        }
        for(let i = start; i < candidates.length; i++) { //遍历数组
            path.push(candidates[i]) //将当前值放入路径中
            dfs(target - candidates[i], i) //递归
            path.pop() //回溯
        }
    }
    dfs(target, 0) //调用函数
    return res //返回结果集
};


const combinationSum = (candidates, target) => {
    const res = [];
    const dfs = (start, temp, sum) => { // start是当前选择的起点索引 temp是当前的集合 sum是当前求和
      if (sum >= target) {
        if (sum == target) {
          res.push(temp.slice()); // temp的拷贝 加入解集
        }
        return;   // 结束当前递归
      }
      for (let i = start; i < candidates.length; i++) { // 枚举当前可选的数，从start开始
        temp.push(candidates[i]);          // 选这个数
        dfs(i, temp, sum + candidates[i]); // 基于此继续选择，传i，下一次就不会选到i左边的数
        temp.pop();   // 撤销选择，回到选择candidates[i]之前的状态，继续尝试选同层右边的数
      }
    };
    dfs(0, [], 0); // 最开始可选的数是从第0项开始的，传入一个空集合，sum也为0
    return res;
  };