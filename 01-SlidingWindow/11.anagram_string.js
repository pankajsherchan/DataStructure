// Write a function to return a list of starting indices of the anagrams of the pattern in the given string.

//     Example 1:
// Input: String = "ppqp", Pattern = "pq"
// Output: [1, 2]
// Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".

//     Example 2:
// Input: String = "abbcabc", Pattern = "abc"
// Output: [2, 3, 4]
// Explanation: The three anagrams of the pattern in the given string are "bca", "cab", and "abc".

function anagram(input, pattern) {
    let result = [];
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
        const patternMapLength = Object.keys(patternMap).length;
        const charactersMapLength = Object.keys(charactersMap).length;

        while (i - start + 1 > patternMapLength) {
            charactersMap[input[start]] -= 1;
            if (charactersMap[input[key]] == 0) delete charactersMap[input[start]]
            start++;
        }

        if (charactersMapLength > 0 && charactersMapLength == patternMapLength) {
            // check if they are equal
            if (areObjectEquals(charactersMap, patternMap)) {
                result.push(start);
            }
        }
    }

    return result
}

function areObjectEquals(obj1, obj2) {
    for (const key of Object.keys(obj1)) {
        if (obj1[key] != obj2[key]) return false;
    }

    return true;
}

const input = 'ppqp';
const pattern = 'pq';

console.log(anagram(input, pattern))