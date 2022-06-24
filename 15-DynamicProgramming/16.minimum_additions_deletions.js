// Minimum Deletions & Insertions to Transform a String into another

// Input: s1 = "abc"
//        s2 = "fbc"
// Output: 1 deletion and 1 insertion.
// Explanation: We need to delete {'a'} and insert {'f'} to s1 to transform it into s2.


// Input: s1 = "passport"
//        s2 = "ppsspt"
// Output: 3 deletions and 1 insertion
// Explanation: We need to delete {'a', 'o', 'r'} and insert {'p'} to s1 to transform it into s2.


const LCS = (s1, s2, i, j) => {
    if (i < 0 || j < 0) return 0;

    if (s1[i] === s2[j]) {
        return 1 + LCS(s1, s2, i-1, j-1)
    } else {
        return Math.max(LCS(s1, s2, i, j-1), LCS(s1, s2, i-1, j))
    }
}

const s1 = 'passport';
const s2 = 'ppsspt';

const lcs = LCS(s1, s2, s1.length -1, s2.length -1);

const toDelete = s1.length - lcs;
const toAdd = s2.length  - lcs;

console.log('toDelete', toDelete);
console.log('toAdd', toAdd);
