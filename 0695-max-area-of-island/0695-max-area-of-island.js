/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    // create a hashmap to keep track of visited lands
    const visitedLands = {};
    
    const calculateLandArea = (rowIdx, colIdx) => {
        // check if valid land and has not been visited
        if (rowIdx < 0 || rowIdx >= grid.length || 
            colIdx < 0 || colIdx >= grid[rowIdx].length || 
            grid[rowIdx][colIdx] !== 1 || 
            visitedLands[`${rowIdx},${colIdx}`]
        ) {
            return 0;
        } 
        
        visitedLands[`${rowIdx},${colIdx}`] = true;
        
        // size is current land (1) + number of lands when we go up, right, down, left
        return 1 + 
            calculateLandArea(rowIdx-1, colIdx) + // go up 
            calculateLandArea(rowIdx, colIdx+1) + // go right
            calculateLandArea(rowIdx+1, colIdx) + // go down
            calculateLandArea(rowIdx, colIdx-1); // go left
    };
    
    // run through all grid, once we found a land, run the DFS and calculate the land area 
    // keep track the maximum area of an island
    let maximumLandArea = 0;
    for (let rowIdx=0; rowIdx<grid.length; rowIdx++) {
        for (let colIdx=0; colIdx<grid[rowIdx].length; colIdx++) {
            if (grid[rowIdx][colIdx] === 1 && !visitedLands[`${rowIdx},${colIdx}`]) {
                const islandArea = calculateLandArea(rowIdx, colIdx);
                maximumLandArea = Math.max(maximumLandArea, islandArea)
            }
        }
    }
    
    return maximumLandArea;
};