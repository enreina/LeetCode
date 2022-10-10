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
var isSymmetric = function(root) {
    // a tree is symmetric if the tree is the same when flipped
    
    // first we create a flipped version of the tree
    const flipTree = (root) => {
        if (root === null) {
            return null;
        }
        const newRoot = new TreeNode(root.val);
        newRoot.left = flipTree(root.right);
        newRoot.right = flipTree(root.left);
        
        return newRoot;
    };
    
    const flippedTree = flipTree(root);
    
    // from https://leetcode.com/problems/same-tree/
    const isSameTree = (p, q) => {
        let sameTree = false;
        if (p !== null && q !== null) {
            sameTree = p.val === q.val
        } else if (p === null && q === null) {
            return true;
        }

        sameTree = sameTree && isSameTree(p.left, q.left);
        sameTree = sameTree && isSameTree(p.right, q.right);

        return sameTree;
    };
    
    // Compare the original tree and the flipped tree
    return isSameTree(root, flippedTree);
};