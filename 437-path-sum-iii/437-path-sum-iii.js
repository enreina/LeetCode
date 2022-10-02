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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    // double-layered recursive approach
    // traverse the tree using DFS
    // for each node, traverse (again) and count the number of paths that equals to targetSum
    
    let numberOfPaths = 0;
    
    const calculateNumOfPaths = (root, currentSum) => {
        if (root === null) return;
        if (currentSum + root.val === targetSum) numberOfPaths++;
        
        if (root.left) {
            calculateNumOfPaths(root.left, currentSum + root.val);
        }
        if (root.right) {
            calculateNumOfPaths(root.right, currentSum + root.val);
        }
    };
    
    const traverseTree = (root) => {
        if (root === null) return;
        calculateNumOfPaths(root, 0);
        
        if (root.left) {
            traverseTree(root.left);
        }
        if (root.right) {
            traverseTree(root.right);
        }
    };
    
    traverseTree(root);
    return numberOfPaths;
};