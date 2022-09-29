/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var isFlipedString = function(s1, s2) {
    if (s1.length != s2.length) {return false;}
    let s = s1 + s1;
    console.log(s);
    console.log(s.includes(s2));
    return s.includes(s2);  
};

isFlipedString("waterbottle", "erbottlewat");