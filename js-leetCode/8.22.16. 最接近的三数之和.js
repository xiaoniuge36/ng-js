//最接近的三数之和

//时间复杂度O(n^2)
//空间复杂度O(n)
let threeSumClosest = function(nums, target) { //nums是数组，target是目标值
    let q = [];//q是一个数组，用来存储已经遍历过的数字
    nums.sort((a, b) => a - b) //排序
    for (let i = 0; i < nums.length - 1; i++) { //遍历数组
        let l = i + 1, r = nums.length - 1 //左右指针
        while(l < r) { //左右指针不相等时
            let sum = nums[i] + nums[l] + nums[r] //三数之和
            sum >= target ? (q[sum - target] = sum, r--) : (q[target - sum] = sum, l++) //如果大于等于target，则r--，否则l++
        }
    }
    return q.find(v=>v!==undefined) //找到第一个不为undefined的数字
};
