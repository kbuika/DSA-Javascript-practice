/*
Insertion sort works by moving from left to right over an input list. 
You could compare it to the way you would sort a set of cards that you were holding in your hand. 
You’d scan the set from left to right, grabbing each card as you go and moving it to the position where the card to 
it’s left would be smaller or equal to the current card’s value. After you move the card furthest to the right, 
you’ll be left with a set of cards that has been sorted in ascending order
*/

/*
Insertion sort runs in O(n²), or quadratic, time in the worst case. 
This typically isn’t very effective and should not be used for large lists.

 It’s best case run time is O(n), or linear, which occurs if the input array is already sorted.
  On average, insertion sort’s run time is still quadratic.
*/

/*
Iteration 0 (unsorted array): [5,3,1,4,6]
Iteration 1, key is 3 (was at index 1): [5,3,1,4,6] →[3,5,1,4,6]
Iteration 2, key is 1 (was at index 2): [3,5,1,4,6] →[1,3,5,4,6]
Iteration 3, key is 4 (was at index 3, ): [1,3,5,4,6] → [1,3,4,5,6]

*/

const insertionSort = (inputArr) => {
    let length = inputArr.length;
    for (let i = 1; i < length; i++) {
        let key = inputArr[i];
        let j = i - 1;
        while (j >= 0 && inputArr[j] > key) {
            inputArr[j + 1] = inputArr[j];
            j = j - 1;
        }
        inputArr[j + 1] = key;
        console.log(inputArr);
    }
    return inputArr;
};

let arr = [5, 3, 1, 4, 6, 0, 2, 7, 3, 9];
let res = insertionSort(arr);
console.log(res);