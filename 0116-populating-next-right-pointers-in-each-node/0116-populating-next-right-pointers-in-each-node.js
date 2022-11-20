/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (root === null) {
        return root;
    }
    
    const bfsQueue = [];
    // run BFS, keeping track of current level + previously visited node
    let prevNodeWithLevel = null;
    bfsQueue.push({node: root, level: 0});
    while (bfsQueue.length > 0) {
        const {node: currentNode, level: currentLevel} = bfsQueue.shift();
        // connect the next pointer of prev node if it's on the same level
        if (prevNodeWithLevel && prevNodeWithLevel.level === currentLevel) {
            const {node: prevNode} = prevNodeWithLevel;
            prevNode.next = currentNode;
        }
        // update prevNode to current node
        prevNodeWithLevel = {node: currentNode, level: currentLevel};
        
        // push left and right child node to queue with their level
        if (currentNode.left) {
            bfsQueue.push({node: currentNode.left, level: currentLevel+1});
        }
        if (currentNode.right) {
            bfsQueue.push({node: currentNode.right, level: currentLevel+1});
        }
    }
    
    return root;
};