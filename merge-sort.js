/*
The merge sort is one of the more advanced sorting algorithms that’s quite efficient in sorting large amounts of data. 
The algorithm uses the recursive function concept with divide and conquer strategy to efficiently sort a given list of elements.

*/

/*
The merge sort algorithm has the time complexity of O(logN), meaning that the time required to execute N number of elements will rise in logarithmic proportion. 
If sorting an array of 10 elements requires 1ms, sorting an array of 100 elements will take 2ms.

Merge sort is much more efficient in time complexity than the insertion sort, but merge sort also consumes more space because the 
sorting is not in-place and the recursive call will be threaded. The merge sort will take O(N) space to perform the sorting.
*/

const merge = (left, right) => {
  let sortedArr = []; // the sorted elements will go here

  while (left.length && right.length) {
    // insert the smallest element to the sortedArr
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  // use spread operator and create a new array, combining the three arrays
  return [...sortedArr, ...left, ...right];
};

const mergeSort = (arr) => {
  const half = arr.length / 2;

  // the base case is array length <=1
  if (arr.length <= 1) {
    return arr;
  }

  const left = arr.splice(0, half); // the first half of the array
  const right = arr;
  return merge(mergeSort(left), mergeSort(right));
};

let arr = [4, 8, 7, 3,0 , 2, 9, 1, 5, 6];
let res = mergeSort(arr);
console.log(res);
