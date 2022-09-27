/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // for each character in s, we find the index of the same character of first found
    // then we splice t so we only consider the rest of the characters from that index
    // we return false when we couldn't find the character
    var tStartingIndex = 0;
    for (let sIndex = 0; sIndex < s.length; sIndex++) {
        let sChar = s.charAt(sIndex);
        tStartingIndex = t.indexOf(sChar, tStartingIndex);
        if (tStartingIndex == -1) return false;
        tStartingIndex += 1;
    }
    
    return true;
};
