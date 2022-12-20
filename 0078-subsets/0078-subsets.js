/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [];

    const generateSubset = (nums, currentIndex, currentSubset) => {
        result.push(currentSubset);

        for (let idx=currentIndex+1; idx<nums.length; idx++) {
            generateSubset(nums, idx, currentSubset.concat([nums[idx]]));
        }
    } 

    generateSubset(nums, -1, []);

    return result;
};