/*

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.
*/

/*
To determine if a linked list has a cycle, you can use Floyd's Tortoise and Hare algorithm, also known as the slow and fast pointers approach. Here's how it works:

Initialize two pointers, slow and fast, both pointing to the head of the linked list.
Move the slow pointer one step at a time and the fast pointer two steps at a time.
If there is no cycle in the linked list, the fast pointer will eventually reach the end of the list (i.e., become null), and you can return false.
If there is a cycle, the fast pointer will eventually catch up to the slow pointer within the cycle.
In that case, you return true, indicating that there is a cycle in the linked list.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head || !head.next) {
    // If the list has no nodes or only one node, there can't be a cycle
    return false;
  }

  let slow = head;
  let fast = head.next;

  while (slow !== fast) {
    if (!fast || !fast.next) {
      // If fast pointer reaches the end (null), no cycle
      return false;
    }
    slow = slow.next; // Move slow pointer one step
    fast = fast.next.next; // Move fast pointer two steps
  }

  // If slow and fast pointers meet, there's a cycle
  return true;
};
