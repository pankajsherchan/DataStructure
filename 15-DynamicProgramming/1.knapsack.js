// knapsack - maximum items
const knapsackR = (weightArray, valueArray, totalWeight, n) => {
    // base case;
    if (n == 0 || totalWeight == 0) {
        return 0;
    }

    let memoTable = Array(n+1).fill().map(() => Array(totalWeight + 1))

    if (memoTable[n][totalWeight]) return memoTable[n][totalWeight];

    if (weightArray[n-1] <= totalWeight)  {
        // first condition - we include this item in the knapsack
        // second condition - we do not include this item in the knapsack

        const valueWithItemIncluded = valueArray[n-1] + knapsackR(weightArray, valueArray, totalWeight - weightArray[n-1], n-1);
        const valueWithoutItemIncluded = knapsackR(weightArray, valueArray, totalWeight, n-1);
        const memoValue = Math.max(valueWithItemIncluded, valueWithoutItemIncluded);
        memoTable[n][totalWeight] = memoValue;
        return memoValue;
    } else {
        return knapsackR(weightArray, valueArray, totalWeight, n-1);
    }
}

const weightA = [1,3,4,5];
const valueA = [1,4,5,7];
const weight = 7;
const result = knapsackR(weightA, valueA, weight, weightA.length);

console.log(result)


const knapsackI = (weightArray, valueArray, w, n) => {
   const table = Array(n+1).fill().map(() => Array(w+1))

   for (let i=0; i < n+1; i++) {
       for (let j=0; j < w+1; j++){
           if (i ==0 || j == 0) {
               table[i][j] = 0;
           }
       }
   }

   for (let i=1; i < n+1; i++) {
       for (let j=1; j < w+1; j++) {

        if (weightArray[i] <= j) {
            const valueWithItemIncluded = valueArray[i-1] +  table[i-1][j-weightArray[i-1]];
            const valueWithoutItemIncluded = table[i-1][j];
            
            table[i][j] = Math.max(valueWithoutItemIncluded, valueWithItemIncluded);
        } else {
            table[i][j] = table[i-1][j]
        }
       }
   }

   return table[n][w]

}


// const weightA = [1,3,2,5];
// const valueA = [1,4,5,7];
// const weight = 7;
// const resultI = knapsackI(weightA, valueA, weight, weightA.length);
// console.log(resultI)