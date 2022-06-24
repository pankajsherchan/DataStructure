
function count_rotations(input) {
    let start = 0;
    let end = input.length - 1;

    while (start < end) {
        const mid = Math.floor(start + (end - start) / 2);
        // find the index of min number and that will be the number of times of rotation

        if (input[mid - 1] > input[mid]) return mid;
        if (input[mid] > input[mid + 1]) return mid + 1;

        if (input[start] < input[mid]) { // left side is sorted, so the pivot is on right side
            start = mid + 1;
        } else { // // right side is sorted, so the pivot is on left side
            end = mid - 1;
        }
    }

    return 0;
}

console.log(count_rotations([10, 15, 1, 3, 8])) // 2
console.log(count_rotations([4, 5, 7, 9, 10, -1, 2])) //5
console.log(count_rotations([1, 3, 8, 10])) // 0



function count_rotations_with_duplicates(input) {
    let start = 0;
    let end = input.length - 1;

    while (start < end) {
        const mid = Math.floor(start + (end - start) / 2);

        if (input[mid - 1] > input[mid]) return mid;
        if (input[mid] > input[mid + 1]) return mid + 1;

        if (input[start] === input[mid] && input[end] === input[mid]) {
            if (input[start] > input[start + 1]) { // if element at start+1 is not the smallest
                return start + 1;
            }

            start += 1;
            if (input[end - 1] > input[end]) { // if the element at end is not the smallest
                return end;
            }
            end -= 1;
        }
        else if (input[start] < input[mid]) { // left side is sorted, so the pivot is on right side
            start = mid + 1;
        } else { // // right side is sorted, so the pivot is on left side
            end = mid - 1;
        }
    }

    return 0;
}

console.log(count_rotations_with_duplicates([3, 3, 7, 3])); //