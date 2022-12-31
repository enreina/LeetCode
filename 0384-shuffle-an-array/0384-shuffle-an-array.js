/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.originalNums = nums;
    this.nums = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    this.nums = this.originalNums;
    return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    const shuffledNums = new Array();
    let numsLeft = this.nums.slice();
    while (numsLeft.length > 0) {
        // pick a random number from numsLeft
        const randomIdx = Math.floor(Math.random() * numsLeft.length);
        shuffledNums.push(numsLeft[randomIdx]);
        numsLeft.splice(randomIdx, 1); // remove the picked number from numsLeft
    }
    this.nums = shuffledNums;
    return this.nums;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */