// A subarray is a part of an array including one or more contiguous/adjacent elements.
// largest contiguous subarray sum

// const largestContiguousSubarraySum = (array) => {
//     let maxSum = 0;
//     let currentSum = 0;
//     for(let i = 0; i < array.length; i++) {
//         currentSum += array[i];
//         if(currentSum < 0) {
//             currentSum = 0;
//         }
//         if(currentSum > maxSum) {
//             maxSum = currentSum;
//         }
//     }
//     return maxSum;
// }

const largestContiguousSubarraySum = (array) => {
    let maxSum = 0;
    let currentSum = 0;
    for(let i = 0; i < array.length; i++) {
       currentSum = Math.max(currentSum + array[i], array[i]);
        maxSum = Math.max(currentSum, maxSum);
    }
    return maxSum;
}

let a = [1, 2, 3, 4, 5]
console.log(largestContiguousSubarraySum(a));

// *Math.max() returns the largest number