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
var oddEvenList = function(head) {
    if (head === null) return null;
    
    // store the second node
    const headOfEvenNode = head.next;
    let currentOddNode = head;
    let currentEvenNode = null;
    
    while (currentOddNode.next !== null) {
        currentEvenNode = currentOddNode.next;
        currentOddNode.next = currentOddNode.next.next;
        if (currentOddNode.next !== null) {
            currentOddNode = currentOddNode.next;
        }
        
        if (currentEvenNode.next !== null) {
            currentEvenNode.next = currentEvenNode.next.next;
            currentEvenNode = currentEvenNode.next;
        }
    }
    
    currentOddNode.next = headOfEvenNode;
    
    return head;
};