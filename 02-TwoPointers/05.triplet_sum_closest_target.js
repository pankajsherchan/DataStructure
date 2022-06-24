// Problem Statement#
// Given an array of unsorted numbers and a target number, 
// find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

// Example 1:
// Input: [-2, 0, 1, 2], target=2
// Output: 1
// Explanation: The triplet [-2, 1, 2] has the closest sum to the target.

// Example 2:
// Input: [-3, -1, 1, 2], target=1
// Output: 0
// Explanation: The triplet [-3, 1, 2] has the closest sum to the target.

// Example 3:
// Input: [1, 0, 1, 1], target=100
// Output: 3
// Explanation: The triplet [1, 1, 1] has the closest sum to the target.

const tripletSumClosestTarget = (input, targetSum) => {
    const sortedInput = input.sort((a, b) => a - b);
    let closestDiff = Number.MAX_SAFE_INTEGER;
    let result = [];

    for (let i = 0; i < sortedInput.length; i++) {
        const pairToFind = targetSum - sortedInput[i];
        let start = i + 1;
        let end = sortedInput.length - 1;


        while (start < end) {
            const sum = sortedInput[start] + sortedInput[end];

            if (sum > pairToFind) {
                // const diff = Math.abs(sum - targetSum)
                // closestDiff = Math.min(diff, closestDiff)
                // result = [sortedInput[i], sortedInput[start], sortedInput[end]]
                end--
            } else if (sum < pairToFind) {
                const diff = Math.abs(sum - targetSum);
                closestDiff = Math.min(diff, closestDiff);
                result = [sortedInput[i], sortedInput[start], sortedInput[end]]
                start++;
            } else {
                return [sortedInput[i], sortedInput[start], sortedInput[end]]
            }
        }
    }

    return result.reduce((a, b) => a + b, 0);
}

const input = [-2, 0, 1, 2];
const targetSum = 2;


const input2 = [-3, -1, 1, 2]
const target2 = 1



const input3 = [1, 0, 1, 1]
const target3 = 100

console.log(tripletSumClosestTarget(input, targetSum))
console.log(tripletSumClosestTarget(input2, target2))
console.log(tripletSumClosestTarget(input3, target3))