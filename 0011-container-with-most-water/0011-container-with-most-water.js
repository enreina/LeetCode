/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) { 
    // setup leftPointer to point at 0
    // setup rightPointer to point at height.length - 1
    // calculate the container size
    // if height[leftPointer] <= height[rightPointer], move leftPointer to the right
    // if height[rightPointer] < height[leftPointer], move rightPointer to the left
    // repeat until left >= right

    let leftPointer = 0;
    let rightPointer = height.length - 1;
    let maxContainerSize = 0;
    while (leftPointer < rightPointer) {
        maxContainerSize = Math.max(maxContainerSize,
            (rightPointer - leftPointer) * Math.min(height[leftPointer], height[rightPointer]));
        if (height[leftPointer] <= height[rightPointer]) {
            leftPointer++;
        } else {
            rightPointer--;
        }
    }
    
    return maxContainerSize;
};