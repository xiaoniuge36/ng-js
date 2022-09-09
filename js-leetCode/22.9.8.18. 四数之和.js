/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) { //回溯法
    let result = []; //结果集
    let path=[]; //路径
    nums.sort((a, b) => a - b) //排序
    function backtrace(start) { //回溯法
        if(path.length === 4) { //如果路径长度等于4
            if(path[0]+path[1]+path[2]+path[3] === target) { //如果路径和等于目标值
                result.push([...path]) //将路径复制到结果集中
            }
            return //返回
        }
        let r // 解决同一深度的 重复问题
        console.log('r', r)
        for(let i = start; i < nums.length; i++) { //遍历数组
            if(r === nums[i]) {continue} //如果当前值等于上一个值 跳过
            r = nums[i] //将当前值赋值给r 前值上面进行比较
            console.log(r);
            path.push(nums[i]) //将当前值放入路径中
            backtrace(i + 1) //递归
            path.pop() //回溯
        }
    }
    backtrace( 0) //调用函数
    return result; //返回结果集
};

// fourSum([2,2,-2,-2],0);

// console.log(fourSum([-2,-2,2,2], 0))
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum1 = function(nums, target) {
    let res=[]
    let path=[]
    nums.sort((a,b)=>a-b);
    let backtrace=(start)=>{
        if((path.length==4)){
            if(path[0]+path[1]+path[2]+path[3]==target){
                res.push([...path])
            }
            return;
        }
        for(let i=start;i<nums.length;i++){
            // console.log(nums[i]);
            // console.log(nums[i-1]);
            // console.log(start);
            console.log(i);
            //回溯法的去重 1.同一深度的去重 2.同一层的去重
            if(nums[i]==nums[i-1]&&i>start){
                console.log(111);
                continue;
            }
            path.push(nums[i])
            backtrace(i+1);
            console.log(path);
            path.pop()
        }
    }
    backtrace(0)
    return res;
};
console.log(fourSum1([-2,2,2,-2], 0))
