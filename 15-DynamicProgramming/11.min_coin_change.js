// Denominations: {1,2,3}
// Total amount: 11
// Output: 4

const arr = [1,2,3];
const totalAmount = 11;

const minCoin = (arr, totalAmount, n) => {
    const table = new Array(n+1).fill(0).map(() => new Array(totalAmount + 1).fill(0));

    for (let i=0; i < n+1; i++) {
        for (let j=0; j < totalAmount +1; j++) {
            if (i == 0) {
                table[i][j] = 0;
            }

            if (j == 0) {
                table[i][j] = 1;
            }
        }
    }

    for (let i =1; i < n+1; i++) {
        for (let j=1; j < totalAmount +1; j++) {
            if (arr[i-1] <= j) {
                const itemIncluded = 1 + table[i][j-arr[i-1]];
                const itemExcluded = table[i-1][j];
                console.log(itemIncluded, 'itemIncluded');
                console.log(itemExcluded, 'itemExcluded')
                table[i][j] = Math.min(itemIncluded, itemExcluded);
            } else {
                table[i][j] = arr[i-1][j]
            }
        }
    }

    return table[n][totalAmount];
}

console.log(minCoin(arr, totalAmount, arr.length))