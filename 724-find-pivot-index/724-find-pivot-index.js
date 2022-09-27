/**
 * @param {number[]} nums
 * @return {number}
*/

// more optimal solution by only calculating the sum of the left side
var pivotIndex = function(nums) {
    let sum = 0; leftSum = 0;
    nums.forEach((element) => sum += element);
    for (let i = 0; i < nums.length; i++) {
        let rightSum = sum - leftSum - nums[i];
        if (rightSum == leftSum) return i;
        leftSum += nums[i];
    }
    return -1;
}