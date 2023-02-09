//面试题 01.05. 一次编辑
/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function (first, second) {
  if (Math.abs(first, second) > 1) {
    //长度差大于1，直接返回false 绝对值
    return false;
  }

  let edits = 0; //编辑次数
  let i = 0; //first指针
  let j = 0; //second指针
  //遍历两个字符串
  while (i < first.length && j < second.length) {
    if (first[i] != second[j]) {
      //如果不相等
      edits++; //编辑次数+1
      if (edits > 1) {
        //编辑次数大于1，直接返回false
        return false; //编辑次数大于1，直接返回false
      }
      if (first.length > second.length) {
        //如果first长度大于second
        i++; //first指针后移
      } else if (first.length < second.length) {
        //如果first长度小于second
        j++; //second指针后移
      } else {
        //如果first长度等于second
        i++; //first指针后移
        j++; //second指针后移
      }
    } else {
      //如果相等
      i++; //如果相等，两个指针都后移
      j++; //如果相等，两个指针都后移
    }
  }
};
