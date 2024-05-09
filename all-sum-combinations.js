// Given a positive integer, target, print all possible combinations of positive integers that sum up to the target number.

/*
You can solve this problem using backtracking

Here's how this code works:

We initialize an array results to store all possible combinations.
We define a helper function backtrack which takes three parameters: currentSum, start, and path.
If currentSum equals target, we push a copy of path into results since it represents a valid combination.
If currentSum exceeds target, we stop exploring further.
We iterate from start to target in a loop, representing all possible positive integers that can be added to the current combination.
For each integer i, we add it to path, update currentSum, recursively call backtrack, and then remove i from path to backtrack and explore other combinations.
Finally, we call backtrack with initial parameters currentSum = 0, start = 1, and an empty path.
We return results, which contains all possible combinations of positive integers that sum up to the target number.

*/

var combinationSum = function (target) {
  const results = [];

  const backtrack = (currentSum, start, path) => {
    if (currentSum === target) {
      results.push([...path]);
      return;
    }

    if (currentSum > target) {
      return;
    }

    for (let i = start; i <= target; i++) {
      path.push(i);
      backtrack(currentSum + i, i, path);
      path.pop();
    }
  };

  backtrack(0, 1, []);

  return results;
};
