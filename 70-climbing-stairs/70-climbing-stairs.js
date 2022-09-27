/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // ways of climbing n steps can be divided to two subproblem:
    //      taking 1 steps as the first climb + ways of climbing n-1 steps
    //      taking 2 steps as the first climb + ways of climbing n-2 steps
    // only store the two previous calculation
    if (n == 1) return 1;
    if (n == 2) return 2;
    let [a, b] = [1, 2];
    
    for (let ii = 3; ii <= n; ii++) {
        [a, b] = [b, a+b];
    }
    return b;
};