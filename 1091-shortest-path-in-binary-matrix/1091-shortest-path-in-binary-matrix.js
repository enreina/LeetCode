/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    // Shortest path using BFS

    // setup visited cells
    const visited = Array(grid.length);
    for (let idx=0; idx<visited.length; idx++) {
        visited[idx] = Array(grid[idx].length);
        visited[idx].fill(false);
    }
    
    const bfsQueue = [];
    if (grid[0][0] === 0) {
        bfsQueue.push([0, 0, 1]); //[row, column, number of visited cells]
        visited[0][0] = true; // mark as visited
    }

    while (bfsQueue.length > 0) {
        const [curRow, curCol, curLength] = bfsQueue.shift();
        if (curRow === grid.length - 1 && curCol === grid[curRow].length - 1) {
            return curLength;
        }
        // push accessible adjacent cells to queue 
        const dir = [[-1,-1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]]; // clockwise direction starting from up-left
        for (let idx=0; idx<dir.length; idx++) {
            const [deltaRow, deltaCol] = dir[idx];
            const newRow = curRow + deltaRow;
            const newCol = curCol + deltaCol;
            if (newRow >= 0 && newRow < grid.length && 
                newCol >= 0 && newCol < grid[newRow].length && 
                !visited[newRow][newCol] &&
                grid[newRow][newCol] === 0) {
                bfsQueue.push([newRow, newCol, curLength+1]);
                visited[newRow][newCol] = true;
            }
        }
    }

    return -1;
};