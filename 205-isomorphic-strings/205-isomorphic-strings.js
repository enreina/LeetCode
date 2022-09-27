/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    // quick check, if length is not the same
    if (s.length != t.length) return false;
    
    // we build a hash table to ensure that no two characters map to the same character
    const characterMap = new Map();
    const reverseCharacterMap = new Map();
    for (let charIndex = 0; charIndex < s.length; charIndex++) {
        let charFromS = s.charAt(charIndex);
        let charFromT = t.charAt(charIndex);
        
        // check if char from string s already in characterMap
        if (characterMap.has(charFromS) && characterMap.get(charFromS) != charFromT) {
            return false;
        }
        // check if char from string t already in reverseCharacterMap
        if (reverseCharacterMap.has(charFromT) && reverseCharacterMap.get(charFromT) != charFromS) {
            return false;
        }
        
        characterMap.set(charFromS, charFromT);
        reverseCharacterMap.set(charFromT, charFromS);
    }
    
    return true;
};