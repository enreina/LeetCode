/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // set range of binary search
    let leftIdx = 0;
    let rightIdx = nums.length - 1;
    // find middle index
    let midIdx;
    let foundIdx = -1;
    // run binary search; time complexity O(log n)
    while (leftIdx <= rightIdx && foundIdx === -1) {
        midIdx = Math.floor((leftIdx + rightIdx) / 2);
        if (target > nums[midIdx]) {
            // we move the search range to the right half of current range
            leftIdx = midIdx + 1;
        } else if (target < nums[midIdx]) {
            // we move the search range to the left half of current range
            rightIdx = midIdx - 1;
        } else {
            // we found the target
            foundIdx = midIdx;
        }
    }
    // immediately return [-1, -1] when target was not found
    if (foundIdx === -1) {
        return [foundIdx, foundIdx];
    } else {
        // extend the range leftside & rightside until element != target
        // Time complexity: O(n)
        leftIdx = foundIdx;
        rightIdx = foundIdx;
        while (leftIdx > 0 && nums[leftIdx-1] === target) {
            leftIdx--;
        }
        while (rightIdx < nums.length - 1 && nums[rightIdx+1] === target) {
            rightIdx++;
        }
        return [leftIdx, rightIdx];
    }
};