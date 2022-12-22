/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    // start to find the first letter in board
    // walk through the neighboring cells
    // if the cell has different letter than the next letter -> backtrack
        // if we length of walked cells equal to word length, return true
    // return false by default
    
    const backtrackBoard = (currentIndex, row, col) => {
        if (board[row][col] === word.charAt(currentIndex)) {
            if (currentIndex === word.length - 1) {
                return true;
            }
            // mark as visited
            board[row][col] = "1";
            // walk through adjacent cells
            const dir = [[-1, 0], [0, 1], [1, 0], [0, -1]]; //up, right, down, left
            const foundPath = dir.find(([rowChange, colChange]) => {
                const newRow = row + rowChange;
                const newCol = col + colChange;
                if (newRow >= 0 && newRow < board.length && 
                    newCol >=0 && newCol < board[newRow].length) {
                    return backtrackBoard(currentIndex+1, newRow, newCol);
                } else {
                    return false;
                }
            });
            // reset visited
            board[row][col] = word.charAt(currentIndex);
            return !!foundPath;
        }

        return false;
    };
    
    let found = false;

    for (let row=0; row<board.length; row++) {
        for (let col=0; col<board[row].length; col++) {
            found = found || backtrackBoard(0, row, col);
        }
    }

    return found;
};  