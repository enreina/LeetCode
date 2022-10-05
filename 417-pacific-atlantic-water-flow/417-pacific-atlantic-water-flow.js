/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const OceanType = {
        Pacific: 0,
        Atlantic: 1,
    };
    
    // Improvement: memoized cells that's already known to be able to reach Pacific & Atlantic cell
    const reachedOcean = new Array(2);
    reachedOcean[OceanType.Pacific] = new Array(heights.length);
    reachedOcean[OceanType.Atlantic] = new Array(heights.length);
    for (let rowIndex = 0; rowIndex<heights.length; rowIndex++) {
        reachedOcean[OceanType.Pacific][rowIndex] = new Array(heights[rowIndex].length);
        reachedOcean[OceanType.Pacific][rowIndex].fill(null);
        reachedOcean[OceanType.Atlantic][rowIndex] = new Array(heights[rowIndex].length);
        reachedOcean[OceanType.Atlantic][rowIndex].fill(null);
    }
    
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
        // if (reachedOcean[oceanType][rowIndex][colIndex] !== null) {
        //     return reachedOcean[oceanType][rowIndex][colIndex];
        // }
        // if (visitedCells[rowIndex][colIndex]) {
        //     return reachedOcean[oceanType][rowIndex][colIndex];
        // }
        
        
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
        
        reachedOcean[oceanType][rowIndex][colIndex] = result;
        return result;
    };
    
    const results = new Array();
    heights.forEach((row, rowIndex) => {
       row.forEach((_, colIndex) => {
           // console.log(`checking ${rowIndex} ${colIndex}`)
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