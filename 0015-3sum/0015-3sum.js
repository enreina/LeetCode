/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // -1 0 1 2 -1 -4
    // sorted:
    // -4 -1 -1 0 1 2
    // start with -4
    // try to find pairs from [-1 -1 0 1 2] that equals to 4
    // start with -1
    // try to find pairs from [-1 0 1 2] that equals to 1
    nums.sort((a, b) => a - b);

    const findPairsEqualsTo = (nums, target) => {
        const numsSet = new Set();
        const resultingPairs = [];
        const pairedNumbers = new Set();
        for (let idx=0; idx<nums.length; idx++) {
            const num = nums[idx];
            if (numsSet.has(target - num)) {
                if (!pairedNumbers.has(num)) {
                    resultingPairs.push([target - num, num]);
                    // makes sure we don't have duplicate pairs
                    pairedNumbers.add(num);
                }
            } else {
                numsSet.add(num);
            }
        };
        return resultingPairs;
    };
    
    const resultingTriplets = [];
    const alreadyCheckedNum = new Set();
    for (let idx=0; idx<nums.length; idx++) {
        const currentNum = nums[idx];
        if (!alreadyCheckedNum.has(currentNum)) {
            const matchingPairs = findPairsEqualsTo(nums.slice(idx+1), 0 - currentNum);
            matchingPairs.forEach((pair) => {
                resultingTriplets.push([currentNum].concat(pair));
            });
            // make sure we don't have duplicate triplets
            alreadyCheckedNum.add(currentNum);
        }
    }

    return resultingTriplets;
};