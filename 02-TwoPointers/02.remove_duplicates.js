// Problem Statement#
// Given an array of sorted numbers, remove all duplicates from it. 
// You should not use any extra space; after removing the duplicates in-place return the length 
// of the subarray that has no duplicate in it.

// Example 1:

// Input: [2, 3, 3, 3, 6, 9, 9]
// Output: 4
// Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].
// Example 2:

// Input: [2, 2, 2, 11]
// Output: 2
// Explanation: The first two elements after removing the duplicates will be [2, 11].

const removeDuplicates = (input) => {
    let map = {}
    let count = input.length;

    for (let i=0; i < input.length; i++) {
        if (map[input[i]]) {
            count -= 1;
        } else {
            map[input[i]] = true;
        }
    }
    return count;
}

const removeDuplicates2Pointer = (input) => {
   let pointer1 = 0;
   
   for (let pointer2 = 1; pointer2 < input.length; pointer2++) {
       if (input[pointer1] != input[pointer2]) {
        pointer1++;
        input[pointer1] = input[pointer2]   
       }
   }

   return pointer1 + 1;
}

const input = [2,3,3,3,6,9,9];

console.log(removeDuplicates(input))
console.log(removeDuplicates2Pointer(input))