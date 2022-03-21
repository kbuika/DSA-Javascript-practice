/*
The quick sort time complexity for the best-case is O(logN) while the worst-case end up at O(n²). 
The Big O Notation always selects the worst-case as the measurement, so quick sort is not faster than 
merge sort in terms of time complexity.
*/
function partition(arr, startIndex, endIndex) {
  const pivotVal = arr[endIndex]; // the pivot element
  let index = startIndex;
  // begin iterate and swap
  for (let i = index; i < endIndex; i++) {
    if (arr[i] < pivotVal) {
      [arr[i], arr[index]] = [arr[index], arr[i]];
      index += 1;
    }
  }

  // move `pivotVal` to the middle index and return middle index
  [arr[index], arr[endIndex]] = [arr[endIndex], arr[index]];
  return index;
}

function quickSort(arr, startIndex, endIndex) {
  // Base case or terminating case
  if (startIndex >= endIndex) {
    return;
  }

  // Returns midIndex / pivot index
  let midIndex = partition(arr, startIndex, endIndex);

  // Recursively apply the same logic to the left and right subarrays
  quickSort(arr, startIndex, midIndex - 1);
  quickSort(arr, midIndex + 1, endIndex);
}

let arr = [-2, 4, 6, 3, 7, 2];
quickSort(arr, 0, arr.length - 1);
console.log(arr); // [-2, 2, 3, 4, 6, 7]
