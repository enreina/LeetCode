/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    // run through the string and everytime we found a number and [ (opening square bracket) we push
    // and then we found ] (closing square bracket) we pop the stack keeping the letters until we found the
    // opening square bracket again and the number n.
    // Then, we trasfrom the substring to be n * substring and return it to the stack.
    const stackedResult = new Array();
    let repeatNumber = null;
    let currentChar = null;
    for (let ii = 0; ii < s.length; ii++) {
        currentChar = s.charAt(ii);
        if (currentChar === "]") {
            let strToBeRepeated = "";
            currentChar = stackedResult.pop();
            while (currentChar !== "[") {
                strToBeRepeated = currentChar + strToBeRepeated;
                currentChar = stackedResult.pop();
            }
            // pop the number
            let repeatNumberStr = "";
            currentChar = stackedResult.pop();
            while (!isNaN(Number.parseInt(currentChar))) {
                repeatNumberStr = currentChar + repeatNumberStr;
                currentChar = stackedResult.pop();
            }
            // returning non-number back to stack
            stackedResult.push(currentChar);
            
            const repeatNumber = Number.parseInt(repeatNumberStr);
            const repeatedStr = strToBeRepeated.repeat(repeatNumber);
            for (let jj=0; jj<repeatedStr.length; jj++) {
                stackedResult.push(repeatedStr.charAt(jj));
            }
        } else {
            stackedResult.push(currentChar);
        }
    }
    
    return stackedResult.join("");
};