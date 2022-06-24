function equalPartitionSum(arr) {

const sum = arr.reduce((a,b) => a+b, 0)

if (sum % 2 == 0) {
    return subsetSum(arr, sum/2, arr.length)
} else {
    return false
}
}


function subsetSum(arr, sum, n) {
    // initialize array;
    const table = Array(n+1).fill().map(() => Array(sum+1));

    for (let i=0; i < n+1; i++) {
        for (let j=0; j < sum +1; j++) {
            if (i == 0) {
                table[i][j] = false;
            }

            if ( j== 0) {
                table[i][j] = true;
            }
        }
    }

    for (let i =1; i < n+1; i++) {
        for (let j = 1; j < sum + 1; j++) {
            if (arr[i-1] <= sum) {
                const itemIncluded = table[i-1][j - arr[i-1]];
                const itemExcluded = table[i-1][j];

                table[i][j] = itemIncluded || itemExcluded;
            } else {
                table[i][j] = table[i-1][j]
            }
        }
    }


    return table[n][sum]
}

const array = [1,5,11,5];
console.log(equalPartitionSum(array))