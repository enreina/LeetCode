/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    // word1: horse; word2: ros
    // minDistanceDP[i][j] is the minimum distance between word of length i to word of length j
    // Base cases:
    // minDistanceDP[0][0] = 0;
    // minDistanceDP[i][0] = i; 
    // minDistanceDP[0][j] = j;
    // Recurrent case
    // minDistanceDP[ii][jj] = ?
    // -> if word1[ii-1] == word2[ii-1]
    //      -> then we can just measure the distance without the last char; i.e. minDistanceDP[ii][jj] = minDistanceDP[ii-1][jj-1]
    // -> else
    //      -> for the last char, we choose one operation (1 + ...), and choose the minimum
    //          -> if we insert a new char to word1, 1 + minDistanceDP[ii-1][jj]
    //          -> if we remove a char from word1, 1 + minDistanceDP[ii][jj-1]
    //          -> if we replace the char, 1 + minDistanceDP[ii][jj]
    //      in short
    //          minDistanceDP[ii][jj] = 1 + Math.min(minDistanceDP[ii-1][jj], minDistanceDP[ii][jj-1], minDistanceDP[ii-1][jj-1])

    const minDistanceDP = new Array(word1.length + 1);
    for (let ii=0; ii<minDistanceDP.length; ii++) {
        minDistanceDP[ii] = new Array(word2.length + 1);
        minDistanceDP[ii].fill(0);
        for (let jj=0; jj< minDistanceDP[ii].length; jj ++) {
            if (ii === 0) minDistanceDP[ii][jj] = jj;
            else if (jj === 0) minDistanceDP[ii][jj] = ii;
            else if (word1.charAt(ii-1) === word2.charAt(jj-1)) {
                minDistanceDP[ii][jj] = minDistanceDP[ii-1][jj-1];
            } else {
                minDistanceDP[ii][jj] = 1 + Math.min(
                    minDistanceDP[ii-1][jj], // insert char
                    minDistanceDP[ii][jj-1], // remove char
                    minDistanceDP[ii-1][jj-1] // replace char
                );
            }
        }
    }
    console.log(minDistanceDP);

    return minDistanceDP[word1.length][word2.length];
}