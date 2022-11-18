const lodash = require("lodash")

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }
    // create a map of unique characters in s1 with their number of occurences
    const s1Characters = {};
    for (let idx=0; idx<s1.length; idx++) {
        const currentChar = s1.charAt(idx);
        s1Characters[currentChar] = s1Characters[currentChar] ? s1Characters[currentChar] + 1 : 1;
    }
    
    // with the length of s1 as k, move a k-size sliding window on s2 and check if occurences of chars is the as with s1
    let leftPointer = 0;
    let rightPointer = leftPointer + s1.length;
    const s2Characters = {};
    for (let idx=leftPointer; idx<rightPointer; idx++) {
        const currentChar = s2.charAt(idx);
        s2Characters[currentChar] = s2Characters[currentChar] ? s2Characters[currentChar] + 1 : 1;
    }
    if (_.isEqual(s1Characters, s2Characters)) {
        return true;
    }
    while (rightPointer < s2.length) {
        leftPointer++;
        rightPointer++;
        const prevChar = s2.charAt(leftPointer-1);
        if (s2Characters[prevChar] - 1 == 0) {
            delete s2Characters[prevChar];
        } else {
            s2Characters[prevChar] = s2Characters[prevChar] - 1;
        }
        const newChar = s2.charAt(rightPointer-1);
        s2Characters[newChar] = s2Characters[newChar] ? s2Characters[newChar] + 1 : 1;
        if (_.isEqual(s1Characters, s2Characters)) {
            return true;
        }
    }
    return false;
};