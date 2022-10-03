/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // double binary search
    // first we found the pivot index
    const findPivotIndex = (startIndex, endIndex) => {
        if (startIndex === endIndex) {
            return startIndex;
        }
        
        const midIndex = startIndex + Math.floor((endIndex - startIndex)/2);
        if (nums[midIndex] > nums[endIndex]) {
            return findPivotIndex(midIndex + 1, endIndex);
        } else {
            return findPivotIndex(startIndex, midIndex);
        }
    };
    const pivotIndex = findPivotIndex(0, nums.length - 1);
    
    const findTargetElement = (startIndex, endIndex) => {
        if (endIndex < startIndex) {
            return -1;
        }
        const midIndex = startIndex + Math.floor((endIndex - startIndex)/2);
        const midIndexShifted = (midIndex + pivotIndex) % nums.length;
        
        if (nums[midIndexShifted] > target) {
            return findTargetElement(startIndex, midIndex - 1);
        } else if (nums[midIndexShifted] < target) {
            return findTargetElement(midIndex + 1, endIndex);
        } else {
            return midIndexShifted;
        }
        
    }
    
    return findTargetElement(0, nums.length - 1);
    
};