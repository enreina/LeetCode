/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    // get the initial number of fresh oranges
    // if number of fresh orange is already 0, return 0
    // put position of all rotten oranges to a queue
    
    const CellValue = {
        Empty: 0,
        FreshOrange: 1,
        RottenOrange: 2,
    };
    
    const rottenOrangeQueue = new Array();
    let freshOrangeCount = 0;
    grid.forEach((row, rowIndex) => {
       row.forEach((cell, colIndex) => {
          if (cell === CellValue.FreshOrange) {
              freshOrangeCount++;
          } else if (cell === CellValue.RottenOrange) {
              rottenOrangeQueue.push({rowIndex, colIndex});
          }
       }); 
    });
    
    const visitAdjacentCell = (rowIndex, colIndex) => {
        if (rowIndex < 0 || colIndex < 0 || rowIndex >= grid.length || colIndex >= grid[rowIndex].length) {
          return;
        }
        if (grid[rowIndex][colIndex] === CellValue.FreshOrange) {
            grid[rowIndex][colIndex] = CellValue.RottenOrange;
            rottenOrangeQueue.push({rowIndex, colIndex});
            freshOrangeCount--;
        }
    };
    
    if (freshOrangeCount === 0) return 0;
    
    // do bfs on each of them; 
    //  shift the queue
    //  currentMinute++
    //  for each rotten orange in the queue
    //      update cells accordingly (4 directionally); 
    //      put new rotten oranges to the queue
    // repeat until all rotten cells are visited (queue is empty)
    
    let currentMinute = -1; // minute starts from 0
    while (rottenOrangeQueue.length > 0) {
        currentMinute++;
        // simultaneous BFS on current rotten oranges
        let currentRottenOrangeCount = rottenOrangeQueue.length;
        while (currentRottenOrangeCount > 0) {
            currentRottenOrangeCount--;
            const {rowIndex, colIndex} = rottenOrangeQueue.shift();
            // go up
            visitAdjacentCell(rowIndex - 1, colIndex);
            // go right
            visitAdjacentCell(rowIndex, colIndex + 1);
            // go down
            visitAdjacentCell(rowIndex + 1, colIndex);
            // go left
            visitAdjacentCell(rowIndex, colIndex - 1);
        }
    }
    
    return freshOrangeCount === 0 ? currentMinute : -1;
};