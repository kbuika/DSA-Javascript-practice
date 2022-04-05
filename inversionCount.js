/*
Inversion Count for an array indicates – how far (or close) the array is from being sorted. If the array is already sorted, 
then the inversion count is 0, but if the array is sorted in the reverse order, the inversion count is the maximum. 

*/
arr = [1, 20, 6, 4, 5];

const inversionCount = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            count++;
        }
        }
    }
    return count;
}

// time complexity O(n^2)
// space complexity O(1)