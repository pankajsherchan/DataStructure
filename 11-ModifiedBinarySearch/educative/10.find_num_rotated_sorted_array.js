function findNumRotatedSortedArray(input, target) {
    let start = 0;
    let end = input.length - 1;

    while (start <= end) {
        const mid = Math.floor(start + (end - start) / 2);
        if (input[mid] == target) return mid;

        if (input[start] <= input[mid]) { // left part is sorted
            if (target >= input[start] && target < input[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else { // right part is sorted
            if (target > input[mid] && target <= input[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }

    return -1;
}

console.log(findNumRotatedSortedArray([10, 15, 1, 3, 8], 15)) // 1
console.log(findNumRotatedSortedArray([4, 5, 7, 9, 10, -1, 2], 10)) // 4


function search_rotated_with_duplicates(input, target) {
    let start = 0;
    let end = input.length - 1;

    while (start <= end) {
        const mid = Math.floor(start + (end - start) / 2);
        if (input[mid] == target) return mid;

        if (input[start] == input[mid] && input[end] == input[mid]) {
            start++;
            end--;
        }
        else if (input[start] <= input[mid]) { // left part is sorted
            if (target >= input[start] && target < input[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else { // right part is sorted
            if (target > input[mid] && target <= input[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }

    return -1;

}

console.log(search_rotated_with_duplicates([3, 7, 3, 3, 3], 7)); // 1