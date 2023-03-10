///////////README///////////

/**
 * 请在以下答题区 TODO 注释部分完成代码编写。
 * 请仔细阅读 example 和单元测试，这将帮助你更好地理解题目
 *
 * 远程面试：
 * 1. 写完之后可直接执行，在输出中查看运行结果
 * 2. 有任何疑问或完成答题，可通过右侧聊天通知面试官
 *
 * 线下面试：
 * 1. 使用 node 跑当前文件
 * > node compress-collection.js
 * 2. 有任何疑问或完成答题，及时找面试官
 *
 * 要求：
 * 1. 命名规范
 * 2. 代码格式规范
 * 3. 跑通所有单元测试
 */

///////////答题区///////////

/**
 * 将集合进行压缩，第一行保存列名，后面的每一行仅保存相应的值
 *
 * @example
 * 将集合
 * [
 *     {
 *         name: 'zhangsan',
 *         age: 20,
 *         sex: 'male'
 *     },
 *     {
 *         name: 'lisi',
 *         age: 19,
 *         sex: 'female'
 *     },
 *     {
 *         name: 'wangwu',
 *         age: 23,
 *         sex: 'male'
 *     }
 * ]
 * 转换成
 * [
 *     ['name', 'age', 'sex'],
 *     ['zhangsan', 20, 'male'],
 *     ['lisi', 19, 'female'],
 *     ['wangwu', 23, 'male']
 * ]
 * @param {Array<object>} collection 待压缩的集合
 * @return {Array<Array<any>>} 压缩后的集合
 */
function compress(collection = []) {
  // TODO: 请你在此处编写代码，其他任何地方都无需修改
}

///////////单元测试///////////

const assert = require("assert");

// 测试用例1
const result1 = compress([
  { name: "zs", sex: "m", age: 10 },
  { name: "ls", sex: "f", age: 18 },
  { name: "ww", sex: "m", age: 17 },
]);

assert.equal(result1.length, 4);
assert.equal(result1[0].length, 3);
assert.deepEqual(result1[0], ["name", "sex", "age"]);
assert.deepEqual(result1[1], ["zs", "m", 10]);
assert.deepEqual(result1[3], ["ww", "m", 17]);

console.log("测试用例1已通过！");

// 测试用例2
const result2 = compress([
  { name: "zs", sex: "m", age: 10 },
  { name: "ls", age: 18, sex: "f" },
  { name: "ww", age: 17, sex: "m" },
]);

assert.equal(result2.length, 4);
assert.equal(result2[0].length, 3);
assert.deepEqual(result2[0], ["name", "sex", "age"]);
assert.deepEqual(result2[1], ["zs", "m", 10]);
assert.deepEqual(result2[2], ["ls", "f", 18]);
assert.deepEqual(result2[3], ["ww", "m", 17]);

console.log("测试用例2已通过！");

// 测试用例3
const result3 = compress([
  { x1: 1, x2: 2, x3: 3, x4: 4, x5: 5, x6: 6, x7: 7, x8: 8, x9: 9 },
]);

assert.equal(result3.length, 2);
assert.equal(result3[0].length, 9);
assert.deepEqual(result3[0], [
  "x1",
  "x2",
  "x3",
  "x4",
  "x5",
  "x6",
  "x7",
  "x8",
  "x9",
]);
assert.deepEqual(result3[1], [1, 2, 3, 4, 5, 6, 7, 8, 9]);

console.log("测试用例3已通过！");

console.log("恭喜，所有单元测试已通过！");
