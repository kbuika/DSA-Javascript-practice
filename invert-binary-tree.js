// Given the root of a binary tree, invert the tree, and return its root.

/*

To invert a binary tree, you can perform a simple tree traversal (e.g., depth-first search) and swap the left and right children of each node recursively.

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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // Base case: If the root is null, return null
  if (!root) {
    return null;
  }

  // Swap left and right children of the current node
  let temp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(temp);

  return root;
};

/*
In this implementation:

We first check if the root is null. If it is, we return null.
Otherwise, we swap the left and right children of the current node recursively by calling invertTree on each child.
Finally, we return the root of the inverted tree.
This algorithm has a time complexity of O(n), where n is the number of nodes in the binary tree, as we visit each node exactly once. 
The space complexity is also O(n) due to the recursive calls, where n is the height of the binary tree.
*/
