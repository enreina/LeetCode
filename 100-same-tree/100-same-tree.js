/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // Recursive Approach
    // Base case:
    // - if p and q are both null they are the same
    // Recursive case, tree p and q are the same if: 
    // - both roots have the same value; and
    // - the left subtree of p and the left subtree of q are the same tree; and
    // - the right subtree of p and the right subtree of q are the same tree
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