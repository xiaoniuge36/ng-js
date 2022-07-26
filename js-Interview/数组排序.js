//sort排序
const arr = [3,2,4,1,4];
arr.sort((a,b)=>a-b);
//<0 升序，>0 降序
console.log(arr);
//reverse反转
const arr2 = [3,2,4,1,4];
arr2.reverse();
console.log(arr2);
//slice切割
const arr3 = [3,2,4,1,4];
const arr4 = arr3.slice(0,3);
console.log(arr4);
//splice删除
const arr5 = [3,2,4,1,4];
const arr6 = arr5.splice(0,3);
console.log(arr6);
//concat连接
const arr7 = [3,2,4,1,4];
const arr8 = arr7.concat(arr6);
console.log(arr8);
//indexOf查找
const arr9 = [3,2,4,1,4];
const arr10 = arr9.indexOf(4);
console.log(arr10);
//join连接
const arr11 = [3,2,4,1,4];
const arr12 = arr11.join('');
console.log(arr12);
//map遍历 map是一个新数组 不会改变原数组 会返回一个新数组 不会改变原数组    
const arr13 = [3,2,4,1,4];
const arr14 = arr13.map(item=>item*2);
console.log(arr14);
//filter过滤 返回符合条件的数组 不符合条件的数组 可以用来删除 或者替换 不符合条件的数组 可以用来删除 或者替换
const arr15 = [3,2,4,1,4];
const arr16 = arr15.filter(item=>item>2);
console.log(arr16);
//reduce求和升序从0开始 
const arr17 = [3,2,4,1,4];
const arr18 = arr17.reduce((a,b)=>a+b);
console.log(arr18);
//reduceRight求和降序从后面开始
const arr19 = [3,2,4,1,4];
const arr20 = arr19.reduceRight((a,b)=>a+b);
console.log(arr20);
//every遍历数组中每一个元素是否能通过条件的测试返回bool值
const arr21 = [3,2,4,1,4];
const arr22 = arr21.every(item=>item>2);
console.log(arr22);
//some遍历数组中有一个元素是否能通过条件的测试返回bool值
const arr23 = [3,2,4,1,4];
const arr24 = arr23.some(item=>item>2);
console.log(arr24);
//forEach遍历 每一个元素都执行一次函数 返回undefined 不返回值 
// 不能通过break停止遍历 不能通过return停止遍历 不能通过continue停止遍历 不能通过throw停止遍历   
const arr25 = [3,2,4,1,4];
arr25.forEach(item=>{
    console.log(item);
}
);
//冒泡排序
function bubbleSort(arr) {
    let len = arr.length
    for (let i = 0; i < len - 1; i++) {
      // 从第一个元素开始，比较相邻的两个元素，前者大就交换位置
      for (let j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          let num = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = num
        }
      }
      // 每次遍历结束，都能找到一个最大值，放在数组最后
    }
    return arr
  }
  
  //测试
  console.log(bubbleSort([2, 3, 1, 5, 4])) // [1, 2, 3, 4, 5]
//冒泡排序
function bubbleSort(arr) {
    let len = arr.length
    for (let i = 0; i < len - 1; i++) {
      // 从第一个元素开始，比较相邻的两个元素，前者大就交换位置
      for (let j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          let num = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = num
        }
      }
      // 每次遍历结束，都能找到一个最大值，放在数组最后
    }
    return arr
  }

  function bubbleSort(arr) {
    let len = arr.length;
    for(let i=0;i<len;i++){
        for(let j=0;j<len-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

}

//while循环
let i = 0;
while(i<10){
    console.log(i);
    i++;
}
//do while循环
var b = 0;
do{
    console.log(i);
    i++;
}
while(i<10);
//for循环
for(let i=0;i<10;i++){
    console.log(i);
}
//for in循环  
let obj = {
    name:'张三',
    age:18
}
for(let key in obj){
    console.log(key);
}
//for of循环
let arr1 = [1,2,3,4,5];
for(let item of arr1){
    console.log(item);
}
//for循环
for(let i=0;i<10;i++){
    console.log(i);
}

map