/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // initialize two pointers: buyDay to 0 and sellDay to 1
    let buyDay = 0;
    let sellDay = 1;
    // intialize maxProfit to 0
    let maxProfit = 0;
    while (sellDay < prices.length && sellDay > buyDay) {
        const profit = prices[sellDay] - prices[buyDay];
        if (profit > 0) {
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        } else {
            buyDay = sellDay;
        }
        sellDay += 1;
    }
    
    return maxProfit;
    
}