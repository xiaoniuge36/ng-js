//最长有效括号
//给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。
//示例 1:
//输入: "(()"
//输出: 2
//解释: 最长有效括号子串为 "()"
//示例 2:
//输入: ")()())"
//输出: 4
//解释: 最长有效括号子串为 "()()"
/**
 * @param {string} s
 * @return {number}
 * 思路：动态规划
 * 1.定义状态：dp[i]表示以s[i]结尾的最长有效括号的长度
 * 2.状态转移方程：dp[i] = dp[i-2] + 2
 * 3.初始状态：dp[0] = 0
 * 4.返回值：max(dp[i])
 * 5.时间复杂度：O(n)
 * 6.空间复杂度：O(n)
 * 7.边界条件：s.length < 2
 * 8.注意：dp[i] = dp[i-1] + 2 + dp[i-dp[i-1]-2]
    */
var longestValidParentheses = function(s) {
    if (s.length < 2) return 0; //边界条件
    let dp = new Array(s.length).fill(0); //定义状态
    // console.log(dp)
    let max = 0; //返回值
    for (let i = 0; i < s.length; i++) { //状态转移方程 
        if (s[i] === ')') { //如果是右括号
            if (s[i-1] === '(') { //如果前一个是左括号
                dp[i] = (i >= 2 ? dp[i-2] : 0) + 2; //状态转移方程 
            } else if (i - dp[i-1] > 0 && s[i-dp[i-1]-1] === '(') { //如果前一个是右括号
                dp[i] = dp[i-1] + 2 + (i - dp[i-1] >= 2 ? dp[i-dp[i-1]-2] : 0); //状态转移方程
            }
        }
        // console.log(max);
        max = Math.max(max, dp[i]); //返回值
        //用这个方法有个问题重复赋值的时候后面会覆盖前面的值 导致有可能不是最大值
        //max = dp[i];
    }
    console.log(max);
    return max; //返回值
};

longestValidParentheses('(()())');