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
var sortList = function(head) {
    const mergePart = (firstHead, secondHead) => {
        const newHead = new ListNode(null, null);
        let tail = newHead;
        
        while (firstHead != null && secondHead != null) {
            if (firstHead.val < secondHead.val) {
                tail.next = firstHead;
                firstHead = firstHead.next;
                tail = tail.next;
            } else {
                tail.next = secondHead;
                secondHead = secondHead.next;
                tail = tail.next;
            }
        }
        tail.next = firstHead !== null ? firstHead : secondHead;
        return newHead.next;
    };
    
    const mergeSort = (head) => {
        if (head === null || head.next === null) {
            return head;
        }
        
        // split the linked list into two parts by using two pointers
        let fastPointer = head;
        let slowPointer = null;
        while (fastPointer !== null && fastPointer.next !== null) {
            fastPointer = fastPointer.next.next;
            slowPointer = slowPointer === null ? head : slowPointer.next;
        }
        const midNode = slowPointer.next;
        slowPointer.next = null;
        
        // slowPointer would be pointing to the middle of the list
        const leftHead = mergeSort(head);
        const rightHead = mergeSort(midNode);
        
        return mergePart(leftHead, rightHead);
    }
    
    return mergeSort(head);
    
};