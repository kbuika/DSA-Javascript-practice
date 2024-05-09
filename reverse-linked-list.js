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
var reverseList = function (head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    const nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  return prev;
};

/*
Here's how the algorithm works:

Initialize two pointers, prev and current, to null and the head of the list, respectively.
Iterate through the list using a while loop until current is null.
Inside the loop, store the next node of current in a variable nextNode.
Reverse the direction of the pointer of current to point to the prev node.
Move prev to current.
Move current to nextNode.
Repeat steps 3-6 until current is null, which means you have reached the end of the original list.
Return prev, which is now the new head of the reversed list.
This algorithm has a time complexity of O(n) and a space complexity of O(1), where n is the number of nodes in the linked list.
*/
