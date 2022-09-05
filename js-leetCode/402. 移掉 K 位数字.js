var removeKdigits = function (num, k) {
    const stack = [];
    for (let i = 0; i < num.length; i++) {
      const c = num[i];
      while (k > 0 && stack.length && stack[stack.length - 1] > c) {
        stack.pop();
        k--;
      }
      if (c != '0' || stack.length != 0) {
        stack.push(c);
      }
    }
    while (k > 0) {
      stack.pop();
      k--;
    }
    return stack.length == 0 ? "0" : stack.join('');
  };
  
  //总结 shift（删头） unshift（加头） push（加尾） pop（删尾）

  //总结：
    //1. 可以用一个栈来解决，栈的操作是push，pop，shift，unshift
    //2. 可以用一个数组来解决，数组的操作是push，pop，shift，unshift

//shift 

  