//{1,1,2,3}, S=1
// Output = 3;

const arr = [1,1,2,3];
const diff = 1;

// s1 + s2 = sum(arr)
// s1 - s2 = diff
// 2s1 = 7 + 1;
// // s1 = 4;

const sum = arr.reduce((a,b) => a +b, 0);

const s1 = (sum + diff) / 2;

const countSubsetWithGivenDifference = (arr, sum, n) => {
  const table = new Array(n+1).fill(0).map(() => new Array(sum+1).fill(0));

  for (let i=0; i < n+1; i++) {
    for (let j=0; j < sum +1; j++) {
      if (i == 0) {
        table[i][j] = 0;
      }

      if ( j == 0) {
        table[i][j] = 1;
      }
    }
  }

  for (let i =1; i < n+1; i++) {
    for (let j =1; j < sum + 1; j++) {
      if (arr[i-1] <= j) {
        table[i][j] = table[i-1][j -arr[i-1]] + table[i-1][j]
      } else {
        table[i][j] = table[i-1][j]
      }
    }
  }

  return table[n][sum]
}


console.log(countSubsetWithGivenDifference(arr, s1, arr.length + 1))

