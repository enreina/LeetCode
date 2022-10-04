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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    // keep track of the currentIndex while traversing the tree using inorder traversal
    // when currentIndex reaches k-1 -> the current node is the kth smallest number
    
    let currentIndex = 0;
    let foundElement = null;
    const findKthElement = (node) => {
        if (node === null) {
            return;
        }
        
        findKthElement(node.left);
        if (currentIndex === k - 1) {
            foundElement = node.val;
        }
        currentIndex++;
        findKthElement(node.right);
    }
    findKthElement(root);
    
    return foundElement;
};