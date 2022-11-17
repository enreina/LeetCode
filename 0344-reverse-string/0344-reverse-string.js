/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // use two pointers: moves from left to right, and right to left
    // swap the character from both pointer until they meet in the middle of the string
    let leftPointer = 0;
    let rightPointer = s.length - 1;
    
    while (leftPointer < rightPointer) {
        const temp = s[leftPointer];
        s[leftPointer] = s[rightPointer];
        s[rightPointer] = temp;
        leftPointer++;
        rightPointer--;
    }
};