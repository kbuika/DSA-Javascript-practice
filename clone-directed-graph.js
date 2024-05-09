/*
Given the root node of a directed graph, clone this graph by creating its deep copy so that the cloned graph has the same vertices and edges as the original graph.
*/

/*
Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}

*/

/*

To clone a directed graph, you can perform a depth-first traversal (DFS) of the original graph while creating a deep copy of each node and its outgoing edges. 
You'll also need to handle the case where a node is already visited to avoid infinite recursion due to cycles in the graph.

In this implementation:

We use a depth-first traversal approach to visit each node in the original graph.
We maintain a map visited to store the original nodes as keys and their corresponding clones as values. This map helps avoid infinite recursion when encountering cycles in the graph.
For each node in the graph, we create a deep copy (clone) of the node and its outgoing edges (neighbors).
We recursively clone each neighbor of the original node and add them to the neighbors array of the clone.
Finally, we return the clone of the starting node of the original graph, which represents the cloned graph with the same vertices and edges.
This implementation ensures that the cloned graph has the same structure (vertices and edges) as the original graph, without modifying the original graph.
*/

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (!node) return null;

  // Map to keep track of visited nodes and their clones
  const visited = new Map();

  const dfs = (originalNode) => {
    // If the node has been visited, return its clone from the map
    if (visited.has(originalNode)) {
      return visited.get(originalNode);
    }

    // Create a clone of the current node
    const clonedNode = new Node(originalNode.val);
    visited.set(originalNode, clonedNode);

    // Recursively clone the neighbors of the current node
    for (const neighbor of originalNode.neighbors) {
      clonedNode.neighbors.push(dfs(neighbor));
    }

    return clonedNode;
  };

  return dfs(node);
};
