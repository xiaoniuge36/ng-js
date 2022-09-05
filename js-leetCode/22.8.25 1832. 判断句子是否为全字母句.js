//全字母

/**
 * @param {string} sentence
 * @return {boolean}
 */
 var checkIfPangram = function(sentence) { // 全字母
    return new Set(sentence.split('')).size === 26; // 利用Set去重
 }