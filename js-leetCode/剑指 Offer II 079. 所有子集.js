/**
     * @param {number[]} nums
     * @return {number[][]}
     */
 var subsets = function(nums) {
    let result = [[]]
    // 每遍历一个元素，我们需要将这个元素与前面所有的元素进行拼接;
    for (let num of nums) {
        let add = []; // 此处不能直接操作result,直接操作result就成死循环了
        for (let arr of result) {
            add.push([...arr, num]); // 为了不修改到arr的原数据，我们通过拼接的方式进行
        }
        result = [...result, ...add];
    }
    return result;
};

