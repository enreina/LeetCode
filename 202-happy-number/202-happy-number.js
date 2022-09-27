/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    // we simulate the process and loop until we end up in 1
    // we set the limit of the iteration to be 100 -- if it exceeds
    // and it stil doesn't end up to 1, we stop
    
    const sumSquareOfDigit = (number) => {
        const numberInStr = number.toString();
        let result = 0;
        for (let ii=0; ii<numberInStr.length; ii++) {
            const digit = Number.parseInt(numberInStr.charAt(ii));
            result += digit * digit;
        }
        return result;
    };
    
    // hash map approach; detecting cycle
    let newNumber = n;
    const seenNumbers = new Set();
    while (newNumber != 1 && !seenNumbers.has(newNumber)) {
        seenNumbers.add(newNumber);
        newNumber = sumSquareOfDigit(newNumber);
    }
    
    return newNumber === 1;
};