const s1 = "passport"
const s2 = "ppsspt"
// Output: 3
// Explanation: The longest common substring is "ssp".

function findLCSLengthRecursive(s1, s2, i1, i2, count) {
    if (i1 < 0 || i2 < 0) return count;

    if (s1[i1] === s2[i2]) {
      count = findLCSLengthRecursive(s1, s2, i1 - 1, i2 - 1, count + 1);
    }

    const c1 = findLCSLengthRecursive(s1, s2, i1, i2 - 1, 0);
    const c2 = findLCSLengthRecursive(s1, s2, i1 - 1, i2, 0);

    return Math.max(count, Math.max(c1, c2));
  }

const LCSubstringDynamic = (s1, s2) => {
    const table = new Array(s1.length + 1).fill().map(() => new Array(s2.length + 1));

    for (let i=0; i < s1.length + 1; i++) {
        for (let j =0; j < s2.length + 1; j++) {
            if (i ==0 || j == 0) {
                table[i][j] = 0
            }
        }
    }


    for (let i=1; i < s1.length + 1; i++) {
        for (let j =1; j < s2.length + 1; j++) {
         if (s1[i-1] === s2[j-1]) {
             table[i][j] = 1 + table[i-1][j-1]
         } else {
             table[i][j] = 0;
         }
        }
    }

    let max = -1;

    for (let i= 0; i < s1.length + 1; i++) {
        for (let j =0 ; j < s2.length + 1; j++) {
            if (table[i][j] > max) {
                max = table[i][j]
            }
        }
    }
    return max;
}


console.log(findLCSLengthRecursive(s1, s2, s1.length -1, s2.length -1, 0))
console.log(LCSubstringDynamic(s1, s2));