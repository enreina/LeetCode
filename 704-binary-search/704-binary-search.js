/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // binary search
    // we initialize the left most index and right most index of our search area
    let leftIndex = 0;
    let rightIndex = nums.length - 1;
    let middleIndex = -1;
    let found = false;
    // while search area has length (left < right)
    while (!found && leftIndex <= rightIndex) {
        // we calculate the middle = (right - left) / 2 + left
        middleIndex = Math.floor((rightIndex - leftIndex) / 2) + leftIndex;
        if (nums[middleIndex] === target) {
            found = true;
        } else if (nums[middleIndex] > target) {
            rightIndex = middleIndex - 1;
        } else if (nums[middleIndex] < target) {
            leftIndex = middleIndex + 1;
        }
    }
    
    return found ? middleIndex : -1;
};


