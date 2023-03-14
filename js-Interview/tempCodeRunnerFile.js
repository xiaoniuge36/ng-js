// 对象键值和键名去重
function deduplicateObjectKeyValue(obj) {
  const result = {};

  for (const key in obj) {
    const value = obj[key];
    // console.log(key, value);
    // console.log(result.hasOwnProperty(value));
    if (!result.hasOwnProperty(value) ) {
      result[key] = value;
      console.log(result[key]);
    }
  }
  return result;
}

const obj = { a: 1, b: 2, c: 3, d: 2, b: 1 };

const result = deduplicateObjectKeyValue(obj);

console.log(result);
