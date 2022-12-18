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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    const isEqual = (rootA, rootB) => {
        if (rootA === null && rootB === null) {
            return true;
        }
        if (rootA === null) {
            return false;
        }
        if (rootB === null) {
            return false;
        }
        return rootA.val === rootB.val && isEqual(rootA.left, rootB.left) && isEqual(rootA.right, rootB.right);
    };

    if (isEqual(root, subRoot)) {
        return true;
    }
    if (root !== null) {
        return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
    } else {
        return false;
    }
};