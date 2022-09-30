/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
    // for every word, find the mirror pair
    // if it has a mirror pair then then the longest palindrome +4
    // special case: if we have at least one word with repeating letters (e.g. "ll", "cc"), add 2 to the length
    
    let longestLength = 0;
    const mirroredWordCountMap = new Map();
    const specialRepeatSet = new Set();
    words.forEach((word) => {
        const mirroredWord = word.split("").reverse().join("");
        
        const mirroredWordCount = mirroredWordCountMap.has(mirroredWord) ? mirroredWordCountMap.get(mirroredWord) : 0; 
        // if set has mirrored version of the word
        if (mirroredWordCount > 0) {
            // update length
            longestLength += 4;
            // remove from both set
            mirroredWordCountMap.set(mirroredWord, mirroredWordCount - 1)
            specialRepeatSet.delete(mirroredWord);
        } else {
            // else add mirrored word to set
            mirroredWordCountMap.set(word, mirroredWordCountMap.has(word) ? mirroredWordCountMap.get(word) + 1 : 1);
            // if a special word with repeating letters
            if (word === mirroredWord) {
                specialRepeatSet.add(word);
            }
        }
    });
    // if there exist a word in special repeat set
    console.log(specialRepeatSet);
    if (specialRepeatSet.size > 0) {
         longestLength += 2;
    }
    
    return longestLength;
};