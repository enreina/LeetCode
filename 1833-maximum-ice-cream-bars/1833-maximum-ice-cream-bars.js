/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    // sort the price in ascending order
    costs.sort((a, b) => a - b);

    // then while the boy has a remaining coin left, buy the ice cream in ascending order based on price
    let remainingCoins = coins;
    let currentIdx = 0;
    let boughtIceCreamBars = 0;
    while (remainingCoins > 0 && currentIdx < costs.length && costs[currentIdx] <= remainingCoins) {
        boughtIceCreamBars++;
        remainingCoins -= costs[currentIdx];
        currentIdx++;
    }
    // return the number of bought icream bars
    return boughtIceCreamBars;
};