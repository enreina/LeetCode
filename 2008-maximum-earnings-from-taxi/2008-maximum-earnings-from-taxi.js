/**
 * @param {number} n
 * @param {number[][]} rides
 * @return {number}
 */
var maxTaxiEarnings = function(n, rides) {
    // create a map between point on the the road to the passenger(s) which asked to be picked up at that point
    const passengers = new Array(n+1);
    for (let idx=0; idx<=n; idx++) {
        passengers[idx] = new Array(); 
    }
    rides.forEach(([start, end, tip]) => {
        passengers[start].push({
            end,
            earning: end - start + tip,
        });
    });
    
    // Dynamic programming:
    // maxEarning[startPoint] = the maximum earning we can get from startPoint+1 to n
    // Initialize
    // maxEarning[n] = 0;
    // Then from i = n-1 to 0
    // maxEarning[i] = 
    //  - if no passenger to be picked up on point i-> maxEarning[i+1]
    //  - if there is a passenger -> max between:
    //      - picking up the passenger -> passengerStart - passengerEnd + tip + maxEarning[passengerEnd-1]
    //      - not picking up the passenger -> maxEarning[i+1]

    const maxEarnings = new Array(n+1);
    maxEarnings.fill(0);
    for (let idx=n-1; idx>=0; idx--) {
        maxEarnings[idx] = maxEarnings[idx+1];
        passengers[idx].forEach((currentPassenger) => {
            maxEarnings[idx] = Math.max(
                currentPassenger.earning + maxEarnings[currentPassenger.end],
                maxEarnings[idx]
            );
        });
    }
    return maxEarnings[0]; // the maximum earning we can get from 1 to n
};