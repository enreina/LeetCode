/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // using two pointers:
    // - left pointer starts from beginning of array
    // - right pointer starts from end of array
    // sum the number pointed by left pointer and right pointer
    // - if sum > target, we move the right pointer to the left
    // - if sum < target, we move the left pointer to the right
    // - if sum === target return the indices
    
    let leftPointer = 0;
    let rightPointer = numbers.length -1;
    let sum = numbers[leftPointer] + numbers[rightPointer];
    while (sum !== target) {
        if (sum > target) {
            rightPointer--;
        } else if (sum < target) {
            leftPointer++;
        }
        sum = numbers[leftPointer] + numbers[rightPointer];
    }
    
    return [leftPointer+1, rightPointer+1];
};