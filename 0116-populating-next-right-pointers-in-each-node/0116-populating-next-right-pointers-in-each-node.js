/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/** Constant Space Approach; Level Order Traversal while connecting next pointer **/
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (root === null) {
        return root;
    }
    
    let levelStartNode = root;
    while (levelStartNode !== null) {
        let currentNode = levelStartNode;
        while (currentNode !== null) {
            // connect their left and right children
            if (currentNode.left && currentNode.right) {
                currentNode.left.next = currentNode.right;
            }
            // connect the right child with the left child of the next node
            if (currentNode.right && currentNode.next) {
                currentNode.right.next = currentNode.next.left;
            }
            currentNode = currentNode.next;
        }
        // move to the next level
        levelStartNode = levelStartNode.left;
    }
    
    return root;
};


/** BFS with Queue Approach; Keeping track of previously visited node and their level **/
/**
 * @param {Node} root
 * @return {Node}
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
*/