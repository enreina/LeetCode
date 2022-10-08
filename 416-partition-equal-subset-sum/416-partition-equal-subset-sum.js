/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    // early short circuit cases
    if (nums.length <= 1) {
        return false;
    }
    
    // sum the total of all number
    let targetSum = 0;
    nums.forEach((num) => {
        targetSum += num;
    })
    // if sum is an odd value, we can't make the subsets equal
    if (targetSum % 2 !== 0) {
        return false;
    }
    
    // for the sum to be equal divide it by 2
    targetSum = targetSum / 2;
    
    // can a subset of the first n series be sum to target sum?
    // Dynamic Programming approach: 
    // canPartitionDP[n][targetSum] represent weather we can get to target sum if we consider the first n elements of the array
    // base case:
    // - canPartitionDP[0][0] = true; 0 elements can be sum to 0
    // - canPartition[any>0][0] = false; as the number will be only positive, we can't sum it to 0
    // - canPartition[0][any>0] = false; if we don't have any element, we can't reach target sum more than 0
    // inductive case, we can get target sum either when: 
    // - we can get target sum from a subset of n-1 elements; or
    // - we can get (target sum - current number) from a subset of n-1 elements;
    
    // set up the array
    const canPartitionDP = new Array(nums.length + 1);
    for (let numIndex=0; numIndex<nums.length+1; numIndex++) {
        canPartitionDP[numIndex] = new Array(targetSum+1);
    };
    
    // fill the base cases
    canPartitionDP[0][0] = true;
    for (let numIndex=1; numIndex<nums.length+1; numIndex++) {
        canPartitionDP[numIndex][0] = false;
    }
    for (let sum=1; sum<targetSum+1; sum++) {
        canPartitionDP[0][sum] = false;
    }
    
    // gradually fill the DP array
    for (let numIndex=1; numIndex<nums.length+1; numIndex++) {
        for (let sum=1;sum<targetSum+1; sum++) {
            // inductive case 1: whether we can get target sum from a subset of n-1 elements
            canPartitionDP[numIndex][sum] = canPartitionDP[numIndex-1][sum];
            if (sum >= nums[numIndex-1]) {
                // inductive case 2: whether we can get (target sum - current number) from a subset of n-1 elements;
                // remember: current number is nums[numIndex - 1] as index starts from 0 in the nums arra
                canPartitionDP[numIndex][sum] = canPartitionDP[numIndex][sum] || canPartitionDP[numIndex-1][sum - nums[numIndex-1]];
            }
        }
    }
    
    return canPartitionDP[nums.length][targetSum];
    
};