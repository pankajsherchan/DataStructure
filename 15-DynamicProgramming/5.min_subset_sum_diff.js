const minSubsetSumDiff = (arr, sum, n)  => {
    const table = new Array(n+1).fill(false).map(() => new Array(sum+1).fill(false))

    // 6 * 17 matrix
    // given 5 items in an array, find the items that can be used to calculate the given sum
    // i - items in array
    // j - sum
    for (let i =0; i < n+1; i++) {
        for (let j = 0; j < sum+1; j++) {
            if (i ==0) {
                table[i][j] = false;
            }

            if (j == 0) {
                table[i][j] = true;
            }

        }
    }

    for (let i = 1; i < n+1; i++) {
        for (let j = 1; j < sum+1; j++) {
            if (arr[i-1] <= j) {
                const a = table[i-1][j-arr[i-1]];
                const b = table[i-1][j];
                const finalVal =  a || b;
                table[i][j] = finalVal;
            } else {
                table[i][j] = table[i-1][j]
            } 
        }
    }

    let min = Number.MAX_VALUE;

    for (let i =0; i < Math.floor(sum/2); i++) {
        if (table[n][i]) {
            min = Math.min(min, sum - 2 * i)
        }
    }
    return min;
}

const arr = [1, 2, 3, 9];

const sum = arr.reduce((a, b) => a+b, 0);

console.log(minSubsetSumDiff(arr, sum, arr.length));