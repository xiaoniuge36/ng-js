/**
 * @param {number[]} arr
 * @return {number}
 */
 var maxChunksToSorted = function(arr) {
    // 贪心
    //当遍历到第i个位置时，如果可以切分为块，那前i个位置的最大值一定等于i。
    //否则，一定有比i小的数划分到后面的块，那块排序后，一定不满足升序。
    let max = 0;
    let count = 0;
    for(let i = 0; i<arr.length; i++) {
        max = Math.max(arr[i], max); //统计前i个位置的最大元素
        if(max === i) count++;
    }
    return count;
};

