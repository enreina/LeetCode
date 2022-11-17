/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const reverseWord = (word) => {
        return word.split("").reverse().join("");
    };
    
    const words = s.split(" ");
    
    return words.map(word => reverseWord(word)).join(" ");
};