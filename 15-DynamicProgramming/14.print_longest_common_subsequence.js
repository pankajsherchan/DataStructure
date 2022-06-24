const a = "passport"
const b = "ppsspt"
// psspt

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
    
    let lcs = '';
    let i = s1.length;
    let j = s2.length;

    while (i > 0 && j > 0) {
        if (s1[i-1] == s2[j-1]) {
            lcs += s1[i-1];
            i--;
            j--;
        } else {
            if (table[i][j-1] > table[i-1][j]) {
                j--
            } else {
                i--
            }
        }
    }

    return [...lcs].reverse().join('')
}

console.log(LCSDynamic(a, b)) 
