// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const charCount = {};
  // count characters in string s
  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // decrement counts for characters in string t
  for (const char of t) {
    if (!(char in charCount)) {
      return false; // character in t not present in s
    }
    charCount[char]--;
    if (charCount[char] < 0) {
      return false; // more occurrences of a character in t than in s
    }
  }

  // check if all counts are zero
  for (const count of Object.values(charCount)) {
    if (count !== 0) {
      return false;
    }
  }

  return true;
};
