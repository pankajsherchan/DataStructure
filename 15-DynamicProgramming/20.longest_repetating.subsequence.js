// Input: “t o m o r r o w”
// Output: 2
// Explanation: The longest repeating subsequence is “or” {tomorrow}.


// Input: “a a b d b c e c”
// Output: 3
// Explanation: The longest repeating subsequence is “a b c” {a a b d b c e c}.


// const s1 = 'tomorrow';
const s1 = 'aabdbcec'
const s2 = s1;

const LPS = (s1, s2, i, j) => {
    if (i < 0 || j < 0) return 0;

    if (i !=j && s1[i] === s2[j]) return 1 + LPS(s1, s2, i-1, j-1)

    return Math.max(LPS(s1, s2, i-1, j), LPS(s1, s2, i, j-1))
}


console.log(LPS(s1, s2, s1.length -1, s2.length -1))