/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var resultingSum = [];
    if (nums.length == 0) return resultingSum;
    // first we set the initial running sum to 0
    var currentSum = 0;
    nums.forEach((element) => {
        // for each element in nums, we accumulate into currentSum
        currentSum += element;
        // then we push the sum to the resultingSum array
        resultingSum.push(currentSum); 
    });
    return resultingSum;
};