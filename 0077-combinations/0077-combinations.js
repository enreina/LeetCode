/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    // backtracking -- base case: when we have picked k numbers
    
    // choose all number as the first number (as decision branch)
    // first level branch branch -> choose a number from remaining numbers that's larger than the first element as second element
    // second level branch -> choose a number from remaining numbers that's larger than the second element as third element
    // ...
    // k-1 level branch -> choose a number from remaining numbers that's larger than the (k-1)th element as kth element
    const combinations = [];
    const combineHelper = function(n, k, combination) {
        if (combination.length === k) {
            combinations.push(combination);
            return;
        }
        const lastElement = combination.at(-1) || 0;
        if (lastElement == n) {
            return;
        }
        
        for (let nextNumber=lastElement+1; nextNumber<=n; nextNumber++) {
            combineHelper(n, k, combination.concat([nextNumber]));
        }
    }
    combineHelper(n, k, []);
    
    return combinations; 
};