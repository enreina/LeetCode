/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let colToBeDeleted = 0;
    // loop through each column, add colToBeDeleted if it's not lexicographically sorted
    for (let colIdx=0; colIdx<strs[0].length; colIdx++) {
        for (let rowIdx=0; rowIdx<strs.length-1; rowIdx++) {
            const currentLetter = strs[rowIdx].charAt(colIdx);
            const nextLetter = strs[rowIdx+1].charAt(colIdx);
            if (currentLetter > nextLetter) {
                colToBeDeleted++;
                break;
            }
        }
    }
    return colToBeDeleted;
    // Time complexity: O(N * K) -> number of strings (N) times length of each string (K)
    // Space complexity: O(1) -> we only need to store colToBeDeleted
};