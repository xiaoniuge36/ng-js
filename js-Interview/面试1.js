function compress(collection = []) {
  // 如果集合数组为空，则返回一个空数组
  if (collection.length === 0) {
    return [];
  }
  // 获取对象的所有键
  const keys = Object.keys(collection[0]);
  // console.log(keys);
  // 使用 map 方法将对象转换为值数组，并添加到结果数组中
  const result = [
    // keys, keys.map((key) => obj[key])
    ...collection.map((obj) => keys.map((key) => console.log(obj[key]))),
  ];
  return result;
}

let a = [
  {
    name: "zhangsan",
    age: 20,
    sex: "male",
  },
  {
    name: "lisi",
    age: 19,
    sex: "female",
  },
  {
    name: "wangwu",
    age: 23,
    sex: "male",
  },
];

console.log(compress(a));
