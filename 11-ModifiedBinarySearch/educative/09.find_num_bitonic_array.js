// Input: [1, 3, 8, 4, 3], key=4
// Output: 3

function findNumBitonicArray(input, target) {
    let start = 0;
    let end = input.length - 1;
    let maxIndex = -1;
    while (start < end) {
        const mid = Math.floor(start + (end - start) / 2);
        if (input[mid] > input[mid + 1]) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }

    maxIndex = start;

    const a = binarySearch(input, 0, maxIndex, target);
    if (a != -1) return a;
    const b = binarySearch(input, maxIndex + 1, input.length - 1, target);
    if (b != -1) return b;

    return -1;
}

function binarySearch(input, start, end, target) {
    while (start <= end) {
        const mid = Math.floor(start + (end - start) / 2);

        if (input[mid] < input[mid + 1]) { // ascending
            if (target < input[mid]) {
                end = mid - 1;
            } else if (target > input[mid]) {
                start = mid + 1;
            } else {
                return mid;
            }
        } else { // descending
            if (target < input[mid]) {
                start = mid + 1;
            } else if (target > input[mid]) {
                end = mid - 1;
            } else {
                return mid;
            }
        }
    }

    return -1;
}

console.log(findNumBitonicArray([1, 3, 8, 4, 3], 4));