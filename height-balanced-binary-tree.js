// Given a binary tree, determine if it is height-balanced

/*
To determine if a binary tree is height-balanced, you can use a recursive approach where you check the height difference of left and right subtrees at each node. 
A binary tree is considered height-balanced if the absolute difference in height between its left and right subtrees is no more than 1, 
and both the left and right subtrees are also height-balanced.

In this implementation:

We define a function isBalanced that takes the root of the binary tree as input.
We define a helper function height to calculate the height of a node. This function returns -1 if the tree is unbalanced, and the height of the node otherwise.
We check if the tree is balanced by calling the height function starting from the root. If the return value is not -1, the tree is balanced; otherwise, it's not.
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
 * @return {boolean}
 */
var isBalanced = function (root) {
  // Define a helper function to calculate the height of a node
  const height = (node) => {
    if (!node) return 0; // Base case: if the node is null, its height is 0

    // Recursively calculate the height of the left and right subtrees
    let leftHeight = height(node.left);
    let rightHeight = height(node.right);

    // If the absolute difference in height between left and right subtrees is more than 1, return -1
    if (
      leftHeight === -1 ||
      rightHeight === -1 ||
      Math.abs(leftHeight - rightHeight) > 1
    ) {
      return -1;
    }

    // Return the height of the current node
    return Math.max(leftHeight, rightHeight) + 1;
  };

  // Check if the tree is balanced starting from the root
  return height(root) !== -1;
};
