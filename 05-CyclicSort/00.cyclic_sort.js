// Input: [3, 1, 5, 4, 2]
// Output: [1, 2, 3, 4, 5]
// Example 2:

// Input: [2, 6, 4, 3, 1, 5]
// Output: [1, 2, 3, 4, 5, 6]
// Example 3:

// Input: [1, 5, 6, 4, 3, 2]
// Output: [1, 2, 3, 4, 5, 6]

function cyclicSort(input) {
    let i = 0; let j = 0;
    while (i < input.length) {
        j++;
        if (input[i] != i + 1) {
            swap(input, i, input[i] - 1);
        } else {
            i++;
        }
    }
    console.log('How many times', j);
    return input;
}

function swap(input, i, j) {
    const temp = input[i];
    input[i] = input[j];
    input[j] = temp;
}


console.log(cyclicSort([3, 1, 5, 4, 2]));