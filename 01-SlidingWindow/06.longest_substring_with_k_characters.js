// Problem Statement#
// Given a string, find the length of the longest substring in it with no more than K distinct characters.

// Example 1:
// Input: String="araaci", K=2
// Output: 4
// Explanation: The longest substring with no more than '2' distinct characters is "araa".

// Example 2:
// Input: String="araaci", K=1
// Output: 2
// Explanation: The longest substring with no more than '1' distinct characters is "aa".

// Example 3:
// Input: String="cbbebi", K=3
// Output: 5
// Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".

// Example 4:
// Input: String="cbbebi", K=10
// Output: 6
// Explanation: The longest substring with no more than '10' distinct characters is "cbbebi".

const str = 'araaci';
const K = 2;
// 4

const longestSubstringWithKDistinctChars = (str, k) => {
    let charactersMap = {};
    let maxLength = -1;
    let left = 0;
    for (let i = 0; i < str.length; i++) {
        if (charactersMap[str[i]]) {
            charactersMap[str[i]] += 1;
        } else {
            charactersMap[str[i]] = 1;
        }

        while (Object.keys(charactersMap).length > k) {
            charactersMap[str[left]] -= 1;
            if (charactersMap[str[left]] == 0) delete charactersMap[str[left]];
            left++;
        }

        if (Object.keys(charactersMap).length <= k) {
            // good
            // get the length and 
            maxLength = Math.max(maxLength, i + 1 - left);
        }
    }

    return maxLength;
}

console.log(longestSubstringWithKDistinctChars(str, K))