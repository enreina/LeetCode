/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: Node | null): Node | null {
    if (!root) return root;
    let currentNode = root;
    while (currentNode) {
        let nextLevelNode = currentNode.left ? currentNode.left : currentNode.right;
        let cursorNode = currentNode.next;
        // find the first non-null child from currentNode or node from the same level
        while (!nextLevelNode && cursorNode) {
            nextLevelNode = cursorNode.left ? cursorNode.left : cursorNode.right;
            cursorNode = cursorNode.next;
        }

        while (currentNode) {
            // find the first non-null node next to the left child of current node
            if (currentNode.left) {
                // find the next node for left node
                let candidateNextNode = currentNode.right;
                cursorNode = currentNode.next;
                while (!candidateNextNode && cursorNode) {
                    candidateNextNode = cursorNode.left ? cursorNode.left : cursorNode.right;
                    cursorNode = cursorNode.next;
                }
                currentNode.left.next = candidateNextNode;
            }
            // find the first non-null node next to the right child of current node
            if (currentNode.right) {
                let candidateNextNode = null;
                cursorNode = currentNode.next;
                while (!candidateNextNode && cursorNode) {
                    candidateNextNode = cursorNode.left ? cursorNode.left : cursorNode.right;
                    cursorNode = cursorNode.next;
                }
                currentNode.right.next = candidateNextNode;
            }
            // move to the next node on the same level
            currentNode = currentNode.next;
        }
        // move to next level
        currentNode = nextLevelNode;
    }

    return root;
};