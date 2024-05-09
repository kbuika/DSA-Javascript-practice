// soln 1.

var containsDuplicate = function (nums) {
  const sortedNums = nums.sort();

  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] == sortedNums[i + 1]) {
      return true;
    }
    i++;
  }

  return false;
};

// Optimization
// 1. Use a Set: One of the simplest and most efficient ways to solve this problem is by using a Set. You can iterate through the array once, adding each element to the Set. If you encounter an element that is already in the Set, you know there's a duplicate.
// 2. Avoid Modifying the Input: Sorting the input array modifies it in place, which might not be desirable in some situations. Using a Set avoids this issue.
// 3.Time Complexity: Your current solution has a time complexity of O(n log n) due to the sorting operation. Using a Set approach will reduce it to O(n), where n is the number of elements in the array.

// soln 2.
var containsDuplicate = function (nums) {
  const numSet = new Set();

  for (const num of nums) {
    if (numSet.has(num)) {
      return true;
    }
    numSet.add(num);
  }

  return false;
};
