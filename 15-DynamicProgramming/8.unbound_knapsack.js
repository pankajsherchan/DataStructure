// Items: { Apple, Orange, Melon }
// Weights: { 1, 2, 3 }
// Profits: { 15, 20, 50 }
// Knapsack capacity: 5
// Ans: 80

const weight = [1,2,3]
const profit = [15,20,50];
const capacity = 5;

const unboundKnapsack = (weight, profit, capacity, n) => {
    const table = new Array(n+1).fill(0).map(() => new Array(capacity+1).fill(0));

    for (let i =0; i < n+1; i++) {
        for (let j =0; j < capacity + 1; j++) {
            if (i ==0 ) {
                table[i][j] = 0;
            }
            if (j == 0) {
                table[i][j] = 0;
            }
        }
    }

    for (let i =1; i < n+1; i++) {
        for (let j = 1; j < capacity + 1; j++) {
            if (weight[i-1] <= j) {
                const profitWithItem = profit[i-1] + table[i][j-weight[i-1]];
                const profitWithOutItem = table[i-1][j];
                table[i][j] = Math.max(profitWithItem, profitWithOutItem)
            } else {
                table[i][j] = table[i-1][j]
            }
        }
    }

    return table[n][capacity]
}

const unboundKnapsackR = (weight, profit, capacity, n) => {
    if (capacity ==0 || n == 0) {
        return 0;
    }

    const table = new Array(n+1).fill(0).map(() => new Array(capacity+1).fill(0));

    if (table[n][capacity]) return table[n][capacity];

    if (weight[n-1] <= capacity) {
        const itemIncluded = profit[n-1] +  unboundKnapsackR(weight, profit, capacity - weight[n-1], n)
        const itemExcluded = unboundKnapsackR(weight, profit, capacity, n-1)

        const value = Math.max(itemIncluded, itemExcluded);
        table[n][capacity] = value;
        return value;

    } else {
        const value =  unboundKnapsackR(weight, profit, capacity, n-1);
        table[n][capacity] = value;
        return value;
    }
}

console.log(unboundKnapsackR(weight, profit, capacity, weight.length))