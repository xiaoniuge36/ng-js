
let a = 'babad'
console.log(a.length); // 5
//最长回文子串
var longestPalindrome = function (s) {
    //取长度
    let n = s.length;
    //定义空字符串
    let res = '';
    let dp = Array.from(new Array(n), () => new Array(n).fill(false));//初始化数组 //初始化二维数组
    console.log(dp);
    //遍历
    for (let i = n - 1; i >= 0; i--) {//循环字符串  倒序
        for (let j = i; j < n; j++) { //循环字符串  正序
            //dp[i][j]表示子串i～j是否是回文子串
            //回文子串必须满足s[i]，s[j]相等。并且向内扩展一个字符也相等，即dp[i+1][j-1]也是回文子串
            //j - i < 2表示子串小于等于1也是回文串
            // s[i] == s[j]表示子串i～j是回文子串
            // dp[i+1][j-1]表示子串i+1～j-1是否是回文子串
            // dp[i][j] 是 boolean值
            // console.log(dp[i + 1][j - 1]);
            console.log(i);



            console.log(j);
            console.log(dp[i][j]);
            console.log(s[i]);
            console.log(s[j]);
            console.log((j - i < 2 || dp[i + 1][j - 1]));
            dp[i][j] = s[i] == s[j] && (j - i < 2 || dp[i - 1][j + 1]);
            console.log(dp[i][j]);
            //如果dp[i][j]为true，则将子串i～j的字符串拼接到res上
            //先判断大于再判断&&
            if (dp[i][j] && j - i + 1 > res.length) {//当前回文子串比之前的大，更新最大长度
                res = s.substring(i, j + 1); // 子串i～j+1
            }
        }
    }
    return res; //返回最长回文子串
};
console.log(longestPalindrome(a));
longestPalindrome(a);