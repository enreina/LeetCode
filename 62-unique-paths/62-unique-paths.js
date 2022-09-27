/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // base case:
    // m: 1, n: 1 -> number of ways 0
    // m: 1, n: x or m: x, n: 1 -> number of ways is 1
    // induction case, sum of:
    // - number of ways if we go right (m, n - 1)
    // - number of ways if we go downward (m - 1, n)
    
    // populate memoization array starting from m: 0, n: 0
    const memoizedNumOfPaths = new Array(m);
    for (let ii=0; ii<memoizedNumOfPaths.length; ii++) {
        memoizedNumOfPaths[ii] = new Array(n);
    }
    memoizedNumOfPaths[0].fill(1); 
    for (let row=0; row< m; row++) {
        memoizedNumOfPaths[row][0] = 1;
    }
    
    for (let row=1; row < m; row++) {
        for (let col=1; col < n; col++) {
            memoizedNumOfPaths[row][col] = 0;
            if (col - 1 >= 0) {
                memoizedNumOfPaths[row][col] = memoizedNumOfPaths[row][col] + memoizedNumOfPaths[row][col-1];
            }
            if (row - 1 >= 0) {
                memoizedNumOfPaths[row][col] = memoizedNumOfPaths[row][col] + memoizedNumOfPaths[row - 1][col];
            }
        }
    };
    return memoizedNumOfPaths[m-1][n-1];
};