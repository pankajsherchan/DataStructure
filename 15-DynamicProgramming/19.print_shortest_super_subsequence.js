// Input: s1: "abcf" s2:"bdcf" 
// Output: 5
// Explanation: The shortest common super-sequence (SCS) is "abdcf".

// lcs = abdcf

const s1 = 'abcf';
const s2 = 'bdcf';

const printSCS = (s1, s2) => {
    
    const table = new Array(s1.length + 1).fill().map(() => new Array(s2.length +1).fill());

    for (let i=0; i < s1.length + 1; i++) {
        for (let j=0; j < s2.length + 1; j++) {
            if (i ==0 || j == 0) {
                table[i][j] =0
            }
        }
    }

    for (let i= 1; i < s1.length + 1; i++) {
        for (let j= 1; j < s2.length + 1; j++) {
            if (s1[i-1] == s2[i-1]) {
                table[i][j] = 1 + table[i-1][j-1]
            } else {
                table[i][j] = Math.max(table[i-1][j], table[i][j-1])
            }
        }
    }

    let result = '';


    let i = s1.length;
    let j = s2.length;

    while (i > 0 && j > 0) {
        if (s1[i-1] == s2[j-1]) {
            result += s1[i-1];
            i--;
            j--;
        } else {
            if (table[i-1][j] > table[i][j-1]) {
                result += s1[i-1];
                i--;
            } else {
                result += s2[j-1];
                j--;
            }
        }
    }

    while ( i > 0) {
        result += s1[i-1]
        i--;
    }

    while ( j > 0) {
        result += s2[j- 1]
        j--
    }

    return [...result].reverse().join('');

}

console.log(printSCS(s1, s2))
