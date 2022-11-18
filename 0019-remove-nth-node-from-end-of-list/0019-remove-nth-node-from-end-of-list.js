/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // walk through the linked list until we found the tail (next === null)
    // calculate the length of the linked list as linkedListLen
    let linkedListLen = 0;
    let currentNode = head;
    while (currentNode !== null) {
        linkedListLen++;
        currentNode = currentNode.next;
    }
    
    // determine the index (from the head) of the nth element from the tail
    const targetIndex = linkedListLen - n;
    if (targetIndex === 0) {
        // An edge case where the removed element was the head
        // we should return the next element as the new head
        return head.next;
    }
    
    // walk again the linked list and remove the element by updating the
    // next from the previous node to the next node
    let currentNodeIndex = 0;
    currentNode = head;
    // we aim for the previous node of target node; thus the index we're looking for is targetIndex - 1
    while (currentNodeIndex < targetIndex - 1) {
        currentNode = currentNode.next;
        currentNodeIndex++;
    }
    
    if (currentNode.next === null) {
        // The edge case where the linked list contains only one element
        return null;
    }
    
    const nodeAfterTargetNode = currentNode.next.next;
    currentNode.next = nodeAfterTargetNode;
    
    return head;
}