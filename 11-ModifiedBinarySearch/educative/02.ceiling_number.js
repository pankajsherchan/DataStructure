// Input: [1, 3, 8, 10, 15], key = 12
// Output: 4


function findCeil(input, target) {
    let start = 0;
    let end = input.length - 1;

    while (start <= end) {
        const mid = Math.floor(start + (end - start) / 2);
        if (target < input[mid]) {
            end = mid - 1;
        } else if (target > input[mid]) {
            start = mid + 1;
        } else {
            return mid;
        }
    }
    return start;
}

console.log(findCeil([1, 3, 8, 10, 15], 12)); // 4
console.log(findCeil([4, 6, 10], 6)); // 1
console.log(findCeil([4, 6, 10], 17)); // -1
