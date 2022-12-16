/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    // start with left from first element
    let left = 0;
    let sum = 0;
    let minSize =  Number.POSITIVE_INFINITY;
    // increase the window gradually until we get nums >= target
    for (let idx=0; idx<nums.length; idx++) {
        sum += nums[idx];
        // reduce the size gradually
        while (sum >= target) {
            // we update the minimum window size
            minSize = Math.min(minSize, idx - left + 1);
            // we move the left side of the window to the right
            sum = sum - nums[left];
            left++;
        }
    }

    return minSize === Number.POSITIVE_INFINITY ? 0 : minSize;
};