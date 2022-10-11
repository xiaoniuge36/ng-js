/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
    let count = 0;
    //字符串排序
    let s1Arr = s1.split('').sort();
    let s2Arr = s2.split('').sort();
    //判断排序后的字符串是否相等
    if (s1Arr.join('') !== s2Arr.join('')) {
        return false;
    }
    //判断两个字符串是否只有两个字符不同
    for (let i = 0; i < s1.length; i++) {
        if (s1.charAt(i) !== s2.charAt(i)) {
            count++;
        }
    }
    if (count > 2) {
        return false;
    }
    return true;
}

console.log(areAlmostEqual("attack", "defend"));


//  /**
//  * @param {string} s1
//  * @param {string} s2
//  * @return {boolean}
//  */
// var areAlmostEqual = function(s1, s2) {
//     let temp1=s1,temp2=s2;
//     let count = 0;
//      let arr1=temp1.split('').sort((a,b)=>(a.charCodeAt(0)-b.charCodeAt(0))).join('');
//      let arr2=temp2.split('').sort((a,b)=>(a.charCodeAt(0)-b.charCodeAt(0))).join('');
//      if(arr1!=arr2) return false;
//     for(let i=0;i<s1.length;i++){
//         if(s1.charAt(i)!=s2.charAt(i)){
//             count++;
//         }
//     }
//     if(count>2) return false;
//     return true;
// };

