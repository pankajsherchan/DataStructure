// const a = "abdca";
// const b = "cbda";

const a = "passport"
const b = "ppsspt"

const LCS = (s1, s2, i, j) => {
    if (i < 0 || j < 0) {
        return 0;
    }

    if (s1[i] == s2[j]) {
        return 1 + LCS(s1, s2, i-1, j-1)
    } else {
        return Math.max(LCS(s1, s2, i-1, j), LCS(s1, s2, i, j-1));
    }
}

console.log(LCS(a, b, a.length-1, b.length-1))


const LCSDynamic = (s1, s2) => {
    const table = new Array(s1.length + 1).fill().map(() => new Array(s2.length + 1).fill());

    for (let i=0; i < s1.length + 1; i++) {
        for (let j=0; j < s2.length + 1; j++) {
            if ( i ==0 || j == 0) {
                table[i][j] = 0;
            }
        }
    }



    for (let i= 1; i < s1.length + 1; i++) {
        for (let j= 1; j < s2.length + 1; j++) {
            if (s1[i-1] == s2[j-1]) {
                table[i][j] = 1 + table[i-1][j-1]
            } else {
                table[i][j] = Math.max(table[i-1][j] , table[i][j-1])
            }
        }
    }
    return table[s1.length][s2.length]
}

console.log(LCSDynamic(a, b)) 
