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


