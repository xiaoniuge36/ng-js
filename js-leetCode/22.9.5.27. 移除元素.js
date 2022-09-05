//移除元素
console.log("移除元素");
var removeElement = function(nums, val) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
};


//2

var removeElement = function(nums, val) {  //移除元素
    let i = 0;  //i指向下一个要被赋值的位置
    for(let j = 0; j < nums.length; j++){ //j指向当前要被检查的位置
        if(nums[j] != val){ //如果当前位置的值不等于val
            nums[i] = nums[j]; //把当前位置的值赋值给i指向的位置
            i++; //i指向下一个要被赋值的位置
        }
    }
};