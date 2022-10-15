/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    // recursive backtrack approach
    // base case: when we don't have any elements left to pick
    // induction:
    // - pick next element to pick from unpicked elements
    
    const result = [];
    
    const findPermutations = (availableElements, currentPermutation) => {
        if (availableElements.length === 0) {
            result.push(currentPermutation);
            return;
        }
        
        for (let ii=0; ii<availableElements.length; ii++) {
            findPermutations(
                availableElements.slice(0, ii).concat(availableElements.slice(ii+1)), 
                currentPermutation.concat(availableElements[ii])
            );
        }
    }
    
    findPermutations(nums, []);
    
    return result;
};