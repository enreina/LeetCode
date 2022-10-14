/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    // build the graph as a map of city -> array of neighboring cities
    // also set up a visited map
    const graphMap = {};
    const numOfCity = isConnected.length;
    const isVisited = new Array(numOfCity);
    for (let ii=0; ii<numOfCity; ii++) {
        graphMap[ii] = [];
        isVisited[ii] = false;
        for (let jj=0; jj<isConnected.length; jj++) {
            if (isConnected[ii][jj] === 1) {
                graphMap[ii].push(jj);
            }
        }
    }
    
    const runDFS = (city) => {
        // mark city as visited
        isVisited[city] = true;
        
        // visit all unvisited neighboring cities
        graphMap[city].forEach((neighboringCity) => {
           if (!isVisited[neighboringCity]) {
               runDFS(neighboringCity);
           }
        });
        
    };
    
    let numOfProvince = 0;
    for (let ii=0; ii<numOfCity; ii++) {
        if (!isVisited[ii]) {
            // from each unvisited city:
            //      - increment number of provinces
            numOfProvince++;
            //      - run DFS through the city neighbors (marking them visited)
            runDFS(ii);
        }
    }
    
    // return number of provinces
    return numOfProvince;
};