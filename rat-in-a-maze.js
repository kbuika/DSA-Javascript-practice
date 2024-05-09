/*

Consider a rat placed in a square n*n matrix at position (0, 0). Find all possible paths the rat can take to reach its destination (N-1, N-1) from its starting position.

The rat can move vertically and horizontally. Cells with a value of 1 can be traversed, while cells with a value of 0 cannot. The rat cannot visit a cell more than once.

*/

/*
This implementation defines a recursive backtracking function backtrack that explores all possible paths from the starting position (0, 0) to the destination (N-1, N-1). 
It maintains a matrix to mark visited cells and an array paths to store the valid paths found.
*/

function findPaths(matrix) {
  const n = matrix.length;
  const paths = [];

  // Helper function for backtracking
  function backtrack(row, col, path) {
    // If the current cell is the destination, add the path to the result
    if (row === n - 1 && col === n - 1) {
      paths.push([...path]);
      return;
    }

    // Define the possible directions (right and down)
    const directions = [
      [0, 1],
      [1, 0],
    ];

    // Try each direction
    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      // Check if the new position is within bounds and the cell is traversable
      if (
        newRow >= 0 &&
        newRow < n &&
        newCol >= 0 &&
        newCol < n &&
        matrix[newRow][newCol] === 1
      ) {
        // Mark the cell as visited
        matrix[newRow][newCol] = 0;

        // Move to the new position and continue exploring
        path.push([newRow, newCol]);
        backtrack(newRow, newCol, path);

        // Backtrack: restore the matrix and path
        matrix[newRow][newCol] = 1;
        path.pop();
      }
    }
  }

  // Start the backtracking from the starting position (0, 0)
  backtrack(0, 0, [[0, 0]]);

  return paths;
}

// Example usage:
const matrix = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [0, 1, 0, 0],
  [1, 1, 1, 1],
];

const paths = findPaths(matrix);
console.log(paths);
