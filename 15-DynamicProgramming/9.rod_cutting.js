// Lengths: [1, 2, 3, 4, 5]
// Prices: [2, 6, 7, 10, 13]
// Rod Length: 5

const lengthArray = [1,2,3,4,5]
const prices = [2,6,7,10,13];
const capacity = 5;

const rodCutting = (arr, prices, capacity, n) => {
    const table = new Array(n+1).fill(0).map(() => new Array(capacity+1).fill(0));

    for (let i=0; i < n+1; i++) {
        for (let j =0; j < capacity +1; j++) {
            if (i == 0) {
                table[i][j] = 0;
            }
            if (j ==0) {
                table[i][j] = 0
            }
        }
    }

    for (let i=1; i < n+1; i++) {
        for (let j=1; j < capacity +1; j++) {
            if (arr[i-1] <= j) {
                table[i][j] = Math.max(prices[i-1] + table[i][j-arr[i-1]], table[i-1][j])
            } else {
                table[i][j] = table[i-1][j];
            }
        }
    }

    return table[n][capacity]
}

console.log(rodCutting(lengthArray, prices, capacity, lengthArray.length))