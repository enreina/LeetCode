/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    // do a "divide & conquer"
    // take the mid element of nums, and create a node N of it
    // divide the nums to left side and right (excluding the mid element)
    // repeat divide & conquer on left side subarray; set the resulting node as the left subtree of node N
    // repeat divide & conquer on right side subarray; set the resulting node as the right subtree of node N
    // repeat until there is no element left when we divide the subarray
    
    
    const buildBST = (start, end) => {
        if (end < start) return null;
        
        const mid = Math.floor((start+end)/2);
        const node = new TreeNode(nums[mid], null, null);
        
        node.left = buildBST(start, mid-1);
        node.right = buildBST(mid+1, end);
        
        return node;
    }
    
    return buildBST(0, nums.length - 1);
};