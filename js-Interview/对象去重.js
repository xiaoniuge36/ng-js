// 对象键值去重,对象中的键值对是唯一的 如果有多个则后面的覆盖前面的
function deduplicateObjectKeyValue(obj) {
  const result = {};

  for (const key in obj) {
    const value = obj[key];
    if (!result.hasOwnProperty(value) || result[key] !== value) {
      result[key] = value;
    }
  }
  return result;
}

const obj = { a: 1, b: 2, c: 3, d: 2, b: 1 };

// const result = deduplicateObjectKeyValue(obj);

// console.log(result);
