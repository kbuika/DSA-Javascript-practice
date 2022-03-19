// Given an array A, find all unique triplets in the array whose sum is equal to zero.
const threeSum = (array, goal = 0) => {
   array.sort((a, b) => a - b); // sort array in ascending order
   let triplets = [];

   for(let i=0; i<array.length; i++) {
       if(array[i] !== array[i-1]){
           /*
           After sorting the array, we are going to iterate through it and set our two pointers. 
           A left pointer will be set to a number that comes immediately after the current number and a right pointer 
           will be set to the number at the end of the array. Then we are going to find our current sum which 
           is the sum of our current number, a left number, and a right number.
           */
           let left = i+1;
           let right = array.length-1;

           while(left < right) {
               // Now we check if our current sum is equal to our target sum, which in this case is 0.
               let currentSum = arr[i] + arr[left] + arr[right];
               if(currentSum === goal){
                   // If it is equal, we just add those three numbers to our final array (triplets).
                   triplets.push([array[i], array[left], array[right]]);
                   while(array[left] === array[left+1]){ left ++ }
                    while(array[right] === array[right-1]){ right -- }
                    left ++;
                    right --;
               } else if(currentSum < goal) {
                   /*
                   If the current sum is less than 0, we move the left pointer to the right by one to increase the sum.
                    Because we earlier sorted the given array in ascending order, we know that each number is greater 
                    than the number to its left.
                   */
                   left ++;
               } else {
                   /*
                   If the current sum is greater than 0, because we know that each number is smaller than 
                   the number to its right, we can move the right pointer to the left by one to decrease the sum.
                   */
                   right --;
               }
           }
       }
   }
   return triplets;
}

let threeSumFunction = (array, goal = 0) => {
    
    
}

// let arr = [1,2,3,4,5,6,7,8,9,10];

let arr = [1, 1, 0, -1, -2, 0, -3, 3, 4, -5]

let res = threeSum(arr);
console.log(res)