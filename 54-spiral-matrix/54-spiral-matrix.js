/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    // the order of direction change is the following: right, down, left, up
    // we keep going with the same direction until we hit either "block":
    // - the next element has already been visited
    // - we hit the edge (i.e. index out of order)
    
    // setup enum for direction
    const Direction = {
        Right: 0,
        Down: 1,
        Left: 2,
        Up: 3,
    };
    
    // setup a visited matrix
    const visitedElement = new Array(matrix.length);
    for (let ii=0; ii<visitedElement.length; ii++) {
        visitedElement[ii] = new Array(matrix[ii].length);
        visitedElement[ii].fill(false);
    }
    
    
    const canVisitNextElement = (currentRow, currentCol, currentDirection) => {
        if (currentDirection === Direction.Right) {
            return currentCol + 1 < visitedElement[currentRow].length && !visitedElement[currentRow][currentCol+1];
        } else if (currentDirection === Direction.Down) {
            return currentRow + 1 < visitedElement.length && !visitedElement[currentRow + 1][currentCol];
        } else if (currentDirection === Direction.Left) {
            return currentCol - 1 >= 0 && !visitedElement[currentRow][currentCol - 1];
        } else if (currentDirection === Direction.Up) {
            return currentRow - 1 >= 0 && !visitedElement[currentRow - 1][currentCol];
        }
        
        return false;
    }
    
    
    // start with right direction
    let currentDirection = Direction.Right;
    // start from top left
    let row = 0;
    let col = 0;
    // setup result
    const result = new Array();
    // stopping condition: when we change dir but element has already been visited or we're moving out of bounds 
    while (row >= 0 && col >= 0 && row < matrix.length && col < matrix[row].length && visitedElement[row][col] === false) { 
        result.push(matrix[row][col]);
        visitedElement[row][col] = true;
        
        // change direction if it's a blockage
        if (!canVisitNextElement(row, col, currentDirection)) {
          currentDirection = (currentDirection + 1) % 4;
        }
        
        if (currentDirection === Direction.Right) {
            col = col + 1;
        } else if (currentDirection === Direction.Down) {
            row = row + 1;
        } else if (currentDirection === Direction.Left) {
            col = col - 1;
        } else if (currentDirection === Direction.Up) {
            row = row - 1;
        }
    }
    
    return result;
};