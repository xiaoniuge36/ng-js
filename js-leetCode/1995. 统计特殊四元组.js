var countQuadruplets = function(nums) {
    const len = nums.length
    let ans = 0
    const hash = new Map()
    //外循环
    for(let c = len - 2; c >= 2; c--){
        hash[nums[c+1]] = (hash[nums[c+1]] || 0) + 1
        //内部双循环
        for(let a = 0; a < c; a++){
            for(let b = a + 1; b < c; b++){
                ans += hash[nums[a]+nums[b]+nums[c]] || 0
            }
        }
    }
    return ans
};

