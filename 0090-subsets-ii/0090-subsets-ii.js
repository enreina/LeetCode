/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    // sort so duplicates are group together
    nums.sort((a,b) => a-b);
    const result = [];

    const generateSubsets = (nums, currentIndex, currentSubset) => {
        result.push(currentSubset);
        // const lastElement = currentSubset.length > 0 ? currentSubset.at(-1) : null;
        let lastElement = null;
        for (let idx=currentIndex+1; idx<nums.length; idx++) {
            if (lastElement === null || nums[idx] !== lastElement) { // ensures we skip the duplicates
                generateSubsets(nums, idx, currentSubset.concat([nums[idx]]));
                lastElement = nums[idx];
            }
        }
    }
    
    generateSubsets(nums, -1, []);
    
    return result;
};