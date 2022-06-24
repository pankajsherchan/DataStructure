// Given an array of positive numbers and a positive number ‘k,’ 
// find the maximum sum of any contiguous subarray of size ‘k’

// Input: [2, 1, 5, 1, 3, 2], k=3 
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3].

const maxSumArrayBruteForce = (arr, k) => {
    let maxSum = Number.NEGATIVE_INFINITY;

    for (let i=0; i < arr.length - k + 1; i++) {
        let sum = 0;
        for (let j =i; j < i + k; j++) {
            sum += arr[j];
        }
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum;
}

const maximumSumSubArray = (arr, k) => {
    let sum = 0;
    let sumStartIndex = 0;
    let maxSum = Number.NEGATIVE_INFINITY;
    for (let i=0; i < arr.length; i++) {
        sum += arr[i];
        if (i >= k -1) {
            maxSum = Math.max(maxSum, sum);
            sum -= arr[sumStartIndex];
            sumStartIndex++;
        }
    }

    return maxSum;
}

const arr = [2, 1, 5, 1, 3, 2];
const k = 3;
console.log(maxSumArrayBruteForce(arr, k))
console.log(maximumSumSubArray(arr, k))