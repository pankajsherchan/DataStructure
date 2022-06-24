const subArrayAverage = (arr, k) => {
    const result = [];

    for (let i=0; i <= arr.length - k; i++) {
        let sum = 0;
        for (let j= i; j < i+k; j++) {
            sum += arr[j];
        }
        result.push(sum/k);
    }
    return result;
}

const subArrayAverageOptimize = (arr, k) => {
    const result = [];
    let windowSum = 0;
    let windowStart = 0;

    for (let i=0; i < arr.length; i++) {
      windowSum += arr[i];

      if (i >= k - 1) {
        result.push(windowSum / k)
        windowSum -= arr[windowStart];
        windowStart += 1;
      }
    }

    return result;
}

const arr = [1, 3, 2, 6, -1, 4, 1, 8, 2]
const k = 5

console.log(subArrayAverage(arr, k))
console.log(subArrayAverageOptimize(arr, k))