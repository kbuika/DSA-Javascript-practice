// VARIANT 1
// Given a string, find all non-single letter substrings that are palindromes.

var isPalindrome = function (s) {
  // Helper function to check if a string is a palindrome
  const reverse = s.split("").reverse().join("");
  return s === reverse;
};

var findAllPalindromicSubstrings = function (s) {
  const result = [];

  // Iterate through each possible substring
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const substr = s.substring(i, j);
      // Check if the substring is a palindrome and has more than one character
      if (isPalindrome(substr) && substr.length > 1) {
        result.push(substr);
      }
    }
  }

  return result;
};

// VARIANT 2
/*
Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.
*/

/**
 * @param {string} s
 * @return {number}
 */

var isPalindrome = function (s) {
  // Helper function to check if a string is a palindrome
  const reverse = s.split("").reverse().join("");
  return s === reverse;
};
var countSubstrings = function (s) {
  const result = [];

  // Iterate through each possible substring
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const substr = s.substring(i, j);
      // Check if the substring is a palindrome and has more than one character
      if (isPalindrome(substr)) {
        result.push(substr);
      }
    }
  }

  return result.length;
};
