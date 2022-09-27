/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    // starting from sr and sc, we can use DFS recursive approach to fill
    // in the four direction (up, left, right, down) if it's the same color with the staring pixel
    // base case: pixel is out of boundary or pixel color is not the same color
    // recursive case: pixel up, left, right, down is the same color with starting pixel
    
    // save the original color of the starting pixel
    const originalColor = image[sr][sc];
    
    // to-do: copy the array so we don't modify the original image
    const modifiedImage = image.map((row => row.map(x => x)));
                                    
    const floodFillRecursive = (rowIndex, colIndex, fillColor) => {
        // base case
        if (rowIndex >= modifiedImage.length || rowIndex < 0 || colIndex >= modifiedImage[0].length || colIndex < 0) {
            return;
        }
        if (modifiedImage[rowIndex][colIndex] !== originalColor || modifiedImage[rowIndex][colIndex] == fillColor) {
            return;
        }
        
        modifiedImage[rowIndex][colIndex] = fillColor;
        
        // recursive case, fill in 4 direction
        // up
        floodFillRecursive(rowIndex - 1, colIndex, fillColor);
        // down
        floodFillRecursive(rowIndex + 1, colIndex, fillColor);
        // left
        floodFillRecursive(rowIndex, colIndex - 1, fillColor);
        // right
        floodFillRecursive(rowIndex, colIndex + 1, fillColor);
    };
    
    floodFillRecursive(sr, sc, color);
    
    return modifiedImage;
    
};