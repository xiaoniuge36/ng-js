//[1,1,2,2]
//[1,1,2,2,3] -> [2,2,3]
var totalFruit = function(fruits) {
    let l = 0;//起始指针
    let maxLen = 0;//窗口的最大长度 其中最多包涵两种水果
    let n = 0//前一类水果的结束位置
    let arr = [fruits[l]]//水果的种类数组

    for(let r = 0; r < fruits.length; r++){//窗口的右指针不断前进
        if(!arr.includes(fruits[r])){//如果窗口中不包含 进窗口的水果
            if(arr.length <= 1){//如果只有一种水果
                arr[1] = fruits[r]//将这种水果加入arr数组
            }else{//如果有两种水果
                l = n//更新窗口的左边界
                arr[0] = fruits[r-1]//更新arr中水果的种类
                arr[1] = fruits[r]
            }
        }
       
        if(fruits[r] !== fruits[n]){//如果进来了一种新的类型的水果 更新前一种水果的位置
            n = r
        }

        maxLen = Math.max(maxLen,r-l+1)//更新滑动窗口的最大值
    }
    return maxLen

};

