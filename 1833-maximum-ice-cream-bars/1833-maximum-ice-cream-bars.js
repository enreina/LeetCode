/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    // sort the price in ascending order
    // we can use JS's built in sort, which is generally O(log n) in term of time complexity
    // const sortedCosts = costs.slice().sort((a, b) => a - b);
    // or we can use counting sort which has time complexity of O(n)

    // find the max of costs
    let maxCost = costs[0];
    costs.forEach((cost) => {
        maxCost = Math.max(maxCost, cost);
    })

    // create a freq array for storing the count
    const costFreq = new Array(maxCost + 1);
    costFreq.fill(0);
    costs.forEach((cost) => {
        costFreq[cost]++;
    });

    // build the sorted array of costs
    const sortedCosts = new Array();
    costFreq.forEach((freq, cost) => { // here the array idx is the cost, while the value is the frequency of the cost
        for (let idx=0; idx<freq;idx++) {
            sortedCosts.push(cost);
        }
    });

    // then while the boy has a remaining coin left, buy the ice cream in ascending order based on price
    let remainingCoins = coins;
    let currentIdx = 0;
    let boughtIceCreamBars = 0;
    while (remainingCoins > 0 && currentIdx < sortedCosts.length && sortedCosts[currentIdx] <= remainingCoins) {
        boughtIceCreamBars++;
        remainingCoins -= sortedCosts[currentIdx];
        currentIdx++;
    }
    // return the number of bought icream bars
    return boughtIceCreamBars;
};