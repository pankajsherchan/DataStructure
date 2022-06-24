
function numberRange(input, target) {
    let result = [-1, -1];

    result[0] = bs(input, target, false);

    if (result[0] == -1) {
        return result;
    }

    result[1] = bs(input, target, true);
    return result;
}

function bs(input, target, findMax) {
    let start = 0;
    let end = input.length - 1;
    let key = -1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (target < input[mid]) {
            end = mid - 1;
        } else if (target > input[mid]) {
            start = mid + 1;
        } else {
            if (findMax) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }

            key = mid;
        }
    }

    return key;
}

console.log(numberRange([4, 6, 6, 6, 9], 6))


// Input: [4, 6, 6, 6, 9], key = 6
// Output: [1, 3]