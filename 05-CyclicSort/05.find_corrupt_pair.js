// Example 1:

// Input: [3, 1, 2, 5, 2]
// Output: [2, 4]
// Explanation: '2' is duplicated and '4' is missing.
// Example 2:

// Input: [3, 1, 2, 3, 6, 4]
// Output: [3, 5]
// Explanation: '3' is duplicated and '5' is missing.


// Find the Corrupt Pair(easy)#
// We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’.
// The array originally contained all the numbers from 1 to ‘n’, but due to a data error, 
// one of the numbers got duplicated which also resulted in one number going missing.
// Find both these numbers.

function findCorruptPair(input) {
    let i = 0;
    while (i < input.length) {
        if (input[i] != input[input[i] - 1]) {
            swap(input, i, input[i] - 1);
        } else {
            i++;
        }
    }

    let result = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] != i + 1) {
            result.push(input[i]);
            result.push(i + 1);
            return result;
        }
    }

    return []
}

function swap(input, i, j) {
    const temp = input[i];
    input[i] = input[j];
    input[j] = temp;
}


console.log(findCorruptPair([3, 1, 2, 5, 2]));
console.log(findCorruptPair([3, 1, 2, 3, 6, 4]));