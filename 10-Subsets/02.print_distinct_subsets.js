// https://www.youtube.com/watch?v=lfFqW1DTsqM
// https://leetcode.com/problems/subsets-ii/


function main(arr, op) {
    let result = [];
    subset(arr, op);
    return result;

    function subset(arr, op) {
        if (arr.length == 0) {
            if (result.filter(a => JSON.stringify(a.sort()) == JSON.stringify(op.sort())).length == 0) {
                result.push(op);
            }

            return;
        }
        let op1 = [...op];
        let op2 = [...op];

        op2.push(arr[0]);
        arr.shift();

        subset([...arr], op1);
        subset([...arr], op2);
    }
}

function distinctSubsetIterative(nums) {
    const subset = [];
    subset.push([]);

    for (let i = 0; i < nums.length; i++) {
        const currentNumber = nums[i];

        const n = subset.length;
        for (j = 0; j < n; j++) {
            const set = [...subset[j]];
            set.push(currentNumber);

            sortedSubsetArray = subset.filter(a => a.sort((x, y) => x - y));
            sortedNewSet = set.sort((x, y) => x - y);

            if (sortedSubsetArray.filter(a => JSON.stringify(a) == JSON.stringify(set)).length == 0) {
                subset.push(set);
            }
        }
    }

    return subset;
}





// console.log(subset('abc', ''))
console.log(main([1, 2, 2], []));
console.log(distinctSubsetIterative([1, 2, 2]))