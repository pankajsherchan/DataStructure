// Input: [10, 6, 4], key = 4
// Output: 2

// Input: [1, 2, 3, 4, 5, 6, 7], key = 5
// Output: 4

function agnosticBinarySearch(input, target) {
    if (input.length <= 1) return input;

    let isAscending = input[0] < input[1];

    let start = 0;
    let end = input.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (target < input[mid]) {
            if (isAscending) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }

        } else if (target > input[mid]) {
            if (isAscending) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }

        } else {
            return mid;
        }
    }

    return -1;
}

console.log(agnosticBinarySearch([10, 6, 4], 4))
console.log(agnosticBinarySearch([1, 2, 3, 4, 5, 6, 7], 5));

