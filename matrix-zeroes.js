/*

Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

*/

/*
In this implementation:

We use two sets, rows and cols, to keep track of the rows and columns that contain zeros.
We iterate through the matrix to find the zeros and mark their corresponding rows and columns in the sets.
Then, we iterate through the matrix again and set the elements to zero if their row or column is in the sets.
This algorithm has a time complexity of O(m * n), where m is the number of rows and n is the number of columns in the matrix. We iterate through the matrix twice, each time with nested loops. The space complexity is O(m + n) for the sets used to store the rows and columns with zeros.

*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const rows = new Set();
  const cols = new Set();

  // Iterate through the matrix and mark rows and columns with zeros
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i);
        cols.add(j);
      }
    }
  }

  // Iterate through the matrix again and set elements to zero if their row or column is marked
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (rows.has(i) || cols.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
};
