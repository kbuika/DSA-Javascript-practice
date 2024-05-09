// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Given a binary tree, write a program that will return true if the binary tree is a mirror image of itself, and false if it is not.

/*
To determine if a binary tree is a mirror image of itself (symmetric), you can check if the left subtree of the root is a mirror image of the right subtree. Two trees are considered mirror images of each other if:

Their root nodes have the same value.
The right subtree of one tree is a mirror image of the left subtree of the other tree.

In this implementation:

We define a helper function isMirror to check if two subtrees are mirror images of each other.
Inside isMirror, we handle the base cases:
If both nodes are null, they are mirror images, so we return true.
If one node is null or their values are different, they are not mirror images, so we return false.
If the base cases are not met, we recursively check if the left subtree of the left child is a mirror image of the right subtree of the right child, and vice versa.
Finally, we return the result of isMirror applied to the left and right subtrees of the root node.

*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true; // If the root is null, return true

  // Helper function to check if two subtrees are mirror images of each other
  const isMirror = (left, right) => {
    if (!left && !right) return true; // If both nodes are null, they are mirror images
    if (!left || !right || left.val !== right.val) return false; // If one node is null or their values are different, they are not mirror images
    return isMirror(left.left, right.right) && isMirror(left.right, right.left); // Recursively check if subtrees are mirror images
  };

  return isMirror(root.left, root.right); // Check if the left and right subtrees are mirror images
};
