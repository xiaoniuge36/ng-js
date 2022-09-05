/**
 * @param{number[]}nums
 * @return {number}
 * @author: niuge
 */
//删除排序数组中的重复项
// var removeDuplicates = function(nums) {
//     if (nums.length === 0) {
//         return 0;
//     }
//     let i = 0;
//     for (let j = 1; j < nums.length; j++) {
//         if (nums[i] !== nums[j]) {
//             console.log(nums[i]);
//             console.log(nums[j]);
//             i++;
//             nums[i] = nums[j];
//         }
//         console.log(nums);
//         // return nums;
//     }
//     return i + 1;
// }
 console.log(removeDuplicates([1,1,2]));

 function unique(arr) {
    return [...new Set(arr)];
}
console.log(unique([1,1,2]));

function unique1(arr) {
    return arr.filter((item, index) => {
        return arr.indexOf(item) === index;
    }
    );
}
console.log(unique1([1,1,2]));

function unique2(arr){
    if(arr.length === 0){
        return 0;}
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) == -1) {
            result.push(arr[i]);
        }
    }
}
console.log(unique2([1,1,2]));




