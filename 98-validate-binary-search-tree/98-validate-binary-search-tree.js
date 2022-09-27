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
var isValidBST = function(root) {
    // Recursive approach
    // base case: node is null
    // recursive case:
    //  - the value of left children is less than root value
    //  - left subtree is a binary search tree with root value as upper limit
    //. - the value of right children is less than root value
    //  - right subtree is a binary search tree with root value as lower limit
    // call recursive with root as upperlimit and lowerlimit
    
    // first time we call the function upperLimit & lowerLimit is null (infinity)
    // check if root value is between upper and lower limit
    // when we check the left subtree upper limit is root value
    // when we check the right subtree lower limit is root value
    
    const recursiveIsValidBST = (root, lowerLimit, upperLimit) => {
        if (root === null) {
            return true;
        }
        if (upperLimit !== null && root.val >= upperLimit) return false;
        if (lowerLimit !== null && root.val <= lowerLimit) return false;
        
        
        return recursiveIsValidBST(root.left, lowerLimit, root.val) && recursiveIsValidBST(root.right, root.val, upperLimit);
    };
    
    return recursiveIsValidBST(root, null, null);
};