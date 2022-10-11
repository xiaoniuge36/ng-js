var minSwap = function(nums1, nums2) {
    const n = nums1.length;
    const dp = Array(n).fill(0).map(i => Array(2).fill(0));
    dp[0][0] = 0;
    dp[0][1] = 1;
    for(let i = 1;i<n;i++) {
        if(nums1[i] > nums1[i-1] && nums2[i] > nums2[i-1]) {
            if(nums2[i] > nums1[i-1] && nums1[i] > nums2[i-1]) {
                dp[i][0] = Math.min(dp[i-1][0], dp[i-1][1]);
                dp[i][1] = dp[i][0]+1;
            } else {
                dp[i][0] = dp[i-1][0];
                dp[i][1] = dp[i-1][1]+1;
            }
        } else {
            dp[i][0] = dp[i-1][1]
            dp[i][1] = dp[i-1][0]+1;
        }
    }
    return Math.min(dp[n-1][0], dp[n-1][1]);
};


console.log(minSwap([1,3,5,4], [1,2,3,7]));