/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    // Greedy Approach
    // [2, 3, 1, 1, 4]
    // reachable from 0 = [2, 3, 1]
    // reachable from 1 = [3, 1, 1, 4]

    let minimumJump = 0;
    let maxReachableIdx = 0; 
    let nextJumpIdx = 0;
    for (let idx = 0; idx < nums.length - 1; idx++) {
        maxReachableIdx = Math.max(maxReachableIdx, idx + nums[idx]);
        if (idx === nextJumpIdx) {
            minimumJump++;
            nextJumpIdx = maxReachableIdx;
        }
    }
    return minimumJump;

    // DP Approach
    // [2, 3, 1, 1, 4]
    // walk backwards from last index
    // [4] -> minimum jump = 0
    // [1, 4] -> minimum jump = 1
    // [1, 1, 4] -> minimum jump = 1 + minimum jump of ([1,4]) = 2
    // [3, 1, 1, 4] -> minimum jump between: 
    //                      1 + minimum jump of ([4]) = 1
    //                      1 + minimum jump of ([1, 4]) = 2
    //                      1 + minimum jump of ([1, 1, 4]) = 3
    //                      -> 1
    // [2, 3, 1, 1, 4] -> minimum jump between
    //                      1 + minimum jump of ([1, 1, 4]) = 3
    //                      1 + minimum jump of ([3, 1, 1, 4]) = 2

    // const minimumJump = Array(nums.length);
    // minimumJump[nums.length - 1] = 0;
    // for (let startIdx = nums.length - 2; startIdx>=0; startIdx--) {
    //     minimumJump[startIdx] = Number.POSITIVE_INFINITY;
    //     let nextIdx = Math.min(startIdx + nums[startIdx], nums.length - 1);
    //     while (nextIdx > startIdx) {
    //         minimumJump[startIdx] = Math.min(minimumJump[startIdx], 1 + minimumJump[nextIdx]);
    //         nextIdx--;
    //     }
        
    // }

    // return minimumJump[0];
};