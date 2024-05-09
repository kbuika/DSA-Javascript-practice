/*

Given a graph n*n with each cell containing a value of 0, 1, 2, or 3, return a true or false value depending on whether or not one can find a path from the source node to the destination node. Each graph will have one source node and one destination node. The graph can be traversed horizontally and vertically.

The cell containing a value of 0 is the source node. A value of 1 represents a wall; this node is impassable. A value of 2 represents a blank cell that can be traversed. A value of 3 represents the destination node.

*/

/*
To determine whether there exists a path from the source node (value 0) to the destination node (value 3) in the given graph, you can perform a depth-first search (DFS) or breadth-first search (BFS) starting from the source node and traversing through the graph while respecting the following rules:

A cell with a value of 1 represents a wall, which is impassable.
A cell with a value of 2 represents a blank cell that can be traversed.
A cell with a value of 3 represents the destination node.


This implementation uses depth-first search (DFS) to traverse through the graph starting from the source node (value 0). It recursively explores neighboring cells while checking for the destination node (value 3) and avoiding walls (value 1). The function returns true if a path from the source to the destination exists, and false otherwise.

You can call the hasPath function with the given graph to determine whether a path exists from the source node to the destination node.

*/

function isValid(row, col, grid) {
  const n = grid.length;
  return (
    row >= 0 &&
    row < n &&
    col >= 0 &&
    col < n &&
    (grid[row][col] === 0 || grid[row][col] === 3)
  );
}

function dfs(row, col, grid, visited) {
  if (!isValid(row, col, grid) || visited[row][col]) {
    return false;
  }

  visited[row][col] = true;

  if (grid[row][col] === 3) {
    return true;
  }

  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ]; // Up, right, down, left

  for (const [dx, dy] of directions) {
    const newRow = row + dx;
    const newCol = col + dy;
    if (isValid(newRow, newCol, grid) && !visited[newRow][newCol]) {
      if (dfs(newRow, newCol, grid, visited)) {
        return true;
      }
    }
  }

  return false;
}

function hasPath(grid) {
  const n = grid.length;
  const visited = Array.from({ length: n }, () => Array(n).fill(false));

  // Find the source node (value 0)
  let sourceRow = -1;
  let sourceCol = -1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        sourceRow = i;
        sourceCol = j;
        break;
      }
    }
    if (sourceRow !== -1) {
      break;
    }
  }

  // Perform DFS from the source node
  return dfs(sourceRow, sourceCol, grid, visited);
}
