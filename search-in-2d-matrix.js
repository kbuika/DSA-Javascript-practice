/*
We are given a two-dimensional array where all elements in any individual row or column are sorted. In such a matrix, 
we have to search or find the position of a given key.
*/

/*
Given that each individual row and column in the matrix is sorted, you can use a binary search approach to efficiently search for the position of the given key. 
You can start the search from either the top-right corner or the bottom-left corner of the matrix, depending on the characteristics of the matrix.

In this implementation:

We start the search from the top-right corner of the matrix.
We compare the current element with the target:
If the current element is equal to the target, we return true (indicating that the target is found).
If the current element is less than the target, we move down to the next row.
If the current element is greater than the target, we move left to the previous column.
We continue this process until we find the target or exhaust all possible positions in the matrix.
If the target is not found after the while loop, we return false.
You can call the searchMatrix function with the given matrix and the target value to search for the position of the given key in the matrix.
*/

function searchMatrix(matrix, target) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }

  const rows = matrix.length;
  const cols = matrix[0].length;

  let row = 0;
  let col = cols - 1; // Start from the top-right corner

  while (row < rows && col >= 0) {
    if (matrix[row][col] === target) {
      return true; // Found the target
    } else if (matrix[row][col] < target) {
      // If the current element is less than the target, move down
      row++;
    } else {
      // If the current element is greater than the target, move left
      col--;
    }
  }

  return false; // Target not found
}
