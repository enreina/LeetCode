/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const OceanType = {
        Pacific: 0,
        Atlantic: 1,
    };
    
    const visitedCells = new Array(heights.length);
    for (let rowIndex = 0; rowIndex<visitedCells.length; rowIndex++) {
        visitedCells[rowIndex] = new Array(heights[rowIndex].length);
    }
    const resetVisitedCells = () => {
        for (let rowIndex = 0; rowIndex<visitedCells.length; rowIndex++) {
            visitedCells[rowIndex].fill(false);
        }
    }
    resetVisitedCells();
    
    // DFS on each cell
    const isOceanReachable = (rowIndex, colIndex, oceanType) => {
        // console.log(`oceanType ${oceanType} row ${rowIndex} col ${colIndex}`);
        if (rowIndex < 0 || colIndex < 0) {
            return oceanType === OceanType.Pacific;
        }
        if (rowIndex >= heights.length || colIndex >= heights[rowIndex].length) {
            return oceanType === OceanType.Atlantic;
        }
        
        visitedCells[rowIndex][colIndex] = true;
        let result = false;
        // go up if water can flow
        if (rowIndex - 1 < 0 || 
            (!visitedCells[rowIndex-1][colIndex] && heights[rowIndex - 1][colIndex] <= heights[rowIndex][colIndex])) {
            result = result || isOceanReachable(rowIndex - 1, colIndex, oceanType);
        }
        // go right if water can flow
        if (colIndex + 1 >= heights[rowIndex].length || 
            (!visitedCells[rowIndex][colIndex + 1] && heights[rowIndex][colIndex + 1] <= heights[rowIndex][colIndex])) {
            result = result || isOceanReachable(rowIndex, colIndex + 1, oceanType);
        }
        // go down if water can flow
        if (rowIndex + 1 >= heights.length || 
            (!visitedCells[rowIndex + 1][colIndex] && heights[rowIndex + 1][colIndex] <= heights[rowIndex][colIndex])) {
            result = result || isOceanReachable(rowIndex + 1, colIndex, oceanType);
        }
        // go left if water can flow
        if (colIndex - 1 < 0 || 
            (!visitedCells[rowIndex][colIndex - 1] && heights[rowIndex][colIndex - 1] <= heights[rowIndex][colIndex])) {
            result = result || isOceanReachable(rowIndex, colIndex - 1, oceanType);
        }
        
        return result;
    };
    
    const results = new Array();
    heights.forEach((row, rowIndex) => {
       row.forEach((_, colIndex) => {
           const canReachPacific = isOceanReachable(rowIndex, colIndex, OceanType.Pacific);
           resetVisitedCells();
           const canReachAtlantic = isOceanReachable(rowIndex, colIndex, OceanType.Atlantic);
           resetVisitedCells();
           
           if (canReachPacific && canReachAtlantic) {
               results.push([rowIndex, colIndex]);
           }
       });
    });
    
    return results;
};