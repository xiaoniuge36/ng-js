// /**
//  * @param {string[]} words
//  * @param {string} pref
//  * @return {number}
//  */
//  var prefixCount = function(words, pref) {
//     // return words.filter(word => word.startsWith(pref)).length
//     // return words.filter(word => !word.indexOf(pref)).length
//     return words.reduce((prev, curr) => curr.startsWith(pref) ? ++prev : prev, 0)
// };


var words = ["pay","attention","practice","attend"];
var pref = "at";


var prefixCount = function(words, pref) {
    let count = 0
    for (const word of words) {
        console.log(word);
        if(word.indexOf(pref) === 0)
        // console.log(word);
        // console.log(pref);
        count+=1
    }
    // console.log(count);
    return count

};

prefixCount(words,pref);

console.log(words[1].indexOf('attent'));