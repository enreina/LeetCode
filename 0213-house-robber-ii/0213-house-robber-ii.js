/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // from https://leetcode.com/problems/house-robber/
    const findMaxNonCircular = (nums) => {
        if (!nums.length) {
            return 0;
        }
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

    return Math.max(
        nums[0] + findMaxNonCircular(nums.slice(2, nums.length - 1)), // if we rob first house
        nums[nums.length-1] + findMaxNonCircular(nums.slice(1, nums.length - 2)), // if we rob last house
        findMaxNonCircular(nums.slice(1, nums.length - 1)), // if we don't rob first & last house
    );
};