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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    // recursive approach
    // - invert the left subtree
    // - invert the right subtree
    // - swap the left and right subtree (right subtree become the left subtree, and vice versa)
    // return the head
    // base case when the root is null
    
    if (root === null) {
        return root;
    }
    
    // invert the left subtree
    const leftSubtree = invertTree(root.left);
    // invert the right subtree
    const rightSubtree = invertTree(root.right);
    // swap the subtree
    root.left = rightSubtree;
    root.right = leftSubtree;
    
    return root;
};