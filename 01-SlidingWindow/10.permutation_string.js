// Example 1:

// Input: String="oidbcaf", Pattern="abc"
// Output: true
// Explanation: The string contains "bca" which is a permutation of the given pattern.
// Example 2:

// Input: String="odicf", Pattern="dc"
// Output: false
// Explanation: No permutation of the pattern is present in the given string as a substring.
// Example 3:

// Input: String="bcdxabcdy", Pattern="bcdyabcdx"
// Output: true
// Explanation: Both the string and the pattern are a permutation of each other.
// Example 4:

// Input: String="aaacb", Pattern="abc"
// Output: true
// Explanation: The string contains "acb" which is a permutation of the given pattern.


const str = 'aaacb';
const pattern = 'abc';

const permutation = (str, pattern) => {
    let charactersMap = {};
    let patternMap = {}
    let left = 0;
    for (let i = 0; i < pattern.length; i++) {
        if (patternMap[pattern[i]]) {
            patternMap[pattern[i]] += 1
        } else {
            patternMap[pattern[i]] = 1
        }
    }

    for (let i = 0; i < str.length; i++) {
        if (charactersMap[str[i]]) {
            charactersMap[str[i]] += 1;
        } else {
            charactersMap[str[i]] = 1;
        }

        while (i - left + 1 > pattern.length) {
            const key = str[left];
            charactersMap[key] -= 1;

            if (charactersMap[key] == 0) {
                delete charactersMap[key];
            }
            left++;
        }

        if (Object.keys(charactersMap).length > 0 && Object.keys(charactersMap).length == Object.keys(patternMap).length) {
            // compare the two object
            if (isObjectEqual(charactersMap, patternMap)) return true;
        }
    }

    return false;
}

const isObjectEqual = (obj1, obj2) => {
    for (const key of Object.keys(obj1)) {
        if (obj1[key] != obj2[key]) return false;
    }
    return true;
}

console.log(permutation(str, pattern))