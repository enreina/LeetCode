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
 * @return {number[]}
 */
var rightSideView = function(root) {
    // do a breadth first search, keeping track of node's level in the queue
    
    const result = [];
    const bfsQueue = [];
    if (root !== null) {
        bfsQueue.push({node: root, level: 0});
    }
    
    while(bfsQueue.length > 0) {
        const {node, level: currentLevel} = bfsQueue.shift();
        if (node.left !== null) {
            bfsQueue.push({node: node.left, level: currentLevel+1});
        } 
        if (node.right !== null) {
            bfsQueue.push({node: node.right, level: currentLevel+1});
        }
        
        
        // every time we're about to change "level" we add the latest node to the result
        const nextNode = bfsQueue[0];
        if (nextNode === undefined || nextNode.level > currentLevel) {
            result.push(node.val);
        }
    }
    
    return result;
    
};