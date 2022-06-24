// Smallest Window containing Substring (hard)#
// Given a string and a pattern, find the smallest substring 
// in the given string which has all the characters of the given pattern.

// Example 1:
// Input: String="aabdec", Pattern="abc"
// Output: "abdec"
// Explanation: The smallest substring having all characters of the pattern is "abdec"

// Example 2:
// Input: String="abdbca", Pattern="abc"
// Output: "bca"
// Explanation: The smallest substring having all characters of the pattern is "bca".

// Example 3:
// Input: String="adcad", Pattern="abc"
// Output: ""
// Explanation: No substring in the given string has all characters of the pattern.

const input = 'adcad';
const pattern = 'abc';

function smallestWindowSubstring(input, pattern) {

    let result = '';
    let patternMap = {};
    let start = 0;
    for (let i = 0; i < pattern.length; i++) {
        const key = pattern[i];
        if (patternMap[key]) {
            patternMap[key] += 1
        } else {
            patternMap[key] = 1;
        }
    }

    let charactersMap = {};
    for (let i = 0; i < input.length; i++) {
        const key = input[i];
        if (charactersMap[key]) {
            charactersMap[key] += 1
        } else {
            charactersMap[key] = 1;
        }

        while (contains(charactersMap, patternMap)) {

            if (result == '') {
                result = input.substring(start, i + 1);
            } else {
                if (input.substring(start, i + 1).length < result.length) {
                    result = input.substring(start, i + 1);
                }
            }

            charactersMap[input[start]] -= 1;
            if (charactersMap[input[start]] == 0) delete charactersMap[input[start]];
            start++;
        }

    }

    return result;
}


function areObjectEquals(obj1, obj2) {
    for (const key of Object.keys(obj1)) {
        if (obj1[key] != obj2[key]) return false;
    }

    return true;
}

function contains(obj1, obj2) {
    for (const key of Object.keys(obj2)) {
        if (!Object.keys(obj1).includes(key)) return false;
    }

    return true;
}


console.log(smallestWindowSubstring(input, pattern));