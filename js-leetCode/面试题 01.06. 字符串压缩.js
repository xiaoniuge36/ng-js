//字符串压缩
/**
 * @param {string} S
 * @return {string}
 */
// var compressString = function (S) {
//   let newStr = "";
//   for (let i = 0; i < S.length; i++) {

//   }
// };

function compressString(str) {
  let compressed = ""; // 压缩后的字符串
  let count = 1; // 计数器
  for (let i = 0; i < str.length; i++) {
    // 遍历字符串
    if (str[i] === str[i + 1]) {
      // 如果当前字符与下一个字符相同
      count++; // 计数器加1
    } else {
      // 如果当前字符与下一个字符不同
      compressed += str[i] + count; // 压缩字符串加上当前字符和计数器
      count = 1; // 计数器重置为1
    }
  }
  return compressed.length < str.length ? compressed : str;
}

// 调用
console.log(compressString("abbbbbbbbaaaabbccd"));

//字符串中统计重复字符
function countDuplicates(str) {
  let count = {};
  for (let i = 0; i < str.length; i++) {
    if (count[str[i]]) {
      count[str[i]]++;
    } else {
      count[str[i]] = 1;
    }
  }
  return count;
}

//js统计数组中所有值重复出现次数
function countDuplicates(arr) {
  let count = {};
  for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]]) {
      count[arr[i]]++;
    } else {
      count[arr[i]] = 1;
    }
  }
  return count;
}
