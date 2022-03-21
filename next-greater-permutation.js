/*
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).

The replacement must be in place and use only constant extra memory.
*/


/*
Idea:

Changes made to the left part of an array have more impact on the lexicographical sorting than changes made to the right side, so logically, in order to find the next permutation that is lexicographically greater, we need to find the farthest right-most number that can be swapped for a larger number. Also, the larger number must come from the target number's right, otherwise you'd create a permutation that is lexicographically lower.

We also then need to make sure that it's not just any larger number, but the next possible larger number from the numbers to its right. Then, we'll need to make sure that the remaining numbers to the right of our swapped target are in their lexicographically smallest configuration. (Think of it like a counter rolling over from 0999 into 1000.)
*/

/*
Implementation:

So the first order of business is to find the target number we want to swap. As we check from the right to the left, if each number is larger than the one before, then we clearly can't find a lexicographically larger number. Therefore, we have to move left until we find the first time a number is lower than the number to its right.

Once we find that target (N[i]), the very important thing to recognize is that the numbers to the target's right are already in sorted order, just in the reverse order, so we can easily reverse them. (Even if we don't actually find the target, we still want to reverse the entire array, per the instructions.)

It's easy then to move from the smallest to largest of the reversed numbers and look for the first number (N[j]) that's larger than our target so that we can swap the two. Since N[j] is lexicographically nearest to N[i], the subarray to the right of N[i] will still be in the correct order even after the swap.

A simple helper functions to swap array elements will be useful.
*/

const nextGreaterPermutation = (nums) => {
    const swap = (i, j) => {
        [nums[i],nums[j]] = [nums[j],nums[i]]
    }
    let len = nums.length - 1, i
    for (i = len -1; nums[i] >= nums[i+1];) i--
    let j = i + 1, k = len
    while (j < k) swap(j++, k++)
    if(i >= 0) {
        for (j = i + 1; nums[i] >= nums[j];) j++
        swap(i,j)
    }
    return nums
}

let input = [1,2,3]
let res = nextGreaterPermutation(input)
console.log(res)