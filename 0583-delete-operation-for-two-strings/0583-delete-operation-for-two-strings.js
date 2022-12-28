/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    // we can find the longest common subsequence, name it commonWord,of word1 and word2
    // similar approach to https://leetcode.com/problems/longest-common-subsequence/
    // then the minDistance would be the:
    //      (word1.length - commonWord.length) + (word2.length - commonWord.length)
    // Define maxLength[i][j] is the longest common subsequence of word1 with length i and word2 with length j
    // Base cases:
    // -> maxLength[0][any] = 0;
    // -> maxLength[any][0] = 0;
    // Recurrent case:
    // -> maxLength[1][1]
    //      -> if word1[0] === word2[0]: 1
    //      -> else: 0
    // -> maxLength[1][2]
    //      -> if word1[0] === word2[1]: 1 + maxLength[0][1]
    //      -> else: Math.max(maxLength[0][2], maxLength[1][1])
    // Generic:
    // -> maxLength[i][j]
    //      -> if word1[i-1] === word2[j-1]: 1 + maxLength[i-1][j-1]
    //      -> else: Math.max(maxLength[i-1][j], maxLength[i][j-1])
    // commonWord.length = maxLength[word1.length][word2.length];

    const maxLength = new Array(word1.length + 1);
    for (let idx=0; idx<maxLength.length; idx++) {
        maxLength[idx] = new Array(word2.length + 1);
        maxLength[idx].fill(0);
    }

    for (let word1EndIdx=1; word1EndIdx <= word1.length; word1EndIdx++) {
        for (let word2EndIdx=1; word2EndIdx <= word2.length; word2EndIdx++) {
            if (word1.charAt(word1EndIdx-1) === word2.charAt(word2EndIdx-1)) {
                maxLength[word1EndIdx][word2EndIdx] = 1 + maxLength[word1EndIdx-1][word2EndIdx-1];
            } else {
                maxLength[word1EndIdx][word2EndIdx] = Math.max(maxLength[word1EndIdx-1][word2EndIdx], maxLength[word1EndIdx][word2EndIdx-1]);
            }
        }
    }

    const commonWordLength = maxLength[word1.length][word2.length];

    return (word1.length - commonWordLength) + (word2.length - commonWordLength);
};