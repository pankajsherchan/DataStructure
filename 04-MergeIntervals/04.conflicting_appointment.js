// [[1,4], [2,5], [7,9]]

const input1 = [[1, 4], [2, 5], [7, 9]];

function conflictingApp(input) {
    input = input.sort((a, b) => a[0] - b[0])
    let firstInterval = input[0];
    let [start, end] = firstInterval;

    for (let i = 1; i < input.length; i++) {
        let [currentStart, currentEnd] = input[i];
        if (currentStart <= end) return false;
        start = Math.min(start, currentStart);
        end = Math.max(end, currentEnd);
    }

    return true;
}

console.log(conflictingApp(input1));
console.log(conflictingApp([[6, 7], [2, 4], [8, 12]]))

