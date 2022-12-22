/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    // create a mapping from number to array of possible characters
    const numToAlpha = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    };
    const combinations = [];

    const generateCombinations = (currentIndex, currentCombination) => {
        if (digits.length === 0) {
            return;
        }
        if (currentCombination.length === digits.length) {
            combinations.push(currentCombination);
            return;
        }
        const currentDigit = digits.charAt(currentIndex);
        const possibleChars = numToAlpha[currentDigit];
        for (let idx=0; idx<possibleChars.length; idx++) {
            const currentChar = possibleChars.charAt(idx);
            generateCombinations(currentIndex + 1, `${currentCombination}${currentChar}`);
        }
    }

    generateCombinations(0, "");

    return combinations;
};