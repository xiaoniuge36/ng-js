/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
//  var countConsistentStrings = function(allowed, words) {
//     let count = 0
//     for(let i = 0; i < words.length; i++){
//         let word = words[i]
//         let flag = true
//         for(let j = 0; j < word.length; j++){
//             if(!allowed.includes(word[j])){
//                 flag = false
//                 break
//             }
//         }
//         if(flag) count++
//     }
//     return count
// };

var countConsistentStrings = function(allowed, words) {
    //allowed为字符串，words为字符串数组
    let count = 0;
    for(let i = 0; i < words.length; i++){
        let result = words[i].split('').every(item => allowed.includes(item))
        if(result) count++
    }
    return count;
}

