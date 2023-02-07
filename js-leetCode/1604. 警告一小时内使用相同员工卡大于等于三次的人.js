/**
import { debounce } from 'lodash';
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
var alertNames = function (keyName, keyTime) {
  // 创建一个map，key为员工名，value为时间数组
  const timeMap = new Map();

  for (let i = 0; i < keyName.length; i++) {
    // 遍历员工名和时间数组，将员工名作为key，时间数组作为value存入map
    if (!timeMap.has(keyName[i])) timeMap.set(keyName[i], []); // 如果map中没有该员工名，就创建一个空数组，将时间存入数组
    timeMap.get(keyName[i]).push(keyTime[i].replace(":", "")); // 如果map中有该员工名，就将时间存入数组
  }

  const result = []; // 结果数组
  const keySet = timeMap.keys(); // 获取map的key集合

  for (let name of keySet) {
    // 遍历map的key集合
    let timeArr = timeMap.get(name).sort((a, b) => a - b); // 获取员工名对应的时间数组，并排序
    for (let i = 2; i < timeArr.length; i++) {
      // 遍历时间数组，如果相邻两个时间差小于等于100，就将员工名存入结果数组
      if (timeArr[i] - timeArr[i - 2] <= 100) {
        result.push(name);
        break; // 跳出循环
      }
    }
  }
  return result.sort(); // 将结果数组排序
};
