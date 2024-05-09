/*
Given a dictionary of words and a large input string, find whether or not the input string can be completely segmented into the words of that dictionary.
*/
/*
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.
*/

/*
Explanation:

We define a function wordBreak that takes the input string s and the dictionary of words wordDict.
We create a set wordSet from wordDict for faster lookup.
We initialize a boolean array dp of size n + 1, where n is the length of the input string s. dp[i] will represent whether substrings from index 0 to i can be segmented.
We set dp[0] to true because an empty string can always be segmented.
We iterate through the input string s from index 1 to n. For each index i, we iterate through all possible substrings from index j to i - 1.
For each substring, if dp[j] is true (meaning the substring from index 0 to j can be segmented) and the substring from index j to i is in the dictionary (wordSet.has(s.substring(j, i))), we set dp[i] to true.
Finally, we return dp[n], which represents whether the entire input string s can be segmented into words from the dictionary.
*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const n = s.length;
  const wordSet = new Set(wordDict);
  const dp = new Array(n + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[n];
};
