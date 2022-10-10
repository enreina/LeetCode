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