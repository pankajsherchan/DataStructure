// Problem Statement #
// Given an array of unsorted numbers, find all unique triplets in it that
// add up to zero.

// Example 1:

// Input: [-3, 0, 1, 2, -1, 1, -2]
// Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
// Explanation: There are four unique triplets whose sum is equal to zero.
// Example 2:

// Input: [-5, 2, -1, -2, 3]
// Output: [[-5, 2, 3], [-2, -1, 3]]
// Explanation: There are two unique triplets whose sum is equal to zero.

const input = [-3, 0, 1, 2, -1, 1, -2];


const tripletSumZero = (input, targetSum) => {
    let result = [];
    const sortedInput = input.sort((a, b) => a - b);

    for (let i = 0; i < sortedInput.length; i++) {
        const pairToFind = targetSum - sortedInput[i];

        let start = i + 1;
        let end = sortedInput.length - 1;

        while (start < end) {
            let sum = sortedInput[start] + sortedInput[end];
            if (sum > pairToFind) {
                end--
            } else if (sum < pairToFind) {
                start++;
            } else {
                result.push([sortedInput[i], sortedInput[start], sortedInput[end]]);
                start++;
                end--
            }
        }

    }
    return result;
}


console.log(tripletSumZero(input, 0))