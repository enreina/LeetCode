/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    const bitArray = new Array(32).fill(0);
    let arrayIdx = 0;
    while (n > 0) {
        if (n % 2 === 1) {
            bitArray[arrayIdx] = 1;
        } else {
            bitArray[arrayIdx] = 0;
        }
        
        n = Math.floor(n/2);
        arrayIdx++;
    }
    
    let result = 0;
    let binaryPlace = 0;
    for (let idx=bitArray.length-1; idx>=0; idx--) {
        if (bitArray[idx] === 1) {
            result += Math.pow(2, binaryPlace);
        }
        binaryPlace++;
    }
    return result;
}