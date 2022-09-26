var permuteUnique = function(nums) {
    const res = []  // 结果数组
    nums.sort((a, b) => a > b ? 1 : -1)   // 第一步先排序，保证i和i-1的比较有序，为了剪枝
    const l = nums.length
    const used = []     // 标记节点是不是使用过，为了剪枝，也为了循环避开自己
    const permute = (cur) => {  // DFS核心算法，cur记录当前路径
        if (cur.length == l) {  // 当前路径和数组长度相等时，已经找到叶子结点
            res.push(cur)   // 填入res
            return
        }
        for (let i = 0; i < l; i++) {   // 遍历数组，每次遍历都是从头走到尾，用used数组来过滤
            if (used[i] || (i > 0 && nums[i] == nums[i - 1] && !used[i - 1])) { 
                continue // used[i]表示当前元素已经在路径中，跳过；第二段用来剪枝，当前数组和前一位相同并且前一位没有被用过
            }
            cur.push(nums[i])   // 将当前节点放到当前路径中
            used[i] = true  // 记录当前节点已经被使用过
            permute([...cur])   // 在当前路径状态下，进行DFS
            cur.pop()   // 找完之后，回溯，将节点从路径中pop
            used[i] = false // 回溯之后当前节点使用情况记录为false
        }
        return
    }
    permute([]) // 从根节点开始DFS
    return res
};
