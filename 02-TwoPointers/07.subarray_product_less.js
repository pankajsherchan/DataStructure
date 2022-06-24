// Problem Statement#
// Given an array with positive numbers and a positive target number, 
// find all of its contiguous subarrays whose product is less 
// than the target number.

// Example 1:
// Input: [2, 5, 3, 10], target=30 
// Output: [2], [5], [2, 5], [3], [5, 3], [10]
// Explanation: There are six contiguous subarrays whose product is less than the target.

// Example 2:
// Input: [8, 2, 6, 5], target=50 
// Output: [8], [2], [8, 2], [6], [2, 6], [5], [6, 5] 
// Explanation: There are seven contiguous subarrays 
// whose product is less than the target.

const input1 = [2, 5, 3, 10];
const target1 = 30;

const input = [8, 2, 6, 5];
const target = 50;


const subarrayWithProductLessThanTarget = (input, target) => {
    const sortedInput = input.sort((a, b) => a - b);
    let result = new Set();
    let left = 0;
    let product = 1;

    for (let right = 0; right < sortedInput.length; right++) {
        product *= sortedInput[right];

        while (product >= target && left < sortedInput.length) {
            product = product / sortedInput[left];
            left++;
        }

        if (product < target) {
            let tempList = [];
            for (let i = right; i >= left; i--) {
                result.add(sortedInput[i]);
                tempList.push(sortedInput[i]);
                if (tempList.length > 1) {
                    result.add(tempList)
                }
            }
        }

    }


    return result;
}

console.log(subarrayWithProductLessThanTarget(input, target));