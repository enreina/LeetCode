/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // iterative approach
    // the LCA of p and q will lie between min(p, q) and max(p, q) (inclusive)
    // on the tree we can stop traversing if the direction (left or right) to search for p & q differs
    
    let candidateLCA = null;
    let currentNode = root;
    
    while (candidateLCA === null) {
        if (currentNode.val > p.val && currentNode.val > q.val) {
            currentNode = currentNode.left;
        } else if (currentNode.val < p.val && currentNode.val < q.val) {
            currentNode = currentNode.right;
        } else {
            candidateLCA = currentNode;
        }
    }
    
    return candidateLCA;
};