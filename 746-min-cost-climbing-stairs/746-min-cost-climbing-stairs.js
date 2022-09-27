/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    // dynamic programming
    // base case: minimum cost of reaching the top from n is 0 (already at the top)
    // recurring case: minimum cost of reaching the top from i is the sum of
    //      cost of step i
    //      minimum cost between reaching the top from i + 1 reaching the top i + 2
    // minimum cost will be the min between from step 0 or step 1
    
    const numOfSteps = cost.length;
    const minCostMemoized = new Array(numOfSteps + 1);
    minCostMemoized[numOfSteps] = 0;
    minCostMemoized[numOfSteps - 1] = cost.at(-1);
    
    for (let ii=numOfSteps - 2; ii >= 0; ii--) {
        minCostMemoized[ii] = cost[ii] + Math.min(minCostMemoized[ii+1], minCostMemoized[ii+2]);
    }
    
    return Math.min(minCostMemoized[0], minCostMemoized[1]);
};
