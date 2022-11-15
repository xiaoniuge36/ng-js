
// let a = [[1,3],[2,2],[3,1]];
// a.sort((a,b)=>b[1]-a[1])
// console.log(a.sort((a,b)=>b[1]-a[1]));
// for (let [count,size] of a) {
//     console.log(count,size);
// }

/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a,b)=>b[1]-a[1]); // 降序排列
    let res = 0; // 最大单元数
    for (let [count,size] of boxTypes) { // 遍历每个箱子
        if (count<=truckSize) { // 如果箱子数量小于等于卡车容量
            res += count*size; // 最大单元数增加
            truckSize -= count; // 卡车容量减少
        } else {
            res += truckSize*size; // 最大单元数增加
            break;
        }
    }
    console.log(res);
    return res;
};

maximumUnits([[5,10],[2,5],[4,7],[3,9]],10);