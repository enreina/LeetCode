/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    // dynamic programming
    // numsSlices[length] = number of arithmetic slices 
    // length = 1 
    // -> numsSlices[1] = 0
    // length = 2 
    // -> numSlices[2] = 0
    // length = 3 
    // -> numSlices[3] =
    //      -> if nums[1] - nums[0] === nums[2] - nums[1] -> 1
    // -> numSlices[4] = 
    //      -> if nums[3] - nums[2] == nums[2] - nums[1]
    //      -> + (numSlices[3] + maxSequence - 2)
    //      -> 3
    // -> numSlices[5]
    // [1,2,3,4,5]
    // -> [1,2,3]; [2,3,4], [4,5,6], [1,2,3,4], [2,3,4,5], [1,2,3,4,5]
    // 3 + 3 = 6

    const numSlices = Array(nums.length+1);
    numSlices[0] = 0;
    numSlices[1] = 0;
    numSlices[2] = 0;
    let maxSequence = 2;
    for (let n=3; n <= nums.length; n++) {
        if (nums[n-1] - nums[n-2] === nums[n-2] - nums[n-3]) {
            maxSequence++;
            numSlices[n] = numSlices[n-1] + maxSequence - 2;
        } else {
            maxSequence = 2;
            numSlices[n] = numSlices[n-1];
        }
    };

    return numSlices[nums.length];    

};