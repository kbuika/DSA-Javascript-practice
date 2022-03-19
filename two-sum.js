/*
So the general gist of a two sum is that you have a list or an array of numbers and a target sum to hit.
 You're looking to return the indexes of the two numbers that when added together hit the target sum. 
 There should only be one solution to the problem from the list of numbers and a number can not be used twice.
*/

let array = [1, 3, 10, 11, 14]
let goal = 13

const twoSum = (arr, goal) => {
    let hash = {};
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        // get the difference between the current number and the goal
        let goalDiff = goal - current;
        // check if the difference is in the input array
        if (hash[goalDiff] !== undefined) {
            return [hash[goalDiff], i];
        }
        hash[current] = i;
    }
    return null;
}

let res = twoSum(array, goal);
console.log(res)

// unoptimized solution with a time complexity of O(n^2)
// const twoSum = (array, goal) => {
//     let mapOfNumbers = {};
//         let twoIndexes = [];

//         for (let i = 0; i < array.length; i++) {
//         mapOfNumbers[array[i]] = i;
//     }

//     for (let i = 0; i < array.length; i++) {
//           let target = goal - arr[i];
//       if(mapOfNumbers[target] !== null && mapOfNumbers[target] !== i) {
//         twoIndexes.push(i);
//             twoIndexes.push(mapOfNumbers[target]);
//       }
//         }

//       return twoIndexes;
// }