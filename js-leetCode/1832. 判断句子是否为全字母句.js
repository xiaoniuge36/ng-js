/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let set = new Set(); // 用于存储不重复的字母
    for (let i = 0; i < sentence.length; i++) { // 遍历句子
        set.add(sentence[i]); // 将字母添加到set中
    }
    return set.size === 26; // 判断set中的字母个数是否为26
};