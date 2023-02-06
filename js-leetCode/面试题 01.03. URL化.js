//面试题 01.03. URL化
/**
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
var replaceSpaces = function (S, length) {
  let newStr;
  newStr = S.slice(0, length);
  newStr = newStr.replace(/\s/g, "%20");
  return newStr;
};

// 用遍历的方法
var replaceSpaces = function (S, length) {
  let newStr = "";
  for (let i = 0; i < length; i++) {
    if (S[i] === " ") {
      newStr += "%20";
    } else {
      newStr += S[i];
    }
  }
  return newStr;
};
