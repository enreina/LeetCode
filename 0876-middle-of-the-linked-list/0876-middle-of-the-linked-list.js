/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    // count the length of the linked list
    // divide by 2 -> index of the middle node
    var currentNode = head;
    var listLength = 0;
    while (currentNode !== null) {
        listLength += 1;
        currentNode = currentNode.next;
    }
    let middleIndex = Math.floor(listLength / 2);
    
    var currentNodeIndex = -1;
    currentNode = head;
    
    while (currentNode !== null) {
        currentNodeIndex += 1;
        if (currentNodeIndex === middleIndex) {
            return currentNode;
        }
        currentNode = currentNode.next;
    }

    return null;
};