/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // longest common prefix's length would be the shortest word in array: shortestLength
    // but we can also take the first word length as the limit
    // setup an iterator to move from [0...shortestLength) (non-inclusive)
    // for every character that's same for every string, we add to the common prefix
    // stop when we found at least one string in the array which doesn't have the same character
    
    let prefixFound = false;
    let commonPrefix = "";
    let ii = 0;
    while (ii < strs[0].length && !prefixFound) {
        const currentChar = strs[0].charAt(ii);
        if (currentChar == "") {
            prefixFound = true;
            break;
        }
        let isAPrefixChar = true;
        for (let jj=1; jj < strs.length; jj++) {
            const currentWord = strs[jj];
            // the condition below would also work when the word is shorter then the first word
            if (currentWord.charAt(ii) != currentChar) { 
                isAPrefixChar = false;
                prefixFound = true;
                break;
            }
        }
        if (isAPrefixChar) {
            commonPrefix = `${commonPrefix}${currentChar}`;
        }
        ii++;
    }
    
    return commonPrefix;
};