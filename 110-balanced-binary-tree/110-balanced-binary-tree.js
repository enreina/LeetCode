/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    // calculate the height of the left subtree
    // calculate the height of the right subtree
    // return true if height difference is <= 1 and both subtrees are balanced
    // return false otherwise
    
    const calculateTreeHeight = (root) => {
        // base case, root is null
        if (root === null) {
            return 0;
        }
        // height is 1 (the root) + the maximum height between the left and right subtree
        return 1 + Math.max(calculateTreeHeight(root.left), calculateTreeHeight(root.right));
    }
    
    if (root === null) {
        return true;
    }
    
    return isBalanced(root.left) && isBalanced(root.right) && Math.abs(calculateTreeHeight(root.left) - calculateTreeHeight(root.right)) <= 1;
};