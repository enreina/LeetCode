/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
    // We can treat this problem as counting the total size of an 
    // interconnected graph nodes; representing stones as the node s
    // with their connection to each other
    // stone i with coordinate [xi, yi] is connected to stone j with coordinate [xj, yj]
    // if their  xi === yi OR yi === yj
    
    // Build the graph by checking pairs of stones
    const graph = new Array(stones.length);
    const isStoneRemoved = new Array(stones.length); // equivalent to "visited" 
    for (let ii=0; ii<stones.length; ii++) {
        graph[ii] = new Array();
        isStoneRemoved[ii] = false;
    }
    
    for (let ii=0; ii < stones.length; ii++) {
        const [xi, yi] = stones[ii];
        for (let jj=ii+1; jj < stones.length; jj++) {
            const [xj, yj] = stones[jj];
            if (xi === xj || yi === yj) {
                graph[ii].push(jj);
                graph[jj].push(ii);
            }
        }
    }
    
    const runDFS = (stone) => {
        isStoneRemoved[stone] = true;
        
        let removedStones = 1;
        graph[stone].forEach((connectedStone) => {
            if (!isStoneRemoved[connectedStone]) {
                removedStones += runDFS(connectedStone);
            }  
        });
        
        return removedStones;
    };
    
    let removedStones = 0;
    // Run dfs on unremoved stones
    for (let ii=0; ii<graph.length; ii++) {
        if (!isStoneRemoved[ii]) {
            removedStones += runDFS(ii) - 1; // decrease 1 because last stone can't be removed
        }
    }
    
    return removedStones;
};