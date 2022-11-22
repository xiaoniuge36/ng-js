/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var nthMagicalNumber = function (n, a, b) {
    // 假设a<b,如果一个数可以被a或b整除，那么第n个这样的数 最大就是a的n倍了，也就是n*a
    // 这样我们就确定了答案的范围，也就是[1,n*Math.min(a,b)]之间

    // 然后，可以再思考一个问题：1~n中有多少个数可以被a或b整除？
    // 首先可以知道，有n/a个数都可以被a整除，同理，有n/b个数可以被b整除
    // 其中有一些数字计算重复了，这些数是a和b的最小公倍数，需要减掉，所以就得到了结果
    // n/a + n/b - n / lcm(a,b)

    // 假设函数f(x) 表示1~x中有多少个数字可以被a或b整除。
    // 那么，求被a b整除的第n个数，就转换成了"求1到几之间，有n个数字可以被a、b整除"
    // 又因为 随着x的增加 f(x)也会增加,即函数是单调递增的，所以只需要找到最小的x即可
    // 那么，使用二分就可以快速找到x


    // 两个数的最大公约数
    const gcd = (a1, b1) => {
        let a = BigInt(a1), b = BigInt(b1)
        return b ? gcd(b, a % b) : a
    }
    // 两个数的最小公倍数
    const lcm = (a, b) => BigInt(a) * BigInt(b) / gcd(a, b)
    // 在1到x1之间有几个数可以被a，b整除
    const f = (x1, a1, b1) => {
        let a = BigInt(a1), b = BigInt(b1), x = BigInt(x1)
        return x / a + x / b - x / lcm(a, b)
    }
    let l = 1n, r = BigInt(Math.min(a, b) * n)
    while (l < r) {
        let mid = l + r >> 1n
        if (f(mid, a, b) < BigInt(n)) l = mid + 1n
        else r = mid
    }
    return l % BigInt(1e9 + 7)
};
