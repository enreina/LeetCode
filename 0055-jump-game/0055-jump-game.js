/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // for each num we mark the indexes that we can jump to
    // complexity O(n^2)
    // const canJump = Array(nums.length);
    // canJump.fill(false);
    // canJump[0] = true;
    
    // nums.forEach((currentMaxJump, currentIdx) => {
    //     if (canJump[currentIdx]) {
    //         for (let idx=currentIdx+1; idx<=Math.min(currentIdx+currentMaxJump, nums.length - 1); idx++) {
    //             canJump[idx] = true;
    //         }
    //     }
    // });
    // 
    // return canJump[nums.length - 1];

    // Greedy: keep track of reachable maximum index
    // Time complexity: O(n)
    let maxIdx = 0;
    nums.forEach((currentMaxJump, currentIdx) => {
        if (currentIdx > maxIdx) {
            maxIdx = 0; // we reset max index if the current position is unreachable 
        } else {
            maxIdx = Math.max(maxIdx, currentIdx+currentMaxJump);
        }
    });

    return maxIdx >= nums.length - 1; 

    
};