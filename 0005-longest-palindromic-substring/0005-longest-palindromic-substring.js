/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // Dynamic programming
    // Definition: isPalindromic[leftIdx][rightIdx] = true if and only if s.subtr(leftIdx, rightIdx) is palindromic
    // Base case:
    // isPalindromic[ii][ii] = true (one letter is always palindromic)
    // Recurrent Case:
    // isPalindromic[ii][jj] = (s.charAt(ii) === s.charAt(jj-1) && isPalindromic[ii+1][jj-1])
    // Longest palindrome where isPalindromic[ii][jj] where jj - ii is the max

    const isPalindromic = Array(s.length+1);
    for (let leftIdx=0; leftIdx<=s.length; leftIdx++) {
        isPalindromic[leftIdx] = Array(s.length+1);
        isPalindromic[leftIdx].fill(false);
    } 

    let maxLength = 0;
    let result = "";
    for (let leftIdx=s.length; leftIdx>=0; leftIdx--) {
        for (let rightIdx=leftIdx; rightIdx<=s.length; rightIdx++) {
            if (leftIdx === rightIdx || leftIdx+1 === rightIdx) {
                isPalindromic[leftIdx][rightIdx] = true;
            } else {
                isPalindromic[leftIdx][rightIdx] = 
                    s.charAt(leftIdx) === s.charAt(rightIdx-1) && 
                    isPalindromic[leftIdx+1][rightIdx-1];
            }
            if (isPalindromic[leftIdx][rightIdx] && (rightIdx - leftIdx) >= maxLength) {
                maxLength = rightIdx - leftIdx;
                result = s.substring(leftIdx, rightIdx);
            }
        }
    }

    return result;
};