/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    // Dynamic Programming
    // maxLength[i][j] is the longest common subsequence of text1 with length i and text2 with length j
    // maxLength[0][any] = 0
    // maxLength[any][0] = 0
    // with text1.length === 1 and text2.length === 1
    // -> maxLength[1][1] = longest common subsequence is 1 if text1[0] === text2[0]; otherwise 0
    // with text1.length === 1 and text2.length === 2
    // -> maxLength[1][2]
    //      -> if text1[0] === text2[1]; -> 1 + maxLength[0][1]
    //      -> else: Math.max(maxLength[0][1], maxLength[1][1])

    const maxLength = Array(text1.length + 1);
    for (let idx=0; idx<maxLength.length; idx++) {
        maxLength[idx] = Array(text2.length + 1);
        maxLength[idx].fill(0);
    }

    for (let text1Idx=1; text1Idx<=text1.length; text1Idx++) {
        for (let text2Idx=1; text2Idx<=text2.length; text2Idx++) {
            if (text1.charAt(text1Idx-1) === text2.charAt(text2Idx-1)) {
                maxLength[text1Idx][text2Idx] = 1 + maxLength[text1Idx-1][text2Idx-1];
            } else {
                maxLength[text1Idx][text2Idx] = Math.max(maxLength[text1Idx-1][text2Idx], maxLength[text1Idx][text2Idx-1]);
            }
        }
    }
    console.log(maxLength);
    
    return maxLength[text1.length][text2.length];
};