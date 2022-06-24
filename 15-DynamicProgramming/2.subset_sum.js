function subsetSumI(array, sum, n) {
    const table = Array(n+1).fill().map(() => Array(sum+1));

    // when the array is empty or n ==0
    for (let i =0; i < n+1; i++) {
        for (let j=0; j < sum+1; j++) {
            if (i == 0) {
                table[i][j] = false
            }
        }
     }

      // when sum expected is 0
    for (let i =0; i < n+1; i++) {
        for (let j=0; j < sum+1; j++) {
            if (j == 0) {
                table[i][j] = true
            }
        }
     }

     for (let i =1; i < n+1; i++) {
         for (let j =1; j < sum+1; j++) {
            if (array[i-1] <= j) {
                const valueWithItem =  table[i-1][j-array[i-1]]
                const valueWithoutItem = table[i-1][j];
                if (valueWithItem || valueWithoutItem) {
                    table[i][j] = true;
                } else {
                    table[i][j] = false;
                }
            } else {
                table[i][j] = table[i-1][j];
            }
         }
     }

     console.log(table)

     return table[n][sum]
}

function subsetSumR(array, sum, n) {
    if (sum == 0) return true;
    if (n == 0 && sum != 0 )return false;

    if (array[n-1] <= sum) {
        const itemIncluded = subsetSumR(array, sum - array[n-1], n-1)
        const itemExcluded = subsetSumR(array, sum, n-1);
        return itemIncluded || itemExcluded
    } else {
        return subsetSumR(array, sum, n-1)
    }
}

const array = [2,3,7,8,10];
const sum = 14;

console.log(subsetSumI(array, sum, array.length))
// console.log(subsetSumR(array, sum, array.length))