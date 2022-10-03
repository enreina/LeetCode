/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // Binary Seach
    // First get the middle row of the matrix (i.e. index = number of rows / 2)
    // compare the first element of the row with the target
    //      - if element is more than the target -> reduce search area to first half of the matrix rows
    //      - if element is less than the target -> reduce search area to later half of the matrix rows
    //      - if element equals to the target, return true
    // repeat until we're left with only one row
    // Then, get the middle of the row (i.e. index = number of cols / 2)\
    // compare the element of the row with the target
    //      - if element is more than the target -> reduce search area to first half of the row
    //      - if element is less than the target -> reduce search area to later half of the row
    //      - if element equals to the target, return true
    // repeat until we're left with only one element (return false if no matching element found)
    
    const binarySearchRow = (startRow, endRow) => {
        if (endRow < startRow || startRow >= matrix.length) {
            return -1;
        }
        
        const midRow = startRow + Math.floor((endRow - startRow) / 2);
        const headElement = matrix[midRow][0];
        if (headElement > target) {
            return binarySearchRow(startRow, midRow - 1);
        } else if (headElement < target) {
            if (midRow + 1 >= matrix.length) {
                return midRow;
            } else if (matrix[midRow + 1][0] > target) {
                return midRow;
            } else {
                return binarySearchRow(midRow + 1, endRow);
            }
        } else {
            return midRow;
        }
    };
    
    const foundRow = binarySearchRow(0, matrix.length);
    // console.log(foundRow);
    if (foundRow === -1) {
        return false;
    }
    
    const binarySearchCol = (startCol, endCol) => {
        if (endCol < startCol || startCol >= matrix[foundRow].length) {
            return false;
        }
        
        const midCol = startCol + Math.floor((endCol - startCol) / 2);
        const element = matrix[foundRow][midCol];
        if (element > target) {
            return binarySearchCol(startCol, midCol - 1);
        } else if (element < target) {
            return binarySearchCol(midCol + 1, endCol);
        } else {
            return true;
        }
    };
    
    return binarySearchCol(0, matrix[foundRow].length);
};