/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (!list1 && !list2) {
        return null;
    }
    // set cursor variables that point to the current node of each list
    var cursorOfList1 = list1;
    var cursorOfList2 = list2;
    // create the head of merged list
    var headOfMergedList;
    var cursorOfMergedList;
    
    // while we still have nodes from each list
    // c1 = null
    // c2 = 0
    
    // compare
    // if value of cursor of list1 is less than the value of list2 cursor
    //      set the current node of merged list as value of list1
    //      move cursor of list1 to its next node
    //      move the current node of merged list to its next node
    // else
    //      set the current node of merged list as value of list2
    //      move cursor of list2 to its next node
    //      move the current node of merged list to its next node
    
    while (cursorOfList1 !== null || cursorOfList2 !== null) {
        if (cursorOfList2 == null || cursorOfList1 !== null && cursorOfList1.val < cursorOfList2.val) {
            if (!cursorOfMergedList) {
                headOfMergedList = new ListNode(cursorOfList1.val, null);
                cursorOfMergedList = headOfMergedList;
            } else {
                cursorOfMergedList.next = new ListNode(cursorOfList1.val, null);
                cursorOfMergedList = cursorOfMergedList.next; 
            }
            cursorOfList1 = cursorOfList1.next;
        } else if (cursorOfList1 == null || cursorOfList2 !== null && cursorOfList2.val <= cursorOfList1.val) {
            if (!cursorOfMergedList) {
                headOfMergedList = new ListNode(cursorOfList2.val, null);
                cursorOfMergedList = headOfMergedList;
            } else {
                cursorOfMergedList.next = new ListNode(cursorOfList2.val, null);
                cursorOfMergedList = cursorOfMergedList.next; 
            }
            cursorOfList2 = cursorOfList2.next;
        }
        
    }
    
    return headOfMergedList;
};