/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    // DFS approach
    // we loop through the grid until we found an unvisited land
    // increment number of island
    // mark as visited and do DFS horizontally and vertically (mark as visited)

    
    // we set a separate array to mark lands as visited
    const visited = new Array(grid.length);
    for (let idx = 0; idx < visited.length; idx++) {
        visited[idx] = new Array(grid[0].length);
        visited[idx].fill(false);
    }
    
    // initialize number of island to be 0
    let numOfIsland = 0;
    
    const isValidLocation = (rowIndex, colIndex) => rowIndex >= 0 && rowIndex < grid.length && colIndex >= 0 && colIndex < grid[0].length;
    const isUnvisitedLand = (rowIndex, colIndex) => grid[rowIndex][colIndex] === "1" && !visited[rowIndex][colIndex];
    
    const exploreIsland = (rowIndex, colIndex) => {
      if (isValidLocation(rowIndex, colIndex) && isUnvisitedLand(rowIndex, colIndex)) {
          // mark as visited
          visited[rowIndex][colIndex] = true;
          // explore adjacent lands
          exploreIsland(rowIndex - 1, colIndex); // up
          exploreIsland(rowIndex + 1, colIndex); // down
          exploreIsland(rowIndex, colIndex - 1); // left
          exploreIsland(rowIndex, colIndex + 1); // right
      }  
    };
    
    // we loop through the grid until we found an unvisited land
    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        for (let colIndex = 0; colIndex < grid[rowIndex].length; colIndex++) {
            // when we found an unvisited island
            if (isUnvisitedLand(rowIndex, colIndex)) {
                // increment number of island
                numOfIsland = numOfIsland + 1;
                // explore Island
                exploreIsland(rowIndex, colIndex);
            }
        }
    }
    
    return numOfIsland;
    
};