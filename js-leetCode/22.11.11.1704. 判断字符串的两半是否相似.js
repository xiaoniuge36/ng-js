/**
 * @param {string} s
 * @return {boolean}
 */
 var halvesAreAlike = function(s) {
    const n = s.length;//长度
    const a = s.slice(0, n / 2); //前半部分
    const b = s.slice(n / 2); //后半部分
    const isVowel = ch => 'aeiouAEIOU'.includes(ch); //判断是否是元音
    let cnt = 0; //计数
    for (const ch of a) { //遍历前半部分
        if (isVowel(ch)) { //如果是元音
            cnt++; //计数+1
        }
    }
    for (const ch of b) { //遍历后半部分
        if (isVowel(ch)) { //如果是元音
            cnt--; //计数-1
        }
    }
    return cnt === 0; //如果计数为0，返回true
};