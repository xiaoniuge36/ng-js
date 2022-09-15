var divide = function(a, b) {
    const INT_MIN = -Math.pow(2, 31)
    const INT_MAX = Math.pow(2, 31) - 1

    if (a == INT_MIN && b == -1) return INT_MAX

    let res = 0

    // 处理边界，防止转正数溢出
    // 除数绝对值最大，结果必为 0 或 1
    if (b == INT_MIN) {
        return a == b? 1 : 0;
    }

    // 被除数先减去一个除数
    if (a == INT_MIN) {
        a -= -Math.abs(b);
        res += 1;
    }

    const sign = (a > 0) ^ (b > 0) ? -1 : 1
    a = Math.abs(a)
    b = Math.abs(b)

    for (let x = 31; x >= 0; x--) {
        if ((a >>> x) - b >= 0) {
            a = a - (b << x)
            // 代码优化：这里控制 res 大于等于 INT_MAX
            if (res > INT_MAX - (1 << x)) {
                return INT_MIN;
            }
            res = res + (1 << x)
        }
    }
    if (res == -2147483648) return -2147483648
    // bug 修复：因为不能使用乘号，所以将乘号换成三目运算符
    return sign == 1 ? res : -res
};

// << 左边移 乘法
// >> 右边移 除法
// >>> 无符号右移
