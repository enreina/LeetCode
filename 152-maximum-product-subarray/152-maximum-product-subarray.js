/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    // We keep track of the max product for n elements, which is between
    //  - The maximum from n-1 elements * the nth number
    //  - The minimum from n-1 elements * the nth number (this is in case a negative number times another negative can be the a maximum candidate)
    //  - The nth number itself
    // We keep track of th min product for n elements which is between all the above candidate as well
    const maxProduct = new Array(nums.length);
    const minProduct = new Array(nums.length);
    
    let currentMaxProduct = nums[0];
    let currentMinProduct = nums[0];
    let result = nums[0];
    
    for (let n=1; n<nums.length; n++) {
        const tempCurrentMaxProduct = currentMaxProduct;
        currentMaxProduct = Math.max(currentMaxProduct * nums[n], currentMinProduct * nums[n], nums[n]);
        currentMinProduct = Math.min(tempCurrentMaxProduct * nums[n], currentMinProduct * nums[n], nums[n]);
        result = Math.max(result, currentMaxProduct);
    }
    
    return result;
};
// The following solution was attempted but got Time Limit Exceeded as it has worst time complexity of O(n^2)
var maxProductTLE = function(nums) {
    // maxProductDP[0] => nums has one element, max product will be nums[0]
    // maxProductDP[1] => nums has two element, max product will be between nums[0], or nums[1], or nums[0] * nums[1]
    // maxProductDP[2] => nums has three elements, max product will be between
    //  - nums[0]
    //  - nums[1]
    //  - nums[0] * nums[1]
    //      the three above is equal to maxProductDP[1]
    //  - nums[2]
    //  - nums[1] * nums[2]
    //  - nums[0] * nums[1] * nums[2]
    // nums has four elements, max product will be between
    //  - maxProductDP[2]
    //  - nums[3]
    //  - nums[2] * nums[3]
    //  - nums[1] * nums[2] * nums[3]
    //  - nums[0] * nums[1] * nums[2] * nums[3]
    
    const maxProductDP = new Array(nums.length);
    maxProductDP[0] = nums[0];
    const accumulativeProduct = new Array(nums.length);
    
    for (let n=1; n<nums.length; n++) {
        maxProductDP[n] = maxProductDP[n-1];
        let product = 1;
        for (let ii=n; ii>=0; ii--) {
            product = product * nums[ii];
            maxProductDP[n] = Math.max(maxProductDP[n], product);
        }
    }
    
    return maxProductDP[nums.length - 1];
};