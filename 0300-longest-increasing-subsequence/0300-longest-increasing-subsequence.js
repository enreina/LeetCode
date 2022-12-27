/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // Dynamic Programming
    // Example: [10,9,2,5,3,7,101,18]
    // Define: maxLength[n] is the longest strictly increasing subsequence of array with length n
    // maxLength[0] = 0
    // maxLength[1] = 1
    // maxLength[2] = 1
    //     -> by default it's 1 (subsequence only contains nums[1])
    //     -> search the max from previous maxLength where nums[1] > nums[j]
    //          -> nums[1] < nums[0] so it's none
    // maxLength[3] = 1
    //     -> by default it's 1 (subsequence only contains nums[2])
    //     -> from j=1..0 search the maxLength[j] where nums[2] > nums[j]
    //          -> none as for all j, nums[2] <= nums[j]
    // maxLength[4]
    //     -> by default it's 1 (subsequence only contains nums[3])   
    //     -> from j=2..0 search the maxLength[j] where nums[3] > nums[j]
    //          -> nums[3] > nums[2] -> thus maxLength[4] = 1 + maxLength[3] = 2
    // result is all the max over maxLength[0...n]
    // time complexity = O(n^2)
    // space complexity = O(n)

    const maxLength = new Array(nums.length + 1);
    maxLength[0] = 0;
    maxLength[1] = 1;
    let overallMaxLength = maxLength[1];
    for (let n=2; n<=nums.length; n++) {
        maxLength[n] = 1;
        for (let prevIdx=n-2; prevIdx>=0; prevIdx--) {
            if (nums[n-1] > nums[prevIdx]) {
                maxLength[n] = Math.max(maxLength[prevIdx+1] + 1, maxLength[n]);
            } 
        }
        overallMaxLength = Math.max(maxLength[n], overallMaxLength);
    }

    return overallMaxLength;
};