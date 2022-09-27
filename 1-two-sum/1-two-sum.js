/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numberIndexMap = new Map();
    
    // store a hash map number -> its index
    for (let currentNumberIndex=0; currentNumberIndex<nums.length; currentNumberIndex++) {
        const currentNumber = nums[currentNumberIndex];
        // check if the corresponding number: target - index is already exist in hashmap
        const difference = target - currentNumber;
        if (numberIndexMap.has(difference)) {
            const correspondingNumberIndex = numberIndexMap.get(difference);
            return [correspondingNumberIndex, currentNumberIndex];
        }
        numberIndexMap.set(currentNumber, currentNumberIndex);
    }
    
    return [];
};