//用二分法
// 解题思路
// 分治算法思想：将原问题分解成小规模的子问题，然后根据子问题的结果构造出原问题的答案（大家了解的归并排序其实就是典型的使用分治思想）
// 简单说一下题目的意思：给你输入一个算式，你可以给它随意加括号，请你穷举出所有可能的加括号方式，并计算出对应的结果
// 举例来说：现在给出的算式是1 + 2 * 3 - 4 * 5，这个算式有几种加括号的方式？
// 因为括号可以嵌套，所以可能一时半会很难答出来，如果不让括号嵌套（即只加一层括号），有几种加括号的方式？
// 显然我们有四种加括号方式：
// (1) + (2 * 3 - 4 * 5)
// (1 + 2) * (3 - 4 * 5)
// (1 + 2 * 3) - (4 * 5)
// (1 + 2 * 3 - 4) * (5)
// 其实就是按照运算符进行分割，给每个运算符的左右两部分加括号
// 现在再细节说下上面的第3种情况：(1 + 2 * 3) - (4 * 5)
// 我们用减号-作为分隔，把原算式分解成两个算式1 + 2 * 3和4 * 5
// 分治分治，分而治之，这一步就是把原问题进行了「分」，我们现在要开始「治」了
// 1 + 2 * 3可以有两种加括号的方式，分别是：
// (1) + (2 * 3) = 7
// (1 + 2) * (3) = 9
// 我们可以假定表述成1 + 2 * 3 = [9, 7]
// 4 * 5当然只有一种加括号方式，也就是4 * 5 = [20]
// 通过上述结果推导出(1 + 2 * 3) - (4 * 5)有几种加括号方式，或者说有几种不同的结果
// 可以推导出来(1 + 2 * 3) - (4 * 5)有两种结果，分别是：
// 9 - 20 = -11
// 7 - 20 = -13
// 总结一下：先「分」后「治」，先按照运算符将原问题拆解成多个子问题，然后通过子问题的结果来合成原问题的结果
// 代码实现中加了备忘录来优化重复计算
// 参考文献：分治算法详解：表达式的不同优先级

/**
 * @param {string} expression
 * @return {number[]}
 */
 let memo = new Map();
 var diffWaysToCompute = function (expression) {
   // 避免重复计算
   if (memo.has(expression)) {
     return memo.get(expression);
   }
   let res = [];
   for (let i = 0; i < expression.length; i++) {
     let c = expression.charAt(i);
     // 扫描算式 expression 中的运算符
     if (c == "*" || c == "+" || c == "-") {
       /****** 分 ******/
       let left = diffWaysToCompute(expression.substring(0, i));
       let right = diffWaysToCompute(expression.substring(i + 1));
       /****** 治 ******/
       // 通过子问题的结果，合成原问题的结果
       for (let a of left) {
         for (let b of right) {
           switch (c) {
             case "*":
               res.push(a * b);
               break;
             case "+":
               res.push(a + b);
               break;
             case "-":
               res.push(a - b);
               break;
           }
         }
       }
     }
   }
   // base case，递归函数必须有个 base case 用来结束递归，其实这段代码就是我们分治算法的 base case，代表着你「分」到什么时候可以开始「治」
   // 如果 res 为空，说明算式是一个数字，没有运算符（因为当算式中不存在运算符的时候，就不会触发 if 语句，也就不会给res中添加任何元素）
   if (!res.length) {
     res.push(parseInt(expression));
   }
   // 将结果添加进备忘录
   memo.set(expression, res);
   return res;
 };
 
 