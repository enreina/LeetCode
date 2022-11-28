/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // xor approach
    // Time: O(n); Space: O(1)
    let xorResult = 0;
    nums.forEach((num) => {
        xorResult = xorResult ^ num;
    });
    
    return xorResult;
    
    // hashmap approach
    // Time: O(n); Space: O(n)
//     let singleNumber;
//     const set = new Set();
//     nums.forEach((num) => {
//         if (set.has(num)) {
//             set.delete(num);
//         } else {
//             set.add(num);
//         }
//     });
    
//     const setIter = set.values();
//     return setIter.next().value;
};