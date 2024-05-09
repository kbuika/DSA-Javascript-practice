/*
Given a text and a pattern, determine if the pattern matches the text completely or not at all using regular expression matching. 
Assume the pattern contains only two operators: . and *. Operator * in the pattern means that the character preceding * may not appear or may appear any number of times in the text. Operator . matches with any character in the text exactly once.

*/

/*
Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

*/

/*
You can solve this problem using dynamic programming

Here's how this code works:

We create a 2D array dp to store the results of subproblems, where dp[i][j] represents whether the text up to index i matches the pattern up to index j.
We set dp[0][0] to true as the base case: empty pattern matches empty text.
We handle patterns with '*' at the beginning by setting dp[0][j] based on the pattern.
We fill the dp table using dynamic programming. For each i and j, we check if the characters match or if the pattern contains '.', and update dp[i][j] accordingly. If the pattern contains '', we consider two cases: either the character preceding '' does not appear (dp[i][j - 2]) or it appears multiple times (dp[i - 1][j]).
Finally, we return dp[m][n], where m and n are the lengths of the text and pattern respectively, indicating whether the entire text matches the entire pattern.

*/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const m = s.length;
  const n = p.length;

  // Create a 2D array to store the results of subproblems
  const dp = new Array(m + 1)
    .fill(false)
    .map(() => new Array(n + 1).fill(false));

  // Base case: empty pattern matches empty text
  dp[0][0] = true;

  // Handle patterns with '*' at the beginning
  for (let j = 1; j <= n; j++) {
    if (p[j - 1] === "*") {
      dp[0][j] = dp[0][j - 2];
    }
  }

  // Fill the dp table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s[i - 1] === p[j - 1] || p[j - 1] === ".") {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === "*") {
        dp[i][j] =
          dp[i][j - 2] ||
          (dp[i - 1][j] && (s[i - 1] === p[j - 2] || p[j - 2] === "."));
      }
    }
  }

  return dp[m][n];
};
