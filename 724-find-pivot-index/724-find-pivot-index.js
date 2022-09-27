/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    // One approach is to have two pointer and sum: 
    // - first one moves from left to right
    // - second one moves from right to left
    // Second approach is to loop from left to right for the pivot index
    // and then sum the left side and right side
    // check if the sum is equal; if equal returns the index
    // if not equal, increase the pivot index
    for (let i = 0; i < nums.length; i++) {
        let leftSide = nums.slice(0, i);
        let rightSide = nums.slice(i+1, nums.length);
        let sumLeft = 0;
        leftSide.forEach((element) => {
            sumLeft += element;
        });
        let sumRight = 0;
        rightSide.forEach((element) => {
            sumRight += element
        });
        if (sumLeft == sumRight) return i;
    }
    
    return -1;
};