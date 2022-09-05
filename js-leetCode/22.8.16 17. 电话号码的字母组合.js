var letterCombinations = function (digits) { // 思路：递归 + 回溯 
    let res = []; //存放结果
    let len = digits.length; //要匹配的结果长度
  
    // 按键对应的字母
    const arr = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']; //数组的长度是10，所以数组的索引是0-9
  
    if (len === 0) return res; //如果长度为0，返回空数组
    if (len === 1) return arr[digits].split(''); //如果长度为1，返回数组的每个元素
  
    // 用来存储 路径
    let path = []; //存放路径
    backtrack(digits, len, 0); //递归函数
    return res; //返回结果
  
    // 回溯函数
    function backtrack(digits, l, i) { //digits是要匹配的结果，l是要匹配的结果长度，i是当前索引2
      // 1.终止条件
      if (path.length === l) { //如果路径长度等于要匹配的结果长度
        res.push(path.join('')); //把路径添加到结果数组中
        return; //返回
      }
      // 2.遍历
      for (const v of arr[digits[i]]) { //遍历数组的每个元素
        // 3.标记
        path.push(v); //把当前元素添加到路径中
        // 4.递归
        backtrack(digits, l, i + 1); //递归
        // 5.撤回标记
        path.pop(); //撤回标记
      } //遍历结束
    }
  };

