// Given a set of n variables, find their kth permutation. Consider the following set of variables:

/*
To find the kth permutation of a set of n variables, you can use the concept of factorials and recursion. 

Here's how this code works:

We first calculate the factorials from 0! to n! and store them in the array factorial.
We initialize an array numbers containing numbers from 1 to n.
We decrement k by 1 to adjust to 0-based indexing.
We iterate through each position in the permutation. For each position, we find the index of the number to be placed at that position using k and the factorial of the remaining positions. We add this number to the permutation and remove it from the numbers array. We also update k accordingly.
Finally, we return the kth permutation as a string.
You can call this function with the number of variables n and the value of k to get the kth permutation of the set of variables.

*/

var getPermutation = function (n, k) {
  const factorial = [];
  const numbers = [];

  // Calculate factorials from 0! to n!
  factorial[0] = 1;
  for (let i = 1; i <= n; i++) {
    factorial[i] = factorial[i - 1] * i;
  }

  // Initialize numbers from 1 to n
  for (let i = 1; i <= n; i++) {
    numbers.push(i);
  }

  // Decrement k to adjust to 0-based indexing
  k--;

  // Generate the kth permutation
  const permutation = [];
  for (let i = 1; i <= n; i++) {
    const index = Math.floor(k / factorial[n - i]);
    permutation.push(numbers[index]);
    numbers.splice(index, 1);
    k -= index * factorial[n - i];
  }

  return permutation.join("");
};
