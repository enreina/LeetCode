/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    // we first create an array of strings with length equals to num2 length
    // from the right side, each digit of num 2 is multiply by the top digit (also the right)\
    // and then concatenate to the string (add it to the array)
    // if the multiplication result exceeds 9, save it to be added for next top digit
    // every time we move the cursor on the left digits to the left i times, 
    // add i preceeding zeros to the string
    // then we sum all of the numbers in the array
    
    const num2Multiplications = new Array();
    
    for (let num2Cursor=1; num2Cursor<=num2.length; num2Cursor++) {
        const currentNum2Digit = Number.parseInt(num2.at(-1 * num2Cursor)); // -1 * so we start from the right
        let result = "";
        let savedNumberFromPrevDigit = 0;
        for (let num1Cursor=1; num1Cursor<=num1.length; num1Cursor++) {
            const currentNum1Digit = Number.parseInt(num1.at(-1 * num1Cursor));
            const multiplicationResult = currentNum2Digit * currentNum1Digit + savedNumberFromPrevDigit;
            savedNumberFromPrevDigit = Math.floor(multiplicationResult / 10);
            result = `${multiplicationResult % 10}${result}`;
        }
        const zeroSuffix = "0".repeat(num2Cursor - 1);
        result = `${result}${zeroSuffix}`;
        if (savedNumberFromPrevDigit > 0) {
            result = `${savedNumberFromPrevDigit}${result}`;
        }
        num2Multiplications.push(result);
    }
    
    // sum all of the numbers in num2Multiplications
    // number with most digits would be the last number in the array
    let savedNumberFromPrevDigit = 0;
    let result = '';
    for (let resultCursor=1; resultCursor<=num2Multiplications.at(-1).length; resultCursor++) {
        let resultForCurrentDigit = savedNumberFromPrevDigit;
        num2Multiplications.forEach((result) => {
            const currentResultDigit = result.at(-1 * resultCursor);
            if (currentResultDigit !== undefined) {
                resultForCurrentDigit += Number.parseInt(currentResultDigit);
            }
        });
        savedNumberFromPrevDigit = Math.floor(resultForCurrentDigit / 10);
        result = `${resultForCurrentDigit % 10}${result}`;
    }
    // add saved number to the front if exceeds 0
    if (savedNumberFromPrevDigit > 0) {
        result = `${savedNumberFromPrevDigit}${result}`;
    }
    // strip leading zeros
    let ii = 0; 
    while (result.at(ii) === "0" && ii < result.length - 1) {
        ii++;
    }
    return result.substring(ii);
};