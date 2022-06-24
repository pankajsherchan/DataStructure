// Words Concatenation (hard)#
// Given a string and a list of words, find all the starting indices of substrings in the given string that are a concatenation of all the given words exactly once without any overlapping of words. It is given that all words are of the same length.

// Example 1:

// Input: String="catfoxcat", Words=["cat", "fox"]
// Output: [0, 3]
// Explanation: The two substring containing both the words are "catfox" & "foxcat".
// Example 2:

// Input: String="catcatfoxfox", Words=["cat", "fox"]
// Output: [3]
// Explanation: The only substring containing both the words is "catfox".



const input = 'catcatfoxfox';
const words = ["cat", "fox"];


function wordConcatenation(input, words) {
    let combinedWords = ['catfox', 'foxcat']
    let result = [];
    let start = 0;
    // create given words map
    let wordCharsMap = {}
    for (const w of words) {
        for (let i = 0; i < w.length; i++) {
            const key = w[i];
            if (wordCharsMap[key]) {
                wordCharsMap[key] += 1;
            } else {
                wordCharsMap[key] = 1;
            }
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

        while (i - start + 1 > Object.keys(wordCharsMap).length) {
            charactersMap[input[start]] -= 1;
            if (charactersMap[input[start]] == 0) delete charactersMap[input[start]];
            start++;
        }


        if (Object.keys(charactersMap).length == Object.keys(wordCharsMap).length) {
            if (combinedWords.includes(input.substring(start, i + 1))) {
                result.push(start);
            }
        }
    }

    return result;
}


function areObjectEqualsWithOrder(obj1, obj2) {
    console.log('obj1, obj2: ', obj1, obj2);
    // console.log('obj1, obj2: ', obj1, obj2);
    // for (const key of Object.keys(obj1)) {
    //     if (obj1[key] != obj2[key]) return false;
    // }

    // return true;

    return JSON.stringify(obj1) == JSON.stringify(obj2);
}

console.log(wordConcatenation(input, words))