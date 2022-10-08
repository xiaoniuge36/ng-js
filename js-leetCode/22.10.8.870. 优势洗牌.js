var advantageCount = function(A, B) {
    //排序
    A.sort((a,b)=>a-b);
    const getMinLargeNum = function(num){
        for(let i=0;i<A.length;i++){
            //找到第一个比num大的数，返回
            if(num<A[i]){
                return i;
            }
        }
        //找不到，取第一个，因为第一个是最小的，是下等马
        return 0;
    }
    let ans = [];
    for(let i=0;i<B.length;i++){
        let idx = getMinLargeNum(B[i]);
        ans.push(A[idx]);
        A.splice(idx,1);
    }
    return ans;
};

console.log(advantageCount([2,7,11,15],[1,10,4,11]));