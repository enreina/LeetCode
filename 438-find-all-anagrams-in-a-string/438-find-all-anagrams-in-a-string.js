/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const results = [];
    // get length of p as n
    const n = p.length;
    // create hash map of occurences of each unique letter of p
    const pLetterOccurences = new Map();
    for (let idx=0; idx<n; idx++) {
        const currentChar = p.charAt(idx);
        if (pLetterOccurences.has(currentChar)) {
            pLetterOccurences.set(currentChar, pLetterOccurences.get(currentChar) + 1);
        } else {
            pLetterOccurences.set(currentChar, 1);
        }
    }
    const isAnagramOfP = (substr) => {
        const substrOccurences = new Map();
        for (let idx=0; idx<substr.length; idx++) {
            const currentChar = substr.charAt(idx);
            if (pLetterOccurences.has(currentChar)) {
                if (substrOccurences.has(currentChar)) {
                    const currentCount = substrOccurences.get(currentChar);
                    if (currentCount + 1 > pLetterOccurences.get(currentChar)) {
                        return false;
                    } else {
                        substrOccurences.set(currentChar, currentCount+1);
                    }
                } else {
                    substrOccurences.set(currentChar, 1);
                }
            } else {
                return false;
            }
        }
        
        return true;
    };
    
    // we loop through n-length substrings of s and check if the count of each letter is the same as p's
    for (let idx=0; idx<=s.length - n; idx++) {
        const substr = s.slice(idx, idx + n);
        if (isAnagramOfP(substr)) {
            // add to result
            results.push(idx);
        } 
    }
    
    return results;
    
};