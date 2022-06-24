// Denominations: {1,2,3}
// Total amount: 5
// Output: 5
// Explanation: There are five ways to make the change for '5', here are those ways:

const arr = [1,2,3];
const totalAmount = 5;
// output = 5

const countChange = (arr, totalAmount, n) => {
    const table = new Array(n+1).fill(0).map(() => new Array(totalAmount+1).fill(0));
    for (let i=0; i < n+1; i++) {
        for (let j=0; j < totalAmount+1; j++) {
            if (i == 0) {
                table[i][j] = 0;
            }

            if (j == 0) {
                table[i][j] = 1;
            }
        }
    }

    for (let i =1; i < n+1; i++) {
        for (let j=1; j < totalAmount + 1; j++) {
            if (arr[i-1] <= j) {
                const itemIncluded = table[i][j-arr[i-1]];
                const itemExcluded = table[i-1][j];
                table[i][j] = itemIncluded + itemExcluded;
            } else {
                table[i][j] = table[i-1][j];
            }
        }
    }

    console.log(table);
    return table[n][totalAmount];
}

console.log(countChange(arr, totalAmount, arr.length))
