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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    // The longest path that would pass through root woulbe the sum of:
    //  - path length from root to deepest node of left subtree -- it would be height of left subtree
    //  - path length from root to deepest node of right subtree -- it would be height of right subtree
    // Diameter of the tree thus would be, the maximum of:
    // - longest path that would pass through root
    // - longest path that would pass root.left
    // - longest path that would pass root.right
    
    if (root === null) {
        return 0;
    }
    
    const calculateTreeHeight = (root) => {
        if (root === null) {
            return 0;
        }  
        
        return 1 + Math.max(calculateTreeHeight(root.left), calculateTreeHeight(root.right));
    };
    
    return Math.max(calculateTreeHeight(root.left) + calculateTreeHeight(root.right), diameterOfBinaryTree(root.left), diameterOfBinaryTree(root.right));
    
};