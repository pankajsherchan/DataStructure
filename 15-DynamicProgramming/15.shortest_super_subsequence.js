// Input: s1: "abcf" s2:"bdcf" 
// Output: 5
// Explanation: The shortest common super-sequence (SCS) is "abdcf". 

const s1 = 'abcf';
const s2 = 'bdcf';


const LCS = (s1, s2, i, j) => {
    if (i < 0 || j < 0) return 0;

    if (s1[i] === s2[j]) {
        return 1 + LCS(s1, s2, i-1, j-1)
    } else {
        return Math.max(LCS(s1, s2, i, j-1), LCS(s1, s2, i-1, j))
    }
}

const lcs = LCS(s1, s2, s1.length -1, s2.length -1)
const result = s1.length + s2.length - lcs;
console.log(result)