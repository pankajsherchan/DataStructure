const arr = [12, -1, -7, 8, -15, 30, 13, 28]
const k = 3;


const firstNegativeNumber = (arr, k) => {
    let result = []
    for (let i=0; i < arr.length - k + 1; i++) {
        let negativeNumber = [];
        for (let j = i; j < i + k; j++) {
            if (arr[j] < 0) {
                negativeNumber.push(arr[j]);
            }
        }
        const number = negativeNumber.length > 0 ? negativeNumber[0] : 0;
        result.push(number)
    }
    return result;
}

const firstNegativeNumberDynamic = (arr, k) => {
    let negativeNumbers = [];
    let result = []
    let start = 0;

    for (let i=0; i < arr.length; i++) {
        if (arr[i] < 0) negativeNumbers.push(arr[i]);

        if ( i >= k -1) {
            if (arr[start] < 0) {
                const negativeNumber = negativeNumbers.length > 0 ? negativeNumbers[0]: 0

                if (arr[start] == negativeNumber) {
                    // push it to the result and remove from the negative number arrays
                    result.push(negativeNumbers.shift())
                } else {
                    // push it to the result and do nothing in the negative number array
                    result.push(arr[start])
                }
            } else {
                const negativeNumber = negativeNumbers.length > 0 ? negativeNumbers.shift(): 0
                result.push(negativeNumber);
            }

            start++;
        }
        
    }

    return result;
}

console.log(firstNegativeNumber(arr, k))
console.log(firstNegativeNumberDynamic(arr, k))