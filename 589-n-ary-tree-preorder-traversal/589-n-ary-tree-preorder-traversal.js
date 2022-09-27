/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    // Depth First search -- iterative version
    const visitedValues = new Array();
    const visitingStack = new Array();
    
    visitingStack.push(root);
    while (visitingStack.length) {
        const currentNode = visitingStack.pop();
        if (currentNode === null) continue; 
        
        visitedValues.push(currentNode.val);
        
        currentNode.children.slice().reverse().forEach((childNode) => {
            visitingStack.push(childNode);
        });
    }
    
    
    return visitedValues;
};