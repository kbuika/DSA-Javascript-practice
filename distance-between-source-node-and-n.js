/*
Starting from the source node, traverse a given graph breadthwise to find the distance between the source node and node n.
*/

/*
To find the distance between a source node and another node 
�
n in a graph using breadth-first traversal, you can perform a breadth-first search (BFS) starting from the source node and keep track of the distance of each node from the source node.


In this implementation:

We use a queue queue to perform breadth-first traversal.
We use a set visited to keep track of visited nodes to avoid revisiting nodes.
We use a map distance to store the distance of each node from the source node.
We initialize the distance of the source node to 0 and add it to the queue.
During BFS traversal, we update the distance of each neighbor from the source node and add them to the queue for further exploration.
Finally, we return the distance of node 
�
n from the source node, or -1 if 
�
n is not reachable from the source node.
You can call this function with the graph, source node, and the target node 
�
n to find the distance between the source node and node 
�
n.
*/

function bfsDistance(graph, source, n) {
  const queue = []; // Queue for BFS traversal
  const visited = new Set(); // Set to keep track of visited nodes
  const distance = new Map(); // Map to store the distance of each node from the source

  // Initialize the distance of the source node to 0
  distance.set(source, 0);
  visited.add(source);
  queue.push(source);

  while (queue.length > 0) {
    const currentNode = queue.shift();

    // Traverse the neighbors of the current node
    for (const neighbor of graph[currentNode]) {
      // If the neighbor has not been visited yet
      if (!visited.has(neighbor)) {
        // Mark the neighbor as visited
        visited.add(neighbor);
        // Update the distance of the neighbor from the source
        distance.set(neighbor, distance.get(currentNode) + 1);
        // Add the neighbor to the queue for further exploration
        queue.push(neighbor);
      }
    }
  }

  // Return the distance of node n from the source, or -1 if n is not reachable
  return distance.has(n) ? distance.get(n) : -1;
}
