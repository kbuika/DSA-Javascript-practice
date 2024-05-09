// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
var containsNearbyDuplicate = function (nums, k) {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (numMap.has(num) && i - numMap.get(num) <= k) {
      return true;
    }

    numMap.set(num, i);
  }

  return false;
};

// The time complexity of the provided solution is O(n), where n is the number of elements in the array. This is because the solution iterates through the array once, performing constant-time operations (such as checking if a key exists in the map, getting a value from the map, and setting a value in the map) for each element.

// The space complexity of the solution is also O(n). In the worst case, the hash map can store all elements of the array, leading to linear space usage relative to the input size.

// Overall, the solution is both time and space efficient, making it suitable for solving the problem within the given constraints.
