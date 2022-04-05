/*
Given an integer x, find it’s square root. If x is not a perfect square, then return floor(√x).
*/

/*
1. find the square root of x and store in a variable sqrt.

2. Use the floor value of sqrt and store in variable result, because for non perfect square number it’s floor value gives the result.

3. return the result.

*/

const squareRoot = (x) => {
    let sqrt = Math.sqrt(x);
    let result = Math.floor(sqrt);
    return result;
}


// given a string array of words, return an array of all characters that appear in all strings 
// in the array.


// ex: ['bella', 'label', 'roller'] => ['e', 'l', 'l']