/**
 * @param {number} k
 * @return {number}
 */
 /* 升序的第k个数
 可用最小堆 
 但是固定因子是什么鬼,
 错了这个是一个函数f(n)求通项公式呢
f(n)和f(n+1)的关系，  不太好找。
按照题意这个数必然可以拆解成 3^n * 5^m * 7^l
记录 m l n , 下一个数必然是 m l n 其中有个数+1


 */
var getKthMagicNumber = function(k) {
    /* k3, k5, k7 分别代表 3 5 7 因子在之前的数里面出现的最多的次数
    也就是该因子 已经出现了多少次
    当前数如果 是之前的某个数乘以该因子 则该因子的指针进一
     */
    let [k3,k5,k7]= [0,0,0], fn = [1];

    while(fn.length < k){
        // let next = Math.pow(3,k3)* Math.pow(5, k5)*Math.pow() * 3;
        let next = fn[k3]* 3 ;
        next  = Math.min(next,fn[k5]* 5 )
        next  = Math.min(next,fn[k7]* 7 )
        if(fn[k3] * 3 === next){ k3++}
        if(fn[k5] * 5 === next){ k5++}
        if(fn[k7] * 7 === next){ k7++}
        fn.push(next)
    }
    return fn[k-1]
};

