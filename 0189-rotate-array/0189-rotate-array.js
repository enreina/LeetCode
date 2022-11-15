/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // create a temporary array to store original array
    const tempArray = nums.map(x => x);
    // calculate position shift
    const shift = nums.length - (k % nums.length);
    for (let idx=0; idx<nums.length; idx++) {
        const targetIdx = (idx + shift) % nums.length
        nums[idx] = tempArray[targetIdx];
    }
}

// n = 3
// k = 3
// shift = 0
// [1, 2, 3]
// rotate 1 = [3, 1, 2]
// rotate 2 = [2, 3, 1]
// rotate 3 = [1, 2, 3]

// n = 2
// k = 3
// shift = 1
// [1, 2]
// rotate 1 = [2, 1]
// rotate 2 = [1, 2]
// rotate 3 = [2, 1]

// n = 7
// k = 3 
// shift = n - (k % n) = 4
