//
/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function (A, m, B, n) {
  A.splice(m, A.length - m, ...B); // 从m开始删除A.length-m个元素，然后插入B
  A.sort((a, b) => a - b); // 排序
};

// 双指针
var merge = function (A, m, B, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (i >= 0 && j >= 0) {
    // 从 A 和 B 数组的末尾开始遍历
    if (A[i] > B[j]) {
      // 将较大的元素放入 A 数组的末尾
      A[k] = A[i];
      i--;
    } else {
      A[k] = B[j];
      j--;
    }
    k--;
  }
  while (j >= 0) {
    // 如果 A 数组先遍历完，则将剩下的 B 数组中的元素依次放入 A 数组的前面
    A[k] = B[j];
    j--;
    k--;
  }
};
