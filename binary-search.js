/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

/* Here's how the algorithm works:

Initialize two pointers, left and right, to the start and end indices of the array nums, respectively.
While left is less than or equal to right, calculate the middle index mid.
Compare the element at mid with the target:
If they are equal, return mid, as you've found the target.
If the element at mid is less than the target, set left to mid + 1 to search the right half of the array.
If the element at mid is greater than the target, set right to mid - 1 to search the left half of the array.
Repeat steps 2-3 until left is greater than right, indicating that the target is not found in the array.
This algorithm achieves O(log n) runtime complexity because it halves the search space in each iteration, resulting in a logarithmic time complexity relative to the size of the input array nums.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // two pointers - a left one and a right one
  let left = 0;
  let right = nums.length;

  // use a while loop
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (target === nums[mid]) {
      return mid;
    } else if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return -1;
};
