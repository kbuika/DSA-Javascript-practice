/*

Given a square matrix grid of 9*9 and configured to represent an incomplete Sudoku puzzle, find a solution that returns a true or false value depending on whether or not the Sudoku can be completed. 
If a solution is possible, your solution must also return the completed grid.

*/

/*
You can solve this problem using backtracking

Here's how this code works:

We define a helper function isValid to check if a number num can be placed at position (row, col) without violating the Sudoku rules.
We define another helper function solve to recursively solve the Sudoku puzzle. It iterates through each cell in the board. If a cell is empty (represented by '.'), it tries to place numbers from 1 to 9 in that cell. If a number can be placed, it recursively calls itself to solve the puzzle further. If the puzzle cannot be solved with the current configuration, it backtracks by resetting the cell to '.' and trying the next number.
Finally, we call the solve function to solve the Sudoku puzzle and return the completed board. If a solution is not possible, the original board will be returned unchanged.

*/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  const isValid = (row, col, num) => {
    // Check if num is already present in the row
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === num) {
        return false;
      }
    }

    // Check if num is already present in the column
    for (let i = 0; i < 9; i++) {
      if (board[i][col] === num) {
        return false;
      }
    }

    // Check if num is already present in the 3x3 subgrid
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (board[i][j] === num) {
          return false;
        }
      }
    }

    return true;
  };

  const solve = () => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === ".") {
          for (let num = 1; num <= 9; num++) {
            const numChar = String(num);
            if (isValid(i, j, numChar)) {
              board[i][j] = numChar;
              if (solve()) {
                return true;
              } else {
                board[i][j] = ".";
              }
            }
          }
          return false;
        }
      }
    }
    return true; // All cells filled
  };

  solve();
  return board;
};
