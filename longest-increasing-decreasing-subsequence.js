// Given a one-dimensional integer array a of length n, find the length of the longest subsequence that increases before decreasing.

/*
Explanation:

We define a function longestIncreasingDecreasingSubsequence that takes an array of integers nums.
We initialize two arrays increasing and decreasing to store the lengths of increasing and decreasing subsequences, respectively. Each element is initialized to 1 because a subsequence of length 1 always exists at each index.
We compute the lengths of increasing subsequences ending at each index by iterating from left to right through the array and comparing the current number with previous numbers.
We compute the lengths of decreasing subsequences starting from each index by iterating from right to left through the array and comparing the current number with subsequent numbers.
We find the maximum length of the increasing-decreasing subsequence by summing up the lengths of increasing and decreasing subsequences at each index and subtracting 1 to avoid double counting the peak element.
Finally, we return the maximum length of the increasing-decreasing subsequence.

*/

var longestIncreasingDecreasingSubsequence = function (nums) {
  const n = nums.length;
  if (n === 0) return 0; // If the array is empty, return 0

  // Initialize arrays to store the lengths of increasing and decreasing subsequences
  const increasing = new Array(n).fill(1);
  const decreasing = new Array(n).fill(1);

  // Compute the lengths of increasing subsequences ending at each index
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        increasing[i] = Math.max(increasing[i], increasing[j] + 1);
      }
    }
  }

  // Compute the lengths of decreasing subsequences starting from each index
  for (let i = n - 2; i >= 0; i--) {
    for (let j = n - 1; j > i; j--) {
      if (nums[i] > nums[j]) {
        decreasing[i] = Math.max(decreasing[i], decreasing[j] + 1);
      }
    }
  }

  let maxLength = 0; // Initialize the maximum length of the subsequence

  // Find the maximum length of the increasing-decreasing subsequence
  for (let i = 0; i < n; i++) {
    maxLength = Math.max(maxLength, increasing[i] + decreasing[i] - 1);
  }

  return maxLength;
};
