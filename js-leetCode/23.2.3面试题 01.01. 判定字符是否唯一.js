//面试题 01.01. 判定字符是否唯一
var isUnique = function (astr) {
  const len = astr.length;
  if (len < 0 || len > 100) return false;

  for (let i = 0; i < len; i++) {
    if (astr.indexOf(astr[i]) !== astr.lastIndexOf(astr[i])) {
      return false;
    }
  }
  return true;
};

//用map实现
function isUnique(str) {
  let charMap = {};
  for (let i = 0; i < str.length; i++) {
    if (charMap[str[i]]) {
      return false;
    }
    charMap[str[i]] = true;
  }
  return true;
}

//用set实现
function isUnique(str) {
  let charSet = new Set();
  for (let i = 0; i < str.length; i++) {
    if (charSet.has(str[i])) {
      return false;
    }
    charSet.add(str[i]);
  }
  return true;
}

//用数组实现
function isUnique(str) {
  let charArr = [];
  for (let i = 0; i < str.length; i++) {
    if (charArr.includes(str[i])) {
      return false;
    }
    charArr.push(str[i]);
  }
  return true;
}

//用位运算实现
function isUnique(str) {
  let bitMap = 0;
  for (let i = 0; i < str.length; i++) {
    let bit = 1 << (str[i].charCodeAt() - 97);
    if (bitMap & bit) {
      return false;
    }
    bitMap |= bit;
  }
  return true;
}
