/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (t.length > s.length) {
        return "";
    }
    
    // count frequency of every character in t
    const charFrequency = {};
    for (let ii=0; ii<t.length; ii++) {
        const currentChar = t.charAt(ii);
        charFrequency[currentChar] = charFrequency[currentChar] ? charFrequency[currentChar] + 1 : 1;
    }
    
    let minimumWindowSubstring = "";
    
    // set up a k-size window, starting with k=1
    let leftWindow = 0;
    let rightWindow = 0;
    let currentChar = s.charAt(leftWindow);
    // move pointer until we found first character in t
    while (charFrequency[currentChar] === undefined && leftWindow < s.length - t.length) {
        leftWindow++;
        currentChar = s.charAt(leftWindow);
    }
    // we set right window as "not rolling yet" -- the actual window resize is in the next while loop block
    rightWindow = leftWindow - 1;
    
    let numberOfCharNeeded = t.length;
    while (leftWindow <= s.length - t.length) {
        // move right window gradually until we satisfy constraint
        // we only need to do this if we don't already satisfy the constraint
        if (numberOfCharNeeded > 0) {
            rightWindow++;
        }
        while (numberOfCharNeeded > 0 && rightWindow < s.length) {
            const currentChar = s.charAt(rightWindow);
            if (charFrequency[currentChar] !== undefined) {
                if (charFrequency[currentChar] > 0) {
                    numberOfCharNeeded--;
                }
                charFrequency[currentChar]--;
            }
            if (numberOfCharNeeded > 0) {
                rightWindow++;
            }
        }
        const currentSubstring = s.substr(leftWindow, rightWindow - leftWindow + 1);
        if (numberOfCharNeeded === 0) {
            if (minimumWindowSubstring === "" || currentSubstring.length < minimumWindowSubstring.length) {
                minimumWindowSubstring = currentSubstring;
            }
        }
        
        // find the next left window
        let leftChar = s.charAt(leftWindow);
        charFrequency[leftChar]++;
        if (charFrequency[leftChar] > 0) {
            numberOfCharNeeded++;
        }
        leftWindow++;
        leftChar = s.charAt(leftWindow);
        while (charFrequency[leftChar] === undefined && leftWindow <= s.length - t.length) {
            leftWindow++;
            leftChar = s.charAt(leftWindow);
        }
    }
    
    return minimumWindowSubstring;
};