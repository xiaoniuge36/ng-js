/**
 * @param {number} n
 * @return {number}
 */
 var soupServings = function(n) {
    if (n > 4800) return 1;
    let memo = new Map();
    let dp = (a, b) => {
        if (a <= 0 && b <= 0) return 0.5;
        if (a <= 0) return 1;
        if (b <= 0) return 0;
        let key = a + '#' + b;
        if (memo.has(key)) return memo.get(key);
        let res = 0.25 * (dp(a - 100, b) + dp(a - 75, b - 25) + dp(a - 50, b - 50) + dp(a - 25, b - 75));
        memo.set(key, res);
        return res;
    }
    return dp(n, n);
};