//利用栈进栈出的方法去做
var removeDuplicates = function (S) {
    let stack = [];
    for (let i = 0, sLen = S.length; i < sLen; i++) {
        if (stack.length && stack[stack.length - 1] === S[i]) {
            stack.pop();
        } else {
            stack.push(S[i]);
        }
    }
    return stack.join('');
};

//删除字符串中的所有相邻重复项
//思路：
//1.遍历字符串，如果当前字符与栈顶元素相同，则弹出栈顶元素
//2.否则，将当前字符入栈
//3.最后，将栈中的元素依次添加到结果字符串中
var removeDuplicates = function (S) {
    let stack = [];
    let result = '';
    for (let i = 0, sLen = S.length; i < sLen; i++) {
        if (stack.length && stack[stack.length - 1] === S[i]) {
            stack.pop();
        } else {
            stack.push(S[i]);
        }
    }
    for (let i = 0, sLen = stack.length; i < sLen; i++) {
        result += stack[i];
    }
    return result;
}

//删除字符串中的所有相邻重复项
