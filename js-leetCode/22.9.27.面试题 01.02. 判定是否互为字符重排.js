/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var CheckPermutation = function(s1, s2) {
    if (s1.length != s2.length) return false;
    let map = new Map();
    for (let i = 0; i < s1.length; i++) {
        if (map.has(s1[i])) {
            map.set(s1[i], map.get(s1[i]) + 1);
        } else {
            map.set(s1[i], 1);
        }
    }
    for (let i = 0; i < s2.length; i++) {
        if (map.has(s2[i])) {
            map.set(s2[i], map.get(s2[i]) - 1);
        } else {
            return false;
        }
    }
    for (let [key, value] of map) {
        if (value != 0) return false;
    }
    return true;
};


/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var CheckPermutation = function(s1, s2) {
    // 两个字符长度必须一致
    if(s1.length != s2.length){
        return false
    }
    // s1中的每个元素，s2中必须包含
    for(let i = 0; i < s1.length; i++){
        if(s2.includes(s1[i])){
            continue
        }
        return false
    }

    // s1中的元素每个数量必须等于s2中的每个元素的数量
    let count = (s, ele) => {
        let index = 0, sum = 0
        while(index < s.length){
            if(s[index] === ele){
                sum++
            }
            index++
        }
        return sum
    }
    // 去重
    let newS = Array.from(new Set(s1.split('')))
    for(let i = 0; i < newS.length; i++){
        if(count(s1, newS[i]) != count(s2, newS[i])){
            return false
        }
    }
    return true
};
