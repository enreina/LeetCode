/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // calculate the length of the linked list
    let linkedListLen = 0;
    let currentNode = head;
    while (currentNode != null) {
        currentNode = currentNode.next;
        linkedListLen++;
    }
    
    // determine the middle of the list (ignore middle element)
    const middleOfTheList = Math.floor(linkedListLen / 2) - 1;
    const isOddLengthed = linkedListLen % 2 != 0;
    
    // push each element to stack until middle element
    const someStack = new Array();
    let currentIndex = 0;
    currentNode = head;
    while (currentIndex <= middleOfTheList) {
        someStack.push(currentNode.val);
        currentNode = currentNode.next;
        currentIndex++;
    }
    
    // exclude middle element if odd-lenghted
    if (isOddLengthed) currentNode = currentNode.next;
    
    // walk through the remaining elements; each time pop the stack and compare with the current element
    while (currentNode != null) {
        if (someStack.pop() !== currentNode.val) return false;
        currentNode = currentNode.next;
    }
        
    return true;
};