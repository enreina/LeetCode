/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    // Dynamic programming
    // maxLength[n] is the the maximum length of increasing subsuquence that includes nums[n-1]
    // numOFLIS[n] is the number of longest increasing subsequence that includes nums[n-1]
    // example: 1,3,5,4,7
    // numOFLIS[0] = 1; maxLength[0] = 0;
    // numOFLIS[1] = 1; maxLength[1] = 1
    // maxLength[2] = 
    //      -> for j=2..0
    //          find j such that maxLength[j] is max (j can be multiple)
    //      -> maxLength[2] is maxLength[j] + 1
    // numOfLIS[2] is the sum of maxLength[j] for all j
    
    // Solution derived from https://leetcode.com/problems/longest-increasing-subsequence/submissions/866049791/
    // Time Complexity: O(n^2)
    // Space complexity: O(n)
    const maxLength = new Array(nums.length + 1);
    const numOfLIS = new Array(nums.length + 1);
    maxLength[0] = 0; numOfLIS[0] = 1;
    maxLength[1] = 1; numOfLIS[1] = 1;
    let overallMaxLength = 1;
    for (let n=2; n<=nums.length; n++) {
        maxLength[n] = 1;
        numOfLIS[n] = 1;
        for (let prevIdx=n-2; prevIdx>=0; prevIdx--) {
            if (nums[n-1] > nums[prevIdx]) {
                if (maxLength[prevIdx+1] + 1 > maxLength[n]) {
                    numOfLIS[n] = numOfLIS[prevIdx+1];
                } else if (maxLength[prevIdx+1] + 1 === maxLength[n]) {
                    numOfLIS[n] += numOfLIS[prevIdx+1];
                }
                maxLength[n] = Math.max(maxLength[prevIdx+1] + 1, maxLength[n]);
            } 
        }
        overallMaxLength = Math.max(overallMaxLength, maxLength[n]);
    }

    let totalLIS = 0;
    for (let idx=0; idx<maxLength.length; idx++) {
        if (maxLength[idx] === overallMaxLength) {
            totalLIS += numOfLIS[idx];
        }
    }

    return totalLIS;
};