/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function(grid) {
    // condition where the ball will fall down (move the ball accordingly)
    // - if the board spans to the right and the right cell's board also spans to the right
    //      - with this condition, we move the boll to right-downward cell
    // - if the board spands to the left and the left cell's board also spans to the left
    //      - with this condition, we move the ball to left downward cell
    // condition where the ball is stuck (mark as -1)
    // - if the board spans to the right, and right cell's board spans to the left
    // - if the board spans to the right and it's the rightmost cell of the grid
    // - if the board spans to the left, and the left cell's board spans to the right
    // - if the board spans to the left, and it's the leftmost cell of the grid
    
    const BoardDirection = {
        Right: 1,
        Left: -1,
    };
    
    // Dynamic programming approach
    // null means non-processed
    const memoizeResult = new Array();
    for (let ii=0; ii<grid.length; ii++) {
        memoizeResult[ii] = new Array(grid[ii].length);
        memoizeResult[ii].fill(null);
    }
    
    // recursive approach, base case when the ball is stuck or out of the box
    const willTheBallFall = (currentRow, currentCol) => {
        // base case
        // out of the grid, ball falls out of the bottom
        if (currentRow >= grid.length) {
            return currentCol;
        }
        
        if (grid[currentRow][currentCol] === BoardDirection.Right) {
            // the board spans to the right and it's the rightmost cell of the grid
            if (currentCol + 1 >= grid[currentRow].length) {
                memoizeResult[currentRow][currentCol] = -1;
            }
            // the board spans to the right, and right cell's board spans to the left
            if (grid[currentRow][currentCol + 1] === BoardDirection.Left) {
                memoizeResult[currentRow][currentCol] = -1;
            }
            // the board spans to the right and the right cell's board also spans to the right
            if (grid[currentRow][currentCol + 1] === BoardDirection.Right) {
                if (currentRow + 1 < grid.length && memoizeResult[currentRow + 1][currentCol + 1] !== null) {
                    memoizeResult[currentRow][currentCol] = memoizeResult[currentRow + 1][currentCol + 1];
                } else {
                    memoizeResult[currentRow][currentCol] = willTheBallFall(currentRow + 1, currentCol + 1);
                }
            }
        } else if (grid[currentRow][currentCol] === BoardDirection.Left) {
            // the board spans to the left, and it's the leftmost cell of the grid
            if (currentCol - 1 < 0) {
                memoizeResult[currentRow][currentCol] = -1;
            }
            // the board spans to the left, and the left cell's board spans to the right
            if (grid[currentRow][currentCol - 1] === BoardDirection.Right) {
                memoizeResult[currentRow][currentCol] = -1;
            }
            // the board spans to the left and the left cell's board also spans to the left
            if (grid[currentRow][currentCol - 1] === BoardDirection.Left) {
                if (currentRow + 1 < grid.length && memoizeResult[currentRow + 1][currentCol - 1] !== null) {
                    memoizeResult[currentRow][currentCol] = memoizeResult[currentRow + 1][currentCol - 1];
                } else {
                    memoizeResult[currentRow][currentCol] = willTheBallFall(currentRow + 1, currentCol - 1);
                }
            }
        }
        
        return memoizeResult[currentRow][currentCol];
    }
    
    const result = new Array();
    for (let ii = 0; ii<grid[0].length; ii++) {
        result.push(willTheBallFall(0, ii));
    }
    
    return result;
    
};