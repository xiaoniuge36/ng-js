const combinationSum2 = (candidates, target) => {
    const res = [];
    candidates.sort((a, b) => a - b) //排序 小于零从小到大 大于零从大到小
    const dfs = (start, temp, sum) => { // start是当前选择的起点索引 temp是当前的集合 sum是当前求和
        if (sum >= target) {
            if (sum == target) {
                res.push(temp.slice()); // temp的拷贝 加入解集
            }
            return;   // 结束当前递归
        }
        for (let i = start; i < candidates.length; i++) { // 枚举当前可选的数，从start开始
            if (i > start && candidates[i] == candidates[i - 1]) continue; // 去重
            temp.push(candidates[i]);          // 选这个数
            dfs(i + 1, temp, sum + candidates[i]); // 基于此继续选择，传i，下一次就不会选到i左边的数
            temp.pop();   // 撤销选择，回到选择candidates[i]之前的状态，继续尝试选同层右边的数
        }
    
    };
  
    dfs(0, [], 0); // 最开始可选的数是从第0项开始的，传入一个空集合，sum也为0
    return res;
}

//test