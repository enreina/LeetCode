/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // if we use the nth coin, what is the fewest number of coins needed to represent amount - coins[n-1]?
    // example coins = [1,2,5]
    // coinChange[coins[n]] = 1
    // coinCHange[0] = 0
    // coinChange[1] = 1
    // coinChange[2] = Math.min(1 + coinChange[1], 1) = 1
    // coinChange[3] = Math.min(1 + coinChange[2], 1 + coinChange[1]) = 2
    // coinChange[4] = Math.min(1 + coinChange[3], 1 + coinChange[2]) = 2
    // coinChange[5] = Math.min(1 + coinChange[4], 1 + coinChange[3], 1 + coinChange[0]) = Math.min(3, 3, 1) = 1
    // coinChange[6] = Math.min(1 + coinChange[5], 1 + coinChange[4], 1 + coinChange[1]) = Math.min(2, 3, 2) = 2
    // ... and so on
    
    const coinChange = new Array(amount+1);
    coinChange[0] = 0;
    for (let ii=1; ii<amount+1; ii++) {
        coinChange[ii] = -1;
        coins.forEach((coinDenomination) => {
            if (coinDenomination <= ii && coinChange[ii - coinDenomination] !== -1) {
                if (coinChange[ii] === -1) {
                    coinChange[ii] = 1 + coinChange[ii - coinDenomination];
                } else {
                    coinChange[ii] = Math.min(coinChange[ii], 1 + coinChange[ii - coinDenomination]);
                }
            } 
        });
    }
    
    return coinChange[amount];
};