/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    // start from the middle
    // compare middle - 1, middle, and middle + 1
    // if nums[middle] > nums[middle-1] AND nums[middle] > nums[middle - 1] return this index
    // repeat -> find the peak on first half of array & find the peak on latter half of array

    const isMidPeak = (mid) => {
        return (mid - 1 < 0 || nums[mid] > nums[mid-1]) && (mid + 1 >= nums.length || nums[mid] > nums[mid+1]);
    }
    let left = 0;
    let right = nums.length - 1;
    let mid = Math.floor((left+right) / 2);
    while (left < right && !isMidPeak(mid)) {
        if (mid - 1 >= 0 && nums[mid-1]>nums[mid]) {
            // go to the left side of the array
            right = mid - 1;
        } else if (mid + 1 < nums.length && nums[mid+1] > nums[mid]) {
            // go the right side of the aray
            left = mid + 1;
        }  
        mid = Math.floor((left+right) / 2);
    }

    return mid;
};