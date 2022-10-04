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
 */
var BSTIterator = function(root) {
    this.stack = new Array();
    let currentNode = root;
    while (currentNode !== null) {
        this.stack.push(currentNode);
        currentNode = currentNode.left;
    }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    if (this.stack.length > 0) {
        const nodeToBeReturned = this.stack.pop();
        let currentNode = nodeToBeReturned;
        currentNode = currentNode.right;
        while (currentNode !== null) {
            this.stack.push(currentNode);
            currentNode = currentNode.left;
        }
        return nodeToBeReturned.val;
    }
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.stack.length > 0;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */