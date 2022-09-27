/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    // slide window
    // move the right of window gradually to the right and count the number of occurrences of each unique letter
    // keep the count of the character with most count
    // if the length of window - character with most count reaches k
    // we decrease the window size until it satisfies the constraint
    // and then we resize the window again
    // update the max window
    
    // create a map to count number of character
    const charOccurences = new Map();
    // window
    let windowLeft = 0;
    let windowRight = 0;
    let mostCharLength = 0;
    let maxWindowSize = 0;
    while (windowRight < s.length) {
        // console.log(s.slice(windowLeft, windowRight+1));
        const currentChar = s.charAt(windowRight);
        charOccurences.set(currentChar, 
                           charOccurences.has(currentChar) ? 
                            charOccurences.get(currentChar) + 1: 
                            1);
        let windowSize = windowRight - windowLeft + 1;
        mostCharLength = Math.max(mostCharLength, charOccurences.get(currentChar));
        // console.log("most char", mostCharLength);
        while (windowSize - mostCharLength > k) {
            const leftMostChar = s.charAt(windowLeft);
            charOccurences.set(leftMostChar, charOccurences.get(leftMostChar) - 1);
            windowLeft++;
            windowSize = windowRight - windowLeft + 1;
        }
        maxWindowSize = Math.max(maxWindowSize, windowSize);
        windowRight++;
    }
    
    return maxWindowSize
};