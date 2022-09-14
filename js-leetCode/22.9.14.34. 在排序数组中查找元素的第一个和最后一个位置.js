/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) { 
    let arr = []; //定义一个空数组
    let flag = 0; //定义一个标志位
    for (let i = 0; i < nums.length; i++) { //遍历数组
        if (nums[i] == target) { //如果数组中的某个元素与目标元素相同
            arr.push(i); //将该元素的下标存入数组
            flag = 1; //将标志位置为1
        }
    }
    if (flag == 0) { //如果标志位为0
        return [-1, -1]; //返回[-1,-1]
    }
    return [arr[0], arr[arr.length - 1]]; //返回数组的第一个元素和最后一个元素
};

searchRange([5, 7, 7, 8, 8, 10], 8);
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));

console.log(searchRange([1], 1));