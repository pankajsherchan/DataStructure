// Input: [1, 3, 8, 10, 15], key = 12
// Output: 10


function findMinDifference(input, target) {
    let start = 0;
    let end = input.length - 1;

    let minValue = Number.MAX_VALUE;
    let index = -1;

    while (start <= end) {
        const mid = Math.floor(start + (end - start) / 2);
        const abs = Math.abs(target - input[mid]);

        if (abs < minValue) {
            minValue = abs;
            index = mid;
        }

        if (target < input[mid]) {
            end = mid - 1;
        } else if (target > input[mid]) {
            start = mid + 1;
        } else {
            return input[mid];
        }
    }
    return input[index];
}

console.log(findMinDifference([1, 3, 8, 10, 15], 12)) // 10