function subsetSumCount(arr, sum, n) {

    const table = new Array(n+1).fill(0).map(() => new Array(sum+1).fill(0));

    for (let i=0; i < n+1; i++) {
        for (let j =0; j < sum+1; j++) {
            if (i == 0) {
                table[i][j] = 0;
            }

            if (j == 0) {
                table[i][j] = 1;
            }
        }
    }

    console.log(table)


    for (let i =1; i < n+1; i++) {
        for (let j=1; j < sum+1; j++) {
            if (arr[i-1] <= j) {
                table[i][j] =  table[i-1][j-arr[i-1]] + table[i-1][j];
            } else {
                table[i][j] = table[i-1][j];
            }
        }
        console.log(table)
    }
    return table[n][sum];
}

const a = [1,2,7,1,5];
const sum = 9;

const  b= [1, 1, 2, 3]
const sum1 = 4;

console.log(subsetSumCount(b, sum1, b.length));


let countSubsets = function(num, sum) {
    const n = num.length;
    const dp = Array(n)
      .fill(0)
      .map(() => Array(sum + 1).fill(0));
  
    // populate the sum=0 columns, as we will always have an empty set for zero sum
    for (let i = 0; i < n; i++) {
      dp[i][0] = 1;
    }

    console.log(dp)
  
    // with only one number, we can form a subset only when the required sum is equal to its value
    for (let s = 1; s <= sum; s++) {
      dp[0][s] = num[0] == s ? 1 : 0;
    }

    console.log(dp)
  
    // process all subsets for all sums
    for (let i = 1; i < num.length; i++) {
      for (let s = 1; s <= sum; s++) {
        // exclude the number
        dp[i][s] = dp[i - 1][s];
        // include the number, if it does not exceed the sum
        if (s >= num[i]) {
          dp[i][s] += dp[i - 1][s - num[i]];
        }
      }
    }
  
    // the bottom-right corner will have our answer.
    return dp[num.length - 1][sum];
  };
  
  console.log(`Count of subset sum is: ---> ${countSubsets([1, 1, 2, 3], 4)}`);
//   console.log(`Count of subset sum is: ---> ${countSubsets([1, 2, 7, 1, 5], 9)}`);