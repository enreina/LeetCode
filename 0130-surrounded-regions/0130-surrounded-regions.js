/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    // scan border for 0 cells, for each of these cell run DFS to mark 0s as "don't flip"
    // scan for remaining 0 cells and flip them
    const isBorder = (row, col) => row === 0 || row === board.length - 1 || col === 0 || col === board[row].length - 1;
    const oCellsBorder = [];
    const visited = Array(board.length);
    for (let row=0; row<board.length; row++) {
        visited[row] = Array(board[row].length);
        visited[row].fill(false);
        for (let col=0; col<board[0].length; col++) {
            if (board[row][col] === "O" && isBorder(row, col)) {
                oCellsBorder.push([row, col]);
            }
        }
    }

    const runDFS = (row, col) => {
        if (visited[row][col]) return;
        visited[row][col] = true;
        // visit adjacent unvisited 0 cells
        const dir = [[0, -1], [-1, 0], [0, 1], [1, 0]];
        dir.forEach(([deltaRow, deltaCol]) => {
            const newRow = row + deltaRow;
            const newCol = col + deltaCol;
            if (newRow >= 0 && newRow < board.length && newCol >= 0 && newCol < board[newRow].length &&
                board[row][col] === "O" && !visited[newRow][newCol]) {
                    runDFS(newRow, newCol);
                }
        });
    }

    while (oCellsBorder.length > 0) {
        const [row, col] = oCellsBorder.shift();
        runDFS(row, col);
    }

    for (let row=0; row<board.length; row++) {
        for (let col=0; col<board[row].length; col++) {
            if (board[row][col] === "O" && !visited[row][col]) {
                board[row][col] = "X";
            }
        }
    }
    

    return board;
    
};