// Connect the sibling pointer to the next node in the same level. The last node in each level should point to the first node of the next level in the tree.

/*
In this implementation:

We maintain a levelStart pointer to track the start of the current level.
We iterate through the levels of the binary tree using a nested loop:
The outer loop iterates through levels, moving to the next level's start node.
The inner loop iterates through nodes in the current level, connecting sibling pointers for left and right children.
At the end of each level, we move levelStart to the next level's start node by checking left child, right child, and sibling pointers.
Finally, we return the modified root of the binary tree.

*/

/**
 * Definition for binary tree with next pointer.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return null; // If root is null, return null

  let levelStart = root; // Start of the current level

  while (levelStart) {
    let current = levelStart; // Current node in the current level
    let prev = null; // Previous node in the next level

    while (current) {
      // Connect the left child's sibling pointer
      if (current.left) {
        if (prev) prev.next = current.left;
        prev = current.left;
      }

      // Connect the right child's sibling pointer
      if (current.right) {
        if (prev) prev.next = current.right;
        prev = current.right;
      }

      // Move to the next node in the current level
      current = current.next;
    }

    // Move to the next level's start node
    levelStart = levelStart.left || levelStart.right || levelStart.next;
  }

  return root;
};
