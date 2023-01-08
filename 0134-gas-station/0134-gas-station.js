/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    // total cost needed = sum of cost
    // we can't travel through all stations if sum(cost) > sum(gas)
    const sumGas = gas.reduce((currentSum, currentGas) => currentSum + currentGas, 0);
    const sumCost = cost.reduce((currentSum, currentCost) => currentSum + currentCost, 0);
    if (sumCost > sumGas) {
        return -1;
    }

    let currentGas = 0;
    let startIdx = 0;
    for (let idx=0; idx<gas.length; idx++) {
        currentGas += gas[idx] - cost[idx];
        if (currentGas < 0) {
            currentGas = 0;
            startIdx = idx+1;
        } 
    }

    return startIdx;
};