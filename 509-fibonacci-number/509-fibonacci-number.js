/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    // dynamic programming approach
    // create an array to memoize result
    const memoizedFib = [0, 1];
    
    for (let ii = 2; ii <= n; ii++) {
        memoizedFib[ii] = memoizedFib[ii - 1] + memoizedFib[ii - 2];
    }
    
    return memoizedFib[n];
};