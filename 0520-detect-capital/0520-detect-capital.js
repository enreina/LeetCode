/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    const isUpperCase = (str) => str.toUpperCase() === str;
    const isLowerCase = (str) => str.toLowerCase() === str;

    return isUpperCase(word) || isLowerCase(word) || (isUpperCase(word.substr(0,1)) && isLowerCase(word.substr(1)));
};