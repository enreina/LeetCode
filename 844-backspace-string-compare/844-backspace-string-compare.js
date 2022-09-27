/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const convertToTyped = (input) => {
        const typedArr = new Array();
        for (let ii = 0; ii < input.length; ii++) {
            const currentChar = input.charAt(ii);
            if (currentChar === "#") {
                typedArr.pop();
            } else {
                typedArr.push(currentChar);
            }
        }
        
        return typedArr.join('');
    };
    
    return convertToTyped(s) === convertToTyped(t);
    
};