/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // similar to https://leetcode.com/problems/min-cost-climbing-stairs/
    // remember index of nums starts from 0
    // base case: 
    // - when we have 1 house, the max is nums[0]
    // - when we have 2 houses, the max is the maximum between nums[0] and nums[1]
    // induction case:
    // - When we have n houses, max will be between
    //      - robbing the nth house, meaning we'll get nums[n-1] + the maximum amount we get from robbing the (n-2) houses
    //      - not robbing the nth house, meaning we'll get the amount we get when we have n-1 house
    
    if (nums.length === 1) {
        return nums[0];
    }
    
    const maxAmount = [];
    maxAmount[0] = nums[0];
    maxAmount[1] = Math.max(nums[0], nums[1]);
    
    for (let houseNumber=2; houseNumber<nums.length; houseNumber++) {
        maxAmount[houseNumber] = Math.max(nums[houseNumber] + maxAmount[houseNumber-2], maxAmount[houseNumber-1]);
    }
    // console.log(maxAmount);
    return maxAmount[nums.length-1];
};