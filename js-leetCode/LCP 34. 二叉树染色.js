var maxValue = function (root, k) {
    let r_dp = dynamic(root, k);
    // 返回最大值
    return r_dp.reduce((a,b)=>a>b?a:b);
    function dynamic(root, k) {
        let dp = new Array(k + 1).fill(0);
        if (!root) {
            return dp;
        }
        let l_dp = dynamic(root.left, k);
        let r_dp = dynamic(root.right, k);
        // 不涂色
        let l_max = -Infinity, r_max = -Infinity;
        for (let i = 0; i <= k; i++) {
            // 左右子树最大值
            l_max = Math.max(l_max, l_dp[i]);
            r_max = Math.max(r_max, r_dp[i]);
        }
        dp[0] = l_max + r_max;
        // 涂色
        for (let i = 1; i <= k; i++) {
            for (let j = 0; j < i; j++) {
                // 左右子树分配 涂k-1个
                dp[i] = Math.max(dp[i], l_dp[j] + r_dp[i - 1 - j] + root.val)
            }
        }
        return dp;
    }
};
