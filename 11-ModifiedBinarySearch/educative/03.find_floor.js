
function findFloor(input, target) {
    if (target > input[input.length - 1]) return -1;
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

    return end;
}

console.log(findFloor([1, 3, 8, 10, 15], 12)); // 3
console.log(findFloor([4, 6, 10], 6)); // 1
console.log(findFloor([4, 6, 10], 17)); // -1
