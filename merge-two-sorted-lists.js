/*

To merge two sorted linked lists, you can use a simple iterative approach. Here's the algorithm:

Initialize a dummy node to which you will append the merged list.
Traverse both lists simultaneously, comparing the values of the nodes.
Append the smaller node to the merged list.
Move the pointer of the merged list and the pointer of the list from which the node was taken.
Repeat steps 3 and 4 until you reach the end of either list.
If there are remaining nodes in one of the lists, append them directly to the merged list.
Return the next of the dummy node, which will be the head of the merged list.
Here's the implementation in JavaScript:
*/

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
var mergeTwoLists = function (list1, list2) {
  // Create a dummy node to which we will append the merged list
  let dummy = new ListNode(-1);
  let current = dummy;

  // Traverse both lists until one of them becomes null
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1; // Append smaller node from list1
      list1 = list1.next; // Move pointer of list1
    } else {
      current.next = list2; // Append smaller node from list2
      list2 = list2.next; // Move pointer of list2
    }
    current = current.next; // Move pointer of the merged list
  }

  // Append remaining nodes of list1 or list2, if any
  current.next = list1 || list2;

  // Return the head of the merged list (excluding the dummy node)
  return dummy.next;
};
