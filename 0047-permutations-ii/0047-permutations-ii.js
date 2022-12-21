/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {

    const permutations = [];
    const generatePermutation = (numsLeft, currentPermutation) => {
        if (currentPermutation.length === nums.length) {
            permutations.push(currentPermutation);
            return;
        }
        let lastNumber = null;
        for (let idx=0; idx < numsLeft.length; idx++) {
            if (lastNumber === null || numsLeft[idx] !== lastNumber) {
                const updatedNumsLeft = numsLeft.slice(0, idx).concat(numsLeft.slice(idx+1));
                generatePermutation(updatedNumsLeft, currentPermutation.concat([numsLeft[idx]]));
                // prevents duplicates
                lastNumber = numsLeft[idx];
            }
        }
    };
    // slice the nums so we don't modify input param
    // sort the nums to group same number together; so we can use it to discard duplicate permutation
    generatePermutation(nums.slice().sort((a,b) => a - b), []);

    return permutations;
};