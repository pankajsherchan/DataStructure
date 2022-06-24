// Input: [4, 6, 6, 6, 9], key = 6
// Output: [1, 3]

// function findRange1(input, target) {
//     let start = 0;
//     let end = input.length - 1;
//     let result = [-1, -1]

//     while (start <= end) {
//         const mid = Math.floor(start + (end - start) / 2);

//         if (target < input[mid]) {
//             end = mid - 1;
//         } else if (target > input[mid]) {
//             start = mid + 1;
//         } else {
//             let i = mid;
//             let j = mid;

//             while (i >= 0 && input[i] == input[i - 1]) {
//                 i--;
//             }

//             while (j < input.length && input[j] == input[j + 1]) {
//                 j++
//             }

//             result[0] = i;
//             result[1] = j;
//             return result;
//         }
//     }

//     return result;
// }


function findRange(input, target) {
    let result = [-1, -1]
    result[0] = binarySearch(input, target, false);

    if (result[0] == -1) return result;
    result[1] = binarySearch(input, target, true);

    return result;
}

function binarySearch(input, target, findHigherRange) {
    let start = 0;
    let end = input.length - 1;
    let key = -1;

    while (start <= end) {
        const mid = Math.floor(start + (end - start) / 2);
        if (target < input[mid]) {
            end = mid - 1;
        } else if (target > input[mid]) {
            start = mid + 1;
        } else {
            key = mid;
            if (findHigherRange) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return key;
}
console.log(findRange([4, 6, 6, 6, 9], 6)); // [1,3]