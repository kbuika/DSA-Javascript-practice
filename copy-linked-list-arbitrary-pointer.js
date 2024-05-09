/*


You are given a linked list where the node has two pointers. The first is the regular next pointer. The second pointer is called arbitrary_pointer and it can point to any node in the linked list.

Here, deep copy means that any operations on the original list (inserting, modifying, and removing) should not affect the copied list.

*/

class Node {
  constructor(val, next, arbitrary_pointer) {
    this.val = val;
    this.next = next;
    this.arbitrary_pointer = arbitrary_pointer;
  }
}

var copyRandomList = function (head) {
  if (!head) return null;

  // Step 1: Create a copy of each node and insert it next to its original node
  let current = head;
  while (current) {
    const copy = new Node(current.val);
    copy.next = current.next;
    current.next = copy;
    current = copy.next;
  }

  // Step 2: Assign arbitrary pointers of copied nodes
  current = head;
  while (current) {
    if (current.arbitrary_pointer) {
      current.next.arbitrary_pointer = current.arbitrary_pointer.next;
    }
    current = current.next.next;
  }

  // Step 3: Separate the original and copied lists
  let original = head;
  let copied = head.next;
  const copiedHead = head.next;
  while (original) {
    original.next = original.next.next;
    copied.next = copied.next ? copied.next.next : null;
    original = original.next;
    copied = copied.next;
  }

  return copiedHead;
};
