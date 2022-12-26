/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    // turn word dict as a Set
    const dictSet = new Set(wordDict);
    // Definition canSegment[n] = s of length n can be segmented
    // s can be segemented if there is an i such that
    // -> s.susbtring(n-i, n) exists in dictSet and
    // -> canSegment[n-i] is true
    
    const canSegment = new Array(s.length+1);
    canSegment[0] = true; //empty string can be segmented
    for (let n=1; n<=s.length; n++) {
        canSegment[n] = false;
        for (let leftIdx=0; leftIdx<n; leftIdx++) {
            canSegment[n] = canSegment[leftIdx] && dictSet.has(s.substring(leftIdx, n));
            if (canSegment[n]) {
                break;
            }
        }
    }

    return canSegment[s.length];
};