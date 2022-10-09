/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    // sort the numbers in ascending order
    nums.sort((a,b) => (a-b));
    console.log(nums);
    
    // use each element as a fixed "center" value (except first and last element)
    // then choose the leftmost and rightmost element
    // calculate the sum, and depending on the difference with the target move the left and right pointer accordingly
    let minDifference = Number.POSITIVE_INFINITY;
    let sumClosestToTarget = null;
    
    for (let ii=1; ii<nums.length-1; ii++) {
        let leftPointer = 0;
        let rightPointer = nums.length - 1;
        while (leftPointer < ii && rightPointer > ii) {
            sum = nums[ii] + nums[leftPointer] + nums[rightPointer];
            if (sum > target) {
                rightPointer--;
            } else if (sum < target) {
                leftPointer++;
            } else {
                return sum;
            }
        }
        let difference = Math.abs(target - sum);
        
        if (difference < minDifference) {
            sumClosestToTarget = sum;
            minDifference = difference;
        }
    }
    
    return sumClosestToTarget;
};
