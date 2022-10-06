/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function(routes, source, target) {
    // edge case
    if (source === target) {
        return 0;
    }
    // build a graph based on the bus stops intersection
    const graph = [];
    const numberOfBus = routes.length;
    for (let ii=0; ii<numberOfBus; ii++) {
        graph[ii] = new Set();
    }
    const targetBus = new Set();
    const bfsQueue = new Array();
    const routesAsSet = [];
    const takenBus = new Set();
    
    for (let ii=0; ii<numberOfBus; ii++) {
        const stopSet = new Set(routes[ii]);
        routesAsSet.push(stopSet);
        
        // determine which bus would can be taken on source and target
        if (stopSet.has(source)) {
            bfsQueue.push({bus: ii, numberOfBusTaken: 0});
            takenBus.add(ii);
        }
        if (stopSet.has(target)) {
            targetBus.add(ii);
        }
        for (let jj=ii+1; jj<numberOfBus; jj++) {
            // check intersection
            const intersection = routes[jj].filter((x) => stopSet.has(x));
            if (intersection.length > 0) {
                // create an edge between the bus
                graph[ii].add(jj);
                graph[jj].add(ii);
            }
        }
    }
    
    while (bfsQueue.length > 0) {
        const {bus: currentBus, numberOfBusTaken} = bfsQueue.shift();
        if (targetBus.has(currentBus)) {
            return numberOfBusTaken + 1;
        }
        graph[currentBus].forEach((nextBus) => {
            if (!takenBus.has(nextBus)) {
                bfsQueue.push({bus: nextBus, numberOfBusTaken: numberOfBusTaken+1});
                takenBus.add(nextBus);
            } 
        });
    };
    
    return -1;
};