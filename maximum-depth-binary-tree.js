/*

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

*/

/*
You can solve this problem using a simple recursive depth-first search (DFS) algorithm.

In this implementation:

We define a function maxDepth that takes the root of the binary tree as input.
We handle the base case where the root is null by returning 0, indicating that the depth is 0.
We recursively find the maximum depth of the left and right subtrees.
The maximum depth of the binary tree is the maximum of the depths of the left and right subtrees, plus 1 for the current node.
We return this value as the result.
This algorithm has a time complexity of O(n), where n is the number of nodes in the binary tree, as we visit each node exactly once. The space complexity is also O(n) due to the recursive calls, where n is the height of the binary tree.

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
 * @return {number}
 */
var maxDepth = function (root) {
  // Base case: if the root is null, the depth is 0
  if (!root) {
    return 0;
  }

  // Recursive calls to find the maximum depth of the left and right subtrees
  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);

  // The maximum depth is the maximum of the depths of the left and right subtrees, plus 1 for the current node
  return Math.max(leftDepth, rightDepth) + 1;
};
