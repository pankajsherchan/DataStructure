const profits = [1, 6, 10, 16];
const weights = [1, 2, 3, 5];

function knapsack(profit, weight, capacity, index) {
    if (index < 0 || capacity == 0) return 0;

    if (weight[index] <= capacity) {
        const profitWithItemIncluded = profit[index] + knapsack(profit, weight, capacity - weight[index], index - 1)
        const profitWithOutItemIncluded = knapsack(profit, weight, capacity, index - 1);
        return Math.max(profitWithItemIncluded, profitWithOutItemIncluded)
    } else {
        return knapsack(profit, weight, capacity, index - 1)
    }
}

const weight = [1, 2, 3]
const profit = [15, 20, 50];
const capacity = 5;
function unboundKnapsack(profit, weight, capacity, n) {
    if (n < 0 || capacity == 0) return 0;

    if (weight[n] <= capacity) {
        const profitWithItemIncluded = profit[n] + unboundKnapsack(profit, weight, capacity - weight[n], n);
        const profitWithOutItemIncluded = unboundKnapsack(profit, weight, capacity, n - 1);
        return Math.max(profitWithItemIncluded, profitWithOutItemIncluded);
    } else {
        return unboundKnapsack(profit, weight, capacity, n - 1);
    }


}


// console.log(knapsack(profits, weights, 7, weights.length - 1))
console.log(unboundKnapsack(profit, weight, capacity, weight.length - 1))