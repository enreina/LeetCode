/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    // start with size = 1 and start index 0, enlarge the window until the product exceeds k
    // move the window to start index 1, again with window size 1, repeat the process
    let numSubarray = 0;
    let startIndex = 0;
    while (startIndex < nums.length) {
        let product = nums[startIndex];
        if (product < k) {
            numSubarray++;
        }

        let rightIndex = startIndex + 1;
        while (rightIndex < nums.length && product < k) {
            product = product * nums[rightIndex];
            if (product < k) {
                numSubarray++;
            }
            rightIndex++;
        }
        startIndex++;
    }

    return numSubarray;
};