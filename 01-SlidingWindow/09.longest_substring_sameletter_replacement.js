// Problem Statement#
// Given a string with lowercase letters only, if you are allowed to replace no more than 
// k letters with any letter, find the length of the longest substring having the same letters after replacement.

// Example 1:

// Input: String="aabccbb", k=2
// Output: 5
// Explanation: Replace the two 'c' with 'b' to have the longest repeating substring "bbbbb".
// Example 2:

// Input: String="abbcb", k=1
// Output: 4
// Explanation: Replace the 'c' with 'b' to have the longest repeating substring "bbbb".
// Example 3:

// Input: String="abccde", k=1
// Output: 3
// Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".

const str = 'aabccbb';
const k = 2;
let start = 0;

function longestSubstringLetterReplacement(str, k) {
    let charactersMap = {};
    let maxRepeatLetterCount = 0;
    let maxLength = Number.MIN_SAFE_INTEGER;

    for (let i =0; i < str.length; i++) {
        if (charactersMap[str[i]]) {
            charactersMap[str[i]] += 1;
            maxRepeatLetterCount = Math.max(maxRepeatLetterCount, charactersMap[str[i]])
        } else {
            charactersMap[str[i]] = 1;
            maxRepeatLetterCount = Math.max(maxRepeatLetterCount, charactersMap[str[i]])
        }

        if (i - start + 1 - maxRepeatLetterCount > k) {
            charactersMap[str[start]] -=1;
            start++;
        }

        maxLength = Math.max(maxLength, i - start + 1);
    }

    return maxLength;
}

console.log(longestSubstringLetterReplacement(str, k))

