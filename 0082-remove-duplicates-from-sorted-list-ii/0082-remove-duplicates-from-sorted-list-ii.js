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
var deleteDuplicates = function(head) {
    // two pointer
    // first pointer points to current node to compare
    // second pointer move to the right side of the current node until it founds a node with different value
    // if second pointer > first pointer, remove all nodes from first pointer until second node
    
    let prevOfFirstPointer = null;
    let firstPointer = head;
    let newHead = head;
    while (firstPointer !== null) {
        const currentVal = firstPointer.val;
        let secondPointer = firstPointer;
        while (secondPointer.next !== null && secondPointer.next.val === currentVal) {
            secondPointer = secondPointer.next;
        }
        // remove nodes if secondPointer does not point to the same node
        if (secondPointer !== firstPointer) {
            if (prevOfFirstPointer === null) {
                newHead = secondPointer.next;
            } else {
                prevOfFirstPointer.next = secondPointer.next;
            }
        } else {
            prevOfFirstPointer = firstPointer;
        }
        // move on to the next node as current node
        firstPointer = secondPointer.next;
    }

    return newHead;
};