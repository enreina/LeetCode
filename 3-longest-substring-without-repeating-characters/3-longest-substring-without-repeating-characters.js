/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // initialize max length to 0
    // set up a two pointer: start pointer & end pointer, pointing on first letter
    // add the letter pointed by end pointer to hashmap
    // gradually move end pointer to the right, check that letter
    // check if hashmap already has that letter:
    //      if yes:
    //          remove characters in hashmap from current start pointer to the position of that same letter
    //          move the start pointer to the right of that same letter
    //      if no: 
    //          - update current max length 
    //          - add letter to hashmap 
    //          - widen the window (move end pointer to the right) and repeat the process
    // stop when end pointer reaches the end of the string
    // return the latest max length
    
    let startPointer = 0;
    let endPointer = 0;
    let maxLength = 0;
    const uniqueCharacterPosition = new Map();
    
    while (endPointer < s.length) {
        
        console.log(`startPointer: ${startPointer}`);
        console.log(`endPointer: ${endPointer}`);
        console.log(s.substring(startPointer, endPointer+1));
        
        const currentCharacter = s[endPointer];
        if (uniqueCharacterPosition.has(currentCharacter)) {
            const sameCharacterPosition = uniqueCharacterPosition.get(currentCharacter);
            while (startPointer < sameCharacterPosition + 1) {
                uniqueCharacterPosition.delete(s[startPointer]);
                startPointer++;
            }
            uniqueCharacterPosition.set(currentCharacter, endPointer);
        } else {
            maxLength = Math.max(maxLength, endPointer - startPointer + 1);
            uniqueCharacterPosition.set(currentCharacter, endPointer);
        }
        
        endPointer++;
    }
    
    return maxLength;
};