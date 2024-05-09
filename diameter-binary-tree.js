/*

Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

*/

/*
To find the diameter of a binary tree, you can use a depth-first search (DFS) approach. The idea is to recursively calculate the diameter of each node's left and right subtrees and update the maximum diameter encountered so far.

In this implementation:

We define a function diameterOfBinaryTree that takes the root of the binary tree as input.
We initialize a variable maxDiameter to store the maximum diameter encountered so far.
We define a helper function depth to calculate the depth of a node. This function returns the depth of the node and updates the maxDiameter if needed.
We call the depth function to start the depth-first search traversal from the root.
Finally, we return the maxDiameter as the result.
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
var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0; // Initialize the maximum diameter to 0

  // Define a helper function to calculate the depth of a node
  const depth = (node) => {
    if (!node) return 0; // Base case: if the node is null, return 0

    // Recursively calculate the depth of the left and right subtrees
    let leftDepth = depth(node.left);
    let rightDepth = depth(node.right);

    // Update the maximum diameter encountered so far
    maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);

    // Return the depth of the current node
    return Math.max(leftDepth, rightDepth) + 1;
  };

  // Call the depth function to start the DFS traversal from the root
  depth(root);

  // Return the maximum diameter encountered
  return maxDiameter;
};
