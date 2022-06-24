// Problem Statement#
// Given a string, find the length of the longest substring, which has all distinct characters.

// Example 1:

// Input: String="aabccbb"
// Output: 3
// Explanation: The longest substring with distinct characters is "abc".
// Example 2:

// Input: String="abbbb"
// Output: 2
// Explanation: The longest substring with distinct characters is "ab".
// Example 3:

// Input: String="abccde"
// Output: 3
// Explanation: Longest substrings with distinct characters are "abc" & "cde".

const str = 'abccde';

let characterMap = {}
let distinctSubStringCount = Number.MIN_SAFE_INTEGER;
let start = 0;

for (let i =0; i < str.length; i++) {
    if (characterMap[str[i]]) {
        characterMap[str[i]]  += 1;
    } else {
        characterMap[str[i]] = 1;
    }

    while(Object.values(characterMap).some(a => a > 1)) {
        characterMap[str[start]] -= 1;
        if (characterMap[str[start]] == 0) {
            delete characterMap[str[start]];
        }
        start++;
    }

    distinctSubStringCount = Math.max(distinctSubStringCount, i - start + 1);
}   

console.log(distinctSubStringCount)