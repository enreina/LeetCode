/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // create two pointers
    // - pointer A points to each index of array and move to the right
    // - pointer B points to the non-zero number and replaced the 0 (pointed by Pointer A) with these number accordingly
    
    let pointerA = 0;
    while (pointerA < nums.length) {
        let pointerB = pointerA;
        if (nums[pointerA] === 0) {
            // if the number pointed by pointer A is 0, we move pointer B until we found a non-zero number
            while (pointerB < nums.length && nums[pointerB] === 0) {
                pointerB++;
            }
            // replace the current 0 with the non-zero number found by pointer B
            // also make sure pointer B has not exceeded the array length; 
            //  in case the 0 pointed by pointer A is already at the end of array (thus we don't need to do anything)
            if (pointerB < nums.length) {
                nums[pointerA] = nums[pointerB];
                // we also need to replace the number on pointer B to 0 so 
                // when pointer A reaches that position. it'll be replaced by the next nearest non-zero number
                nums[pointerB] = 0;
            }
        }
        pointerA++;
    }
};