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
var reverseList = function(head) {
    // keep a cursor to track current node of original list
    var currentNodeOriginalList = head;
    // keep a cursor to track current head of reversed List (initially null)
    var currentHeadReversedList = null;
    
    // repeat until current node of original list is null
    while (currentNodeOriginalList !== null) {
        // create a new head for the reversed list with
        //  - value of current node of original list
        //  - next is the current head of reversed list
        var newHeadReversedList = new ListNode(currentNodeOriginalList.val, currentHeadReversedList);
        // update cursor current head of reversed list to the new node
        currentHeadReversedList = newHeadReversedList;
        // move cursor of original list
        currentNodeOriginalList = currentNodeOriginalList.next;
    }
    
    return currentHeadReversedList;
};


// recursive approach
// var reverseList = function(head) {
//     if (head == null || head.next == null) {
//         return head;
//     }
//     var rest = reverseList(head.next);
//     head.next.next = head;
//     head.next = null;
    
//     return rest;   
// }
