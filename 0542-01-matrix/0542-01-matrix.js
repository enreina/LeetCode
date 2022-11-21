/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const distanceMatrix = [];
    const bfsQueue = [];
    const visited = {};
    for (let rowIdx=0; rowIdx<mat.length; rowIdx++) {
        distanceMatrix[rowIdx] = new Array(mat[rowIdx].length);
        for (let colIdx=0; colIdx<mat[rowIdx].length; colIdx++) {
            if (mat[rowIdx][colIdx] === 0) {
                // set distance matrix to 0 for 0 cells
                distanceMatrix[rowIdx][colIdx] = 0;
                // push 0s to BFS queue with distance 0
                bfsQueue.push([rowIdx, colIdx, 0]);
                // mark them as visited
                visited[`${rowIdx},${colIdx}`] = true;
            }
        }
    }
    
    // run BFS
    while (bfsQueue.length > 0) {
        const [rowIdx, colIdx, currentDistance] = bfsQueue.shift();
        // set distance
        distanceMatrix[rowIdx][colIdx] = currentDistance;
        
        const direction = [
            [-1, 0], // up
            [0, 1], // right
            [1, 0], // down
            [0, -1] // left
        ]; 
        
        direction.forEach(([rowChange, colChange]) => {
            const [newRow, newCol] = [rowIdx + rowChange, colIdx + colChange];
            
            if (newRow >= 0 && newRow < mat.length && newCol >= 0 && newCol < mat[newRow].length) {
                if (!visited[`${newRow},${newCol}`] && mat[newRow][newCol] === 1) {
                    bfsQueue.push([newRow, newCol, currentDistance+1]);
                    visited[`${newRow},${newCol}`] = true;
                }
            }
            
        });
    }
    
    return distanceMatrix;
    
};