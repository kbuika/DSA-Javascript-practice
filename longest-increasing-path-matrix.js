/*
Given an n*n matrix where all numbers are distinct, find the longest path starting from any cell such that all cells along the path increase in order by 1.
*/

/*
Given an m x n integers matrix, return the length of the longest increasing path in matrix.

From each cell, you can either move in four directions: left, right, up, or down. You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).
*/

/*
To find the longest path starting from any cell in an 
�
×
�
n×n matrix such that all cells along the path increase in order by 1, you can use depth-first search (DFS) with memoization. 


Explanation:

We define a function longestIncreasingPath that takes the input matrix matrix.
We initialize variables m and n to store the number of rows and columns in the matrix.
We initialize a memoization table memo to store the maximum path length starting from each cell. The initial value for each cell in the memoization table is set to -1.
We define a helper function dfs that performs depth-first search from a given cell (i, j) with a given previous value prevValue.
In the dfs function, we check if the current cell is out of bounds or if the value is not increasing compared to the previous value. If so, we return 0.
If the result for the current cell has already been computed (stored in the memoization table), we return the stored result.
We explore all four directions (up, down, left, right) from the current cell and recursively call dfs on each neighbor cell.
We update the maximum path length (maxPath) for the current cell and store it in the memoization table.
We iterate over each cell in the matrix to start the DFS from each cell and update the maxPathLength variable with the maximum path length found.
Finally, we return the maxPathLength, which represents the length of the longest increasing path starting from any cell in the matrix.

*/

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const memo = new Array(m).fill(null).map(() => new Array(n).fill(-1));
  let maxPathLength = 0;

  const dfs = (i, j, prevValue) => {
    // Check if the cell is out of bounds or the value is not increasing
    if (i < 0 || i >= m || j < 0 || j >= n || matrix[i][j] <= prevValue) {
      return 0;
    }

    // Check if the result for this cell has already been computed
    if (memo[i][j] !== -1) {
      return memo[i][j];
    }

    let maxPath = 0;

    // Explore all four directions
    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];
    for (const [dx, dy] of directions) {
      const nextI = i + dx;
      const nextJ = j + dy;
      const pathLength = 1 + dfs(nextI, nextJ, matrix[i][j]);
      maxPath = Math.max(maxPath, pathLength);
    }

    // Store the result in the memoization table
    memo[i][j] = maxPath;
    return maxPath;
  };

  // Iterate over each cell to start the DFS from each cell
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const pathLength = dfs(i, j, -Infinity);
      maxPathLength = Math.max(maxPathLength, pathLength);
    }
  }

  return maxPathLength;
};
