// Problem Statement#
// Given an array arr of unsorted numbers and a target sum, 
// count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, 
// and k are three different indices. 
// Write a function to return the count of such triplets.

// Example 1:

// Input: [-1, 0, 2, 3], target=3 
// Output: 2
// Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]
// Example 2:

// Input: [-1, 4, 2, 1, 3], target=5 
// Output: 4
// Explanation: There are four triplets whose sum is less than the target: 
//    [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]


const tripletWithSmallerSum = (input, targetSum) => {
    const sortedInput = input.sort((a, b) => a - b);
    let result = []
    let count = 0;

    for (let i = 0; i < sortedInput.length; i++) {
        let smallerPairToFind = targetSum - sortedInput[i];

        let start = i + 1;
        let end = sortedInput.length - 1;

        while (start < end) {
            const sum = sortedInput[start] + sortedInput[end];

            if (sum < smallerPairToFind) {
                // result.push([sortedInput[i], sortedInput[start], sortedInput[end]]);
                count += end - start;
                start++;
            } else if (sum >= smallerPairToFind) {
                end--;
            }
        }
    }

    return count;
}


const input = [-1, 0, 2, 3];
const target = 3;

console.log(tripletWithSmallerSum(input, target))
// [-1, 4, 2, 1, 3], target=5 
console.log(tripletWithSmallerSum([-1, 4, 2, 1, 3], 5))


