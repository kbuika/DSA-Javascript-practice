/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let missing = nums.length;
  for (let i = 0; i < nums.length; i++) {
    missing ^= i ^ nums[i];
  }
  return missing;
};

/*
Here's how the algorithm works:

Initialize a variable missing with the value of the length of the array, which represents the upper bound of the range.
Iterate through the array and XOR the current index i and the value of the element at that index nums[i] with missing.
The result stored in missing after the loop will be the missing number in the range.
Return the value of missing.
*/

/* The XOR (exclusive OR) operation is a binary operation that takes two binary digits (bits) as input and returns a result based on the following rules:

If both bits are the same (both 0 or both 1), the result is 0.
If the bits are different (one is 0 and the other is 1), the result is 1.
Here's the truth table for the XOR operation:

A	B	A XOR B
0	0	0
0	1	1
1	0	1
1	1	0
In JavaScript, the XOR operator is represented by the caret symbol ^.

Now, let's understand how XOR can be used to find the missing number in an array:

If we XOR all the numbers from 0 to n with the elements of the array, the pairs of numbers that exist in both the range and the array will cancel out (resulting in 0), leaving only the missing number.
This is because XOR-ing a number with itself results in 0, and XOR-ing any number with 0 results in the number itself.
Let's take an example:

Consider the array [3, 0, 1]. The missing number in the range [0, 3] is 2.

If we XOR all the numbers from 0 to 3 (0 ^ 1 ^ 2 ^ 3) with the elements of the array (3 ^ 0 ^ 1), the pairs will cancel out as follows:

scss
Copy code
(0 ^ 1 ^ 2 ^ 3) ^ (3 ^ 0 ^ 1)
= (0 ^ 0) ^ (1 ^ 1) ^ (3 ^ 3) ^ 2
= 0 ^ 0 ^ 0 ^ 2
= 2
So, the missing number is 2.

This approach efficiently finds the missing number in O(n) time complexity and O(1) space complexity.

*/
