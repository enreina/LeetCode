/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // non-trivial solution: two pointer approach
    const result = new Array(nums.length);
    let leftPointer = 0;
    let rightPointer = nums.length - 1;
    let currentPointer = rightPointer;
    while (leftPointer <= rightPointer) {
        if (nums[leftPointer] ** 2 > nums[rightPointer] ** 2) {
            result[currentPointer] = nums[leftPointer] ** 2;
            currentPointer--;
            leftPointer++;
        } else {
            result[currentPointer] = nums[rightPointer] ** 2;
            currentPointer--;
            rightPointer--;
        }
    }
    
    return result;
    
    // trivial solution
    // square each number
    // const squaredNums = nums.map(x => x * x);
    // // sort the new array
    // squaredNums.sort((a, b) => a - b);
    // return squaredNums;
};