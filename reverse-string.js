// reverse a string word by word
// Reverse the order of words in a given sentence.

/*
Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.
*/

var reverseWords = function (s) {
  if (s === " ") return "";
  if (s.length < 1) return s;

  s = s.trim().split("").reverse();

  var ret = "";
  var wordStack = [];
  var j = 0;
  while (j < s.length) {
    if (s[j] === " ") {
      if (wordStack.length > 0) {
        while (wordStack.length > 0) {
          ret += wordStack.pop();
        }
        ret += " ";
      }
    } else {
      wordStack.push(s[j]);
    }

    j++;
  }

  while (wordStack.length > 0) {
    ret += wordStack.pop();
  }

  return ret;
};

console.log(reverseWords("the sky is blue"));

/*

Let's break down the code:

The function begins by checking if the input string s is an empty string or consists of only a single space. If so, it returns an empty string or the input string itself, respectively. This handles edge cases where the input string is empty or contains only whitespace.
The function then trims any leading and trailing whitespace from the input string using trim(), splits the string into an array of characters using split(''), and reverses the array using reverse(). This effectively reverses the entire string character by character.
The function initializes variables ret (for the resulting reversed string) and wordStack (to temporarily store characters of each word).
It iterates through the reversed array of characters using a while loop with an index j.
Inside the loop, it checks if the current character s[j] is a space. If it's a space, it checks if wordStack is not empty. If wordStack is not empty, it pops characters from wordStack and appends them to ret until wordStack is empty. Then it appends a space to ret.
If the current character is not a space, it pushes the character to wordStack.
After the loop, it checks if there are any remaining characters in wordStack. If there are, it pops and appends them to ret until wordStack is empty.
Finally, it returns the resulting reversed string ret.
Overall, this function reverses the order of words in the input string s by reversing the entire string, splitting it into characters, and then processing each word to reverse it back in place.

*/
