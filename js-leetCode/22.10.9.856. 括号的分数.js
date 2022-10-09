var scoreOfParentheses = function(S) { // 递归
    var stack = [] // 栈
    for (var i = 0; i < S.length; i++) { // 遍历字符串
      if (S[i] === '(') stack.push('(') // 遇到左括号，入栈
      if (S[i] === ')') { // 遇到右括号
        if (stack[stack.length - 1] === '(') { // 栈顶元素为左括号
          stack.pop() // 弹出左括号
          stack.push(1) // 入栈1
        } else { // 栈顶元素为数字
          var a = stack.pop() // 弹出数字
          var temp = 0 // 临时变量
          while(a !== '(') { // 弹出数字直到遇到左括号
            temp += a // 累加数字
            a = stack.pop() // 弹出数字
          }
          stack.push(2 * temp) // 将2 * temp入栈
        }
      }
    }
    var sum = 0 // 累加变量
    stack.forEach(item => sum += item) // 累加
    return sum // 返回累加值
  }
  
