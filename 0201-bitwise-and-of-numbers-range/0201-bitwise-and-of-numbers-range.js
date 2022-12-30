/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
    let tempLeft = left;
    let tempRight = right;
    let pad =0;
    while (tempLeft != tempRight) {
        tempLeft >>= 1;
        tempRight >>= 1;
        pad++;
    }

    return tempLeft <<= pad;
};