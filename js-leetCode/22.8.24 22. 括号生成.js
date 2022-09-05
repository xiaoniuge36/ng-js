/**
 * @param {number} n
 * @return {string[]}
 */
// 思路： 回溯法    
// 时间复杂度： O(n) 空间复杂度： O(n) 
//回溯法： 
//1. 初始化一个空的数组，用来存储结果
//2. 初始化一个变量left，用来记录左括号的个数
//3. 初始化一个变量right，用来记录右括号的个数
//4. 初始化一个变量str，用来记录当前的括号组合
//5. 如果左括号的个数大于0，则添加左括号，并递归
//6. 如果右括号的个数大于左括号的个数，则添加右括号，并递归
//7. 如果左括号的个数等于0，则添加右括号，并递归
//8. 如果右括号的个数等于0，则添加左括号，并递归
//把这个想象成一个二叉树，深度遍历二叉树进行减枝操作
//回溯法也可以叫做回溯搜索法，它是一种搜索的方式，回溯的本质是穷举，穷举所有可能，然后选出我们想要的答案。回溯是递归的副产品，只要有递归就会有回溯。
 var generateParenthesis = function(n) { // n为括号的个数 
    var result = []; // 结果数组
    var generate = function(left, right, str) { // left为左括号的个数，right为右括号的个数，str为当前的括号组合
        if (left > 0) { // 如果左括号的个数大于0，则添加左括号，并递归
            //加括号操作包括了减括号操作
            generate(left - 1, right, str + '('); // 左括号减一，右括号不变，括号组合加一个左括号
        }
        
        if (right > 0 && right > left) { // 如果右括号的个数大于左括号的个数，则添加右括号，并递归
            //字符串拼接包含了回退操作
            generate(left, right - 1, str + ')'); // 左括号不变，右括号减一，括号组合加一个右括号
        }
        //回溯操作 
        if (left === 0 && right === 0) { // 如果左右括号都为0，则添加到结果数组中 终止循环的标准
            result.push(str); // 添加到结果数组中
            return; // 结束递归
        }
        //撤销操作
        str = str.slice(0, -1); // 回退操作，删除最后一个字符(可省略)
        
    }
    generate(n, n, ''); // 初始化左右括号的个数，括号组合为空字符串
    return result; // 返回结果数组
};


generateParenthesis(3); // ["((()))","(()())","(())()","()(())","()()()"]

console.log(generateParenthesis(3));

/**
 * 回溯法(DFS)
 * 把握核心规则：
 *  - 必须是有效组合，则左、右括号一定要小于n, 且右括号的数量要一直小于或等于左括号
 *  - 针对组成的括号字符串的每一个位置字符来说，要么是左括号，要么是右括号, 具体这个位置应该是左还是右，看上面的规则而定
 *  - 所以想到，我可以递归地往每个位置放左和右括号，如果违反了规则，就回溯回去，换一个放，由此想到了回溯算法
 *  - 既然是递归，首先要先想好终止条件，依题可知，如果左右括号的数量都为n的话，即为一个答案了，终止递归，返回即可
 * 解题：left 记录已经放入的左括号的数量; right 记录右括号的数量；str 表示当前组成的字符串
 */
//  const generateParenthesis = (n, result = []) => {
//     const backtrack = (left, right, str) => {
//       if (left === n && right === n) return result.push(str)
//       if (left < n) backtrack(left+1, right, str + "(")
//       if (right < left) backtrack(left, right+1, str + ")")
//     }
//     backtrack(0, 0, "")
//     return result
//   }
  
  