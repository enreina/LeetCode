/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    // we start with each candidate
    // use the candidate multiple times until we reach or exceed the target
    // when we exceed the target we backtrack (removing last element) and add next element instead
    // repeat until we evaluate each candidate
    
    // recursive approach
    // base case: when sum >= target
    // recursive case: pick one candidate + sum when picking the next candidate
    const result = [];
    
    // currentIndex makes sure we only take candidates from left to right
    // currentCombination keeps track on the current combination
    // currentSum is the sum of current combination
    const findCombinationSum = (currentIndex, currentCombination, currentSum) => {
        if (currentSum === target) {
            result.push(currentCombination);
            return;
        } else if (currentSum > target) {
            return;
        }
        // Backtrack through all candidates for next candidate
        for (let ii=currentIndex; ii<candidates.length; ii++) {
            const nextCandidate = candidates[ii];
            findCombinationSum(ii, currentCombination.concat([nextCandidate]), currentSum + nextCandidate);
        }
    }
    
    findCombinationSum(0, [], 0);
    
    return result;
};