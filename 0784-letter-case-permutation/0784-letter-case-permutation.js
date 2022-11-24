/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    
    const result = [];
    
    const permutationHelper = (currentIndex, permutation) => {
        if (currentIndex === s.length) {
            result.push(permutation);
            return;
        } 
        
        const currentChar = s.charAt(currentIndex);
        if (Number.isNaN(Number.parseInt(currentChar))) {
            // for every letter there would be two option: change the case or not
            permutationHelper(currentIndex+1, `${permutation}${currentChar.toUpperCase()}`);
            permutationHelper(currentIndex+1, `${permutation}${currentChar.toLowerCase()}`);
        } else {
            // for digit, remain as it is
            permutationHelper(currentIndex+1, `${permutation}${currentChar}`);
        }
    };
    
    permutationHelper(0, "");
    
    return result;
};