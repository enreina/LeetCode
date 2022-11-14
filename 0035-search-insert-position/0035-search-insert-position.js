/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // binary search
    
    let high = nums.length - 1;
    let low = 0;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            high = mid - 1;
            if (high < low) {
                return low;
            }
        } else if (nums[mid] < target) {
            low = mid + 1;
            if (low > high) {
                return low;
            }
        }
    }
};

/*
1 3 5 6; target 2
low = 0;
high = 3;
low <= high ? yes
mid = 3 / 2 = 1
nums[mid] = 3
high = mid - 1 = 0
low = 0
low <= high ? yes
mid = 0
nums[mid] = 1;
low = mid + 1 = 1
*/
