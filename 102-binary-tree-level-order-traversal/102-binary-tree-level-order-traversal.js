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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    // tracking the level
    // we store the node as key - value: node - level in the queue
    // every time we put a node in the queue, level equals to parent level + 1
    
    const results = new Array();
    if (root === null) return results;
    
    let currentLevel = -1;
    const visitingQueue = new Array();
    visitingQueue.push({node: root, level: 0});
  
    
    while (visitingQueue.length > 0) {
        // visit the first node in the queue
        const currentNodeWithLevel = visitingQueue.shift();
        const currentNode = currentNodeWithLevel.node;
        
        if (currentLevel != currentNodeWithLevel.level) {
            // this means we're visiting the next level
            // so we must create a new sub array, and increment the currentLevel
            results.push([]);
            currentLevel = currentLevel + 1;
        }
        results.at(-1).push(currentNode.val);
        
        // push left to queue with level + 1
        if (currentNode.left) {
            visitingQueue.push({node: currentNode.left, level: currentNodeWithLevel.level + 1});
        }
        // push right to queue
        if (currentNode.right) {
            visitingQueue.push({node: currentNode.right, level: currentNodeWithLevel.level + 1});
        }
    }
    
    return results;
};