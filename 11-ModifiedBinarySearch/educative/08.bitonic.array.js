function find_max_in_bitonic_array(input) {
    let start = 0;
    let end = input.length - 1;

    while (start < end) {
        const mid = Math.floor(start + (end - start) / 2);

        if (input[mid] > input[mid + 1]) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }

    return input[start];
}

console.log(find_max_in_bitonic_array([1, 3, 8, 12, 4, 2]))
console.log(find_max_in_bitonic_array([3, 8, 3, 1]))
console.log(find_max_in_bitonic_array([1, 3, 8, 12]))
console.log(find_max_in_bitonic_array([10, 9, 8]))