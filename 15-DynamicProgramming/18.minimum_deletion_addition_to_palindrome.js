// Input: "abdbca"
// Output: 1
// Explanation: By removing "c", we get a palindrome "abdba".

const LCS = (s1, s2, i, j) => {
    if (i < 0 || j < 0) return 0;

    if (s1[i] === s2[j]) {
        return 1 + LCS(s1, s2, i-1, j-1)
    } else {
        return Math.max(LCS(s1, s2, i, j-1), LCS(s1, s2, i-1, j))
    }
}

const s = 'abdbca';
const reverseS = [...s].reverse().join('');

const lcs = LCS(s, reverseS, s.length -1, reverseS.length -1);
console.log(s.length - lcs);