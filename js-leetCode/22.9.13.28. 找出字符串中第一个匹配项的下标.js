/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
//时间
 var strStr = function(haystack, needle) { //暴力法
    if(needle.length==0){ //如果子串为空
        return 0; // 返回0
    }
    for(let i=0;i<haystack.length;i++){  //遍历主串
        if(haystack[i]==needle[0]){ //如果主串中的某个字符与子串的第一个字符相同
            for(let j=0;j<needle.length;j++){ //遍历子串
                if(haystack[i+j]!=needle[j]){ //如果主串中的某个字符与子串的某个字符不相同
                    return -1; //返回-1
                }
                if(j==needle.length-1){ //如果子串遍历完毕
                    return i; //返回主串中的下标
                }
            }
        }
    }
    return -1; //如果主串遍历完毕，返回-1
    
};

strStr("hello","ll");
console.log(strStr("hello","ll"));