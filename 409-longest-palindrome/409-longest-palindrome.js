/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    // calculate the number of times each letter (case sensitive occurs)
    const letterMap = new Map();
    for (let index = 0; index < s.length; index++) {
        const currentChar = s.charAt(index);
        if (letterMap.has(currentChar)) {
            letterMap.set(currentChar, letterMap.get(currentChar) + 1);
        } else {
            letterMap.set(currentChar, 1);
        }
    }
    let maxLength = 0;
    let hasUniqueMiddleLetter = false;;
    // for each letter, if the time it occurs is even (2 * x), then add them to max length of palindrom
    letterMap.forEach((numOfOccurences, letter) => {
       if (numOfOccurences % 2 === 0) {
           maxLength = maxLength + numOfOccurences;
       } else {
           maxLength = maxLength + numOfOccurences - 1;
           if (!hasUniqueMiddleLetter) {
               maxLength = maxLength + 1;
               hasUniqueMiddleLetter = true;
           }
       }
    });
    
    return maxLength;
};