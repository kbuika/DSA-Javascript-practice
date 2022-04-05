/*
You are given a list of unique integers which are sorted but rotated at some pivot. 
You are also given a target value and you have to find its index in the list. 
If it is not present in the list, return -1.
*/

const searchRotatedSortedArray = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end) / 2);
    
    while (start <= end) {
        if (arr[mid] === target) {
        return mid;
        } else if (arr[mid] > arr[start]) {
        if (arr[start] <= target && target < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
        } else if (arr[mid] < arr[start]) {
        if (arr[mid] < target && target <= arr[end]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
        } else {
        start++;
        }
        mid = Math.floor((start + end) / 2);
    }
    return -1;
}