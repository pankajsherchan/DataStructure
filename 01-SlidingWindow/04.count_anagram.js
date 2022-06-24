const str = 'aabaabaa';
const anagram = 'aaba';
// output -> 4

let anagramMap = {};

for (let i =0; i < anagram.length; i++) {
    if (anagramMap[anagram[i]]) {
        anagramMap[anagram[i]] += 1;
    } else {
        anagramMap[anagram[i]] = 1;
    }
}


const isEqual =  (obj1, obj2)  => {
    if (Object.keys(obj1).length != Object.keys(obj2).length) return false

    for (const key of Object.keys(obj1)) {
        if (obj1[key] != obj2[key]) return false;
    }

    return true;
}


let substring = '';
let substringMap = {};
let count = 0;
let start = 0;
for (let i=0; i < str.length; i++) {
    if (substringMap[str[i]]) {
        substringMap[str[i]] += 1;
    } else {
        substringMap[str[i]] = 1;
    }

    substring += str[i];

    if ( i >= anagram.length -1) {
        if (isEqual(anagramMap, substringMap)) {
            count += 1;
        }

        if (substringMap[str[start]]) {
            substringMap[str[start]] -=1;
        }

        start++;
    }
}

console.log(count)



// const a = { 'a': 2, 'b': 3}
// const b = { 'b': 3, 'a': 2}
// console.log(isEqual(a, b))


