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
    
    // memoize tree height
    const memoizedTreeHeight = new Map();
    
    if (root === null) {
        return 0;
    }
    
    const calculateTreeHeight = (root) => {
        if (root === null) {
            return 0;
        }  
        
        if (!memoizedTreeHeight.has(root)) {
            memoizedTreeHeight.set(root, Math.max(calculateTreeHeight(root.left), calculateTreeHeight(root.right)) + 1);
        }
        
        return memoizedTreeHeight.get(root);
    };
    
    return Math.max(calculateTreeHeight(root.left) + calculateTreeHeight(root.right), diameterOfBinaryTree(root.left), diameterOfBinaryTree(root.right));
    
};