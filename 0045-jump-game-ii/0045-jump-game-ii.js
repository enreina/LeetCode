/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
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

    const minimumJump = Array(nums.length);
    minimumJump[nums.length - 1] = 0;
    for (let startIdx = nums.length - 2; startIdx>=0; startIdx--) {
        minimumJump[startIdx] = Number.POSITIVE_INFINITY;
        let nextIdx = Math.min(startIdx + nums[startIdx], nums.length - 1);
        while (nextIdx > startIdx) {
            minimumJump[startIdx] = Math.min(minimumJump[startIdx], 1 + minimumJump[nextIdx]);
            nextIdx--;
        }
        
    }

    return minimumJump[0];
};