//Z字形变换
function convert(s, numRows) { //s为字符串，numRows为行数
    if (numRows === 1) return s; //如果行数为1，则直接返回字符串
    let arr = new Array(numRows).fill(''); //创建一个数组，长度为行数，每个元素为空字符串 
    console.log(arr); //打印数组 
    let i = 0, //i为当前行数
        j = 0, //j为当前列数
        k = 0; //k为当前字符串下标
    while (i < s.length) { //当i小于字符串长度时
        arr[j] += s[i]; //将当前字符串添加到当前行数的数组中
        if (j === 0) { //如果当前行数为0，则下一行为1
            k = 1; //k为1
        } 
        if (j === numRows - 1) { //如果当前行数为行数-1，则下一行为-1
            k = -1; //k为-1
        }
        j += k; //当前行数加上k
        i++; //当前字符串下标加1
    }
    return arr.join('');    //将数组中的元素拼接成字符串返回
}
console.log(convert('PAYPALISHIRING', 3));

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) { //s为字符串，numRows为行数
    if(numRows == 1) //如果行数为1，则直接返回字符串
        return s; //返回字符串
    let rows = new Array(numRows).fill(''); //创建一个数组，长度为行数，每个元素为空字符串 
    let loc = 0; //loc为当前字符串下标
    let down = false; //down为false，表示向下移动

    for(let c of s) { //遍历字符串
        rows[loc] += c; //将当前字符串添加到当前行数的数组中
        //关键在z最顶处和最低处转变方向
        if(loc == 0 || loc == numRows - 1){//如果当前行数为0或者行数-1，则下一行为1
            down = !down; //down为true，表示向下移动
        }  
        loc += down ? 1 : -1; //当前行数加上down为true，则下一行为1，否则为-1
    }
    return rows.join(''); //返回字符串
};

