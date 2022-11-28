/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // hashmap approach
    // Time: O(n); Space: O(n)
    let singleNumber;
    const set = new Set();
    nums.forEach((num) => {
        if (set.has(num)) {
            set.delete(num);
        } else {
            set.add(num);
        }
    });
    
    const setIter = set.values();
    return setIter.next().value;
    
};