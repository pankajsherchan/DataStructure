// Problem Statement#
// Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

// Example 1:

// Input: [-2, -1, 0, 2, 3]
// Output: [0, 1, 4, 4, 9]
// Example 2:

// Input: [-3, -1, 0, 1, 2]
// Output: [0, 1, 1, 4, 9]

const input = [-2, -1, 0, 2, 3]

let firstPositiveNumberIndex = Number.MIN_SAFE_INTEGER;
for (let i =0; i < input.length; i++) {
    if (input[i] >= 0) {
        firstPositiveNumberIndex = i;
        break;
    }
}
console.log(firstPositiveNumberIndex)

let negativePointer = firstPositiveNumberIndex -1;
let positivePointer = firstPositiveNumberIndex;
const result = []

while (positivePointer < input.length && negativePointer >= 0) {
    const posSquare = input[positivePointer] * input[positivePointer];
    const negSquare = input[negativePointer] * input[negativePointer];

    if (posSquare <= negSquare) {
        result.push(posSquare);
        positivePointer++;
    } else {
        result.push(negSquare)
        negativePointer--;
    }
 }

 while (positivePointer < input.length) {
    const posSquare = input[positivePointer] * input[positivePointer];
     result.push(posSquare);
     positivePointer++;
 }


 while (negativePointer >= 0) {
    const negSquare = input[negativePointer] * input[negativePointer];
     result.push(negSquare);
     negativePointer--;
 }

 console.log(result);


