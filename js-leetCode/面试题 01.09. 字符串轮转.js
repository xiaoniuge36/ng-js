
// console.log("abc".includes("b"));

// console.log("A"+"B"+"C");

// console.log("A"+"B"+"C".charAt(0));

// console.log("abv".indexOf("g"));

console.log(("waterbottle"+"waterbottle").includes("erbottlewat"));

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var isFlipedString = function(s1, s2) {
    return s1.length === s2.length && (s2+s2).includes(s1) 
};

var isFlipedString = function(s1, s2) {
    return s1.length === s2.length && (s2+s2).indexOf(s1)>1 
};