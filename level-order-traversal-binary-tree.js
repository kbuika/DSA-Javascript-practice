// Given the root of a binary tree, display the node values at each level.
// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

/*

In this implementation:

We use a queue for the level order traversal.
We start by adding the root node to the queue.
We iterate through the queue until it becomes empty, processing nodes level by level.
For each level, we process all nodes in the current level, adding their values to the current level array.
We then add the left and right children of each node to the queue for processing in the next level.
Finally, we push the current level array into the result array, and continue until all levels are processed.
The result array contains node values at each level of the binary tree.

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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return []; // If root is null, return an empty array

  const result = []; // Array to store node values at each level
  const queue = [root]; // Queue for level order traversal

  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];

    // Process all nodes in the current level
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift(); // Remove the first node from the queue
      currentLevel.push(node.val); // Add the node value to the current level

      // Add left and right children of the node to the queue
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(currentLevel); // Add the current level to the result
  }

  return result;
};
