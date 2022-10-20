/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var kthGrammar = function(n, k) {
    if (n === 1) return 0; // 第一行只有一个0
    const mid = Math.pow(2, n - 1) / 2; // 中间位置
    if (k <= mid) { // 在左边
        return kthGrammar(n - 1, k); // 递归
    } else {
        return kthGrammar(n - 1, k - mid) ^ 1; // 递归，异或1
    }
};