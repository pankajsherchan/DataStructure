// Problem Statement#
// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

// Example 1:

// Input: [1, 2, 3, 4, 6], target=6
// Output: [1, 3]
// Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6
// Example 2:

// Input: [2, 5, 9, 11], target=11
// Output: [0, 2]
// Explanation: The numbers at index 0 and 2 add up to 11: 2+9=11

const input = [1, 2, 3, 4, 6] 
const target = 6;

// using hashmap
const targetSum = (input, target) => {
    let map = {};
    for (let i = 0; i < input.length; i++) {
        const complement = target - input[i];

        if (map[complement] >= 0) { 
            return [map[complement], i];
        } else {
            map[input[i]] = i;
        }
    }
    return [-1, -1]
}

const targetSumTwoPointers = (input, target) => {
    let start = 0;
    let end = input.length -1;

    while (start <= end) {
        if (input[start] + input[end] > target) {
            end--;
        } else if (input[start] + input[end] < target) {
            start++;
        } else {
            return [start, end]
        }
    }
}

console.log(targetSum(input, target));
console.log(targetSumTwoPointers(input, target));