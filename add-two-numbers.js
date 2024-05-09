/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Other qn --
Given the head pointers of two linked lists where each linked list represents an integer number (each node is a digit), add them and return the resulting linked list. In the example below, the first node in a list represents the least significant digit.
*/

/*
In this implementation:

We use a dummy node to facilitate building the result list.
We iterate through both linked lists simultaneously, adding corresponding digits and carrying over the carry if needed.
We create a new node for each digit of the sum and append it to the result list.
Finally, we return the head of the result list (excluding the dummy node).
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(); // Dummy node to facilitate building the result list
  let current = dummy;
  let carry = 0; // Initialize carry to 0

  // Traverse both linked lists
  while (l1 || l2) {
    // Extract values of the current nodes (or 0 if the node is null)
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;

    // Calculate the sum of current digits and the carry
    let sum = val1 + val2 + carry;

    // Update carry for the next iteration
    carry = Math.floor(sum / 10);

    // Create a new node with the least significant digit of the sum
    current.next = new ListNode(sum % 10);

    // Move to the next nodes in the input lists and the result list
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    current = current.next;
  }

  // If there is a carry after the last iteration, create a new node for it
  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  // Return the head of the result list (excluding the dummy node)
  return dummy.next;
};
