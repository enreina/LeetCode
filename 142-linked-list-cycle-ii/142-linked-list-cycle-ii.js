/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    // create a map to store walked node
    // we walk through the linked list node and store each node to a map
    // for each node, we check if it's already visited before in hash map
    // if it does then it's start of the cycle
    
    let nodeMap = new Map();
    var currentNode = head;
    var currentIndex = -1;
    var startOfCycle = null;
    
    while (currentNode != null && startOfCycle == null) {
        currentIndex += 1;
        if (nodeMap.has(currentNode)) {
            startOfCycle = currentNode;
        } else {
            nodeMap.set(currentNode, currentIndex);
            currentNode = currentNode.next;
        }
    }

    return startOfCycle;
};