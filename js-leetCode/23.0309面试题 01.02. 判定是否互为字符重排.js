/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function (s1, s2) {
  // 获取 s1 和 s2 的长度
  const slh1 = s1.length;
  const slh2 = s2.length;
  // 初始化计数器 count
  let count = 0;
  // 如果 s1 和 s2 的长度不相等，直接返回 false
  if (slh1 == slh2) {
    // 初始化哈希表 map，记录 s1 中每个字符出现的次数 去重
    const map = {};
    for (let i = 0; i < slh1; i++) {
      // const c = s1[i] 表示将字符串 s1 的第 i 个字符赋值给常量 c
      const c = s1[i];
      //在 JavaScript 中，map[c] = map[c] ? map[c] + 1 : 1; 表示将对象 map 中键为 c 的值加 1，如果该键不存在，则将该键的值设为 1。
      //具体来说，如果 map[c] 的值为真，即该键已经存在，那么将该键的值加 1；如果 map[c] 的值为假，即该键不存在，那么将该键的值设为 1。这个操作可以使用 JavaScript 中的三元运算符 condition ? value1 : value2 来实现。
      map[c] = map[c] ? map[c] + 1 : 1;
    }
    // 遍历 s2 中的每个字符，如果该字符在 map 中存在，则将计数器 count 加一，并将该字符在 map 中的出现次数减一
    for (let i = 0; i < slh2; i++) {
      const c = s2[i];
      if (map[c]) {
        count++;
        map[c]--;
      }
    }
    // 如果 count 等于 s1 的长度，说明 s2 中的字符可以通过重新排列组成 s1，返回 true；否则返回 false
    return count == slh1;
  } else {
    return false;
  }
};
