/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    // to find the min index we can have a two pointer
    // left -> points to the left most element
    // right -> points to the right most element
    // check the middle element; 
    // -> if it's less than the right most element, then the minimum number would be on the left
    // -> if it's more than the right most element, then the minimum number would be on the right half

    // [ 3 4 5 1 2]
    // 5 is more than 2 so we move the search range to [1 2]
    // 1 is less than 2 so we move the search range to [1]
    // minumum number is 1

    // another example
    // [11, 13, 15, 17]
    // 13 is less than 17, we move the search range [11, 13]
    // 11 is less than 13, we move the search range to [11]

    let left = 0;
    let right = nums.length - 1;
    let mid = Math.floor((left+right)/2);
    while (left < right) {
        if (nums[mid] < nums[right]) {
            right = mid;
        } else if (nums[mid] > nums[right]) {
            left = mid + 1;
        }
        mid = Math.floor((left+right)/2);
    }

    return nums[mid];
};