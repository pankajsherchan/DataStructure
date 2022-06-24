function search_next_letter(letters, key) {
    let start = 0;
    let end = letters.length - 1;
    while (start <= end) {
        const mid = Math.floor(start + (end - start) / 2);
        if (key > letters[mid]) {
            start = mid + 1;
        } else if (key < letters[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return letters[start % letters.length];
};

console.log(search_next_letter(['a', 'c', 'f', 'h'], 'f')) //h
console.log(search_next_letter(['a', 'c', 'f', 'h'], 'b')) //c
console.log(search_next_letter(['a', 'c', 'f', 'h'], 'm')) //a
