/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const sortedCandidates = candidates.slice().sort((a,b)=>a-b);
    console.log(sortedCandidates);
    const combinations = [];

    const generateCombinations = (currentIndex, currentCombination, currentSum) => {
        if (currentSum === target) {
            combinations.push(currentCombination);
            return;
        } else if (currentSum > target) {
            return;
        }
        let lastNumber = null;
        for (let idx=currentIndex+1; idx<sortedCandidates.length; idx++) {
            const nextCandidate = sortedCandidates[idx];
            if (lastNumber === null || nextCandidate !== lastNumber) {
                generateCombinations(idx, currentCombination.concat([nextCandidate]), currentSum + nextCandidate);
                // prevent duplicate combination
                lastNumber = nextCandidate;
            }
        }

    };
    generateCombinations(-1, [], 0); 

    return combinations;
};