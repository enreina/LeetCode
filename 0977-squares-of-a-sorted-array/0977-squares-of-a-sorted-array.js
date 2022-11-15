/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // trivial solution
    // square each number
    const squaredNums = nums.map(x => x * x);
    // sort the new array
    squaredNums.sort((a, b) => a - b);
    return squaredNums;
};