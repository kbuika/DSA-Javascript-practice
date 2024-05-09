var isPalindrome = function (s) {
  if (s.length === 0) return true;
  return (
    s.toLowerCase().replace(/[^a-z0-9]/g, "") ===
    s
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "")
      .split("")
      .reverse()
      .join("")
  );
};

// solution using 2 pointers

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.length === 0) return true;

  // Define helper function to check if a character is alphanumeric
  const isAlphanumeric = (char) => {
    return /^[0-9a-zA-Z]$/.test(char);
  };

  let left = 0; // Pointer starting from the left end of the string
  let right = s.length - 1; // Pointer starting from the right end of the string

  while (left < right) {
    // Move the left pointer until it points to an alphanumeric character
    while (left < right && !isAlphanumeric(s[left])) {
      left++;
    }

    // Move the right pointer until it points to an alphanumeric character
    while (left < right && !isAlphanumeric(s[right])) {
      right--;
    }

    // If the characters at left and right pointers are not equal, return false
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    // Move both pointers towards the middle
    left++;
    right--;
  }

  // If we reached here, the string is a palindrome
  return true;
};
