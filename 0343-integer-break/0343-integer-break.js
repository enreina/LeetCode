/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    // n = 2
    // possible break:
    // 1 + 1 -> product 1 x 1 = 1
    // max product 1
    // n = 3
    // possible break:
    // 1 + 1 + 1 -> product 1 x 1 x 1 = 1
    // 1 + 2 -> product 1 x 2 = 2
    // 2 + 1 -> product 2 x 1 = 2
    // max product = 2
    // Define maxProduct[n] is the maximum product for n
    // -> Math.max( 
    //      1 x maxProduct[n - 1],
    //      1 x (n - 1),
    //      2 x maxProduct[n - 2],
    //      2 x (n - 2),
    //      ...,
    //      (n-1) x maxProduct[1]
    //      (n-1) x 1
    // )
    // Space complexity: O(n + 1) -> O(n)
    // Time complexity: O(n * (n - 1)) -> O(n^2)

    const maxProduct = new Array(n+1);
    maxProduct[1] = 1;
    for (let ii=2; ii<=n; ii++) {
        maxProduct[ii] = 1;
        for (let jj=1; jj<=ii-1; jj++) {
            maxProduct[ii] = Math.max(
                maxProduct[ii], 
                jj * (ii - jj),
                jj * maxProduct[ii-jj]);
        }
    }
    
    return maxProduct[n];
};