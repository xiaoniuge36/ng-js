//最长公共前缀
let strs = ["flower","flow","flight"];


var longestCommonPrefix = function(strs) {
    var re = ''; // 存储最长公共前缀
    if (!strs.length) return re; // 如果没有字符串，返回空字符串
    for (var j=0;j<strs[0].length;j++){//第j位
        for (var i=1;i<strs.length;i++){//第i个
            if (strs[i][j]!=strs[0][j]) return re //如果不相等，返回最长公共前缀
        }
        re += strs[0][j]; //如果相等，添加到最长公共前缀中
    }
    return re; //返回最长公共前缀
};
