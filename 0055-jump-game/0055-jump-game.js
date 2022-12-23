/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // for each num we mark the indexes that we can jump to
    const canJump = Array(nums.length);
    canJump.fill(false);
    canJump[0] = true;
    nums.forEach((currentMaxJump, currentIdx) => {
        if (canJump[currentIdx]) {
            for (let idx=currentIdx+1; idx<=Math.min(currentIdx+currentMaxJump, nums.length - 1); idx++) {
                canJump[idx] = true;
            }
        }
    });
    

    return canJump[nums.length - 1];
};