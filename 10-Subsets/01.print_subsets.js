// https://www.youtube.com/watch?v=Yg5a2FxU4Fo
// https://leetcode.com/problems/subsets/

function main(input) {
    let result = [];
    find_subsetR(input, result);
    return result;

    function find_subsetR(input, op) {
        if (input.length == 0) {
            result.push(op);
            return;
        }

        const currentItem = input[0];
        let op1 = [...op];
        let op2 = [...op, currentItem];

        const newSmallInput = [...input].slice(1);

        find_subsetR(newSmallInput, op1);
        find_subsetR(newSmallInput, op2);
    }
}

console.log(main([1, 2, 3]));

function find_subsets(input) {
    let result = [];
    result.push([]);

    for (let i = 0; i < input.length; i++) {
        let currentItem = input[i];
        let subsetLength = result.length;

        for (let j = 0; j < subsetLength; j++) {
            result.push([...result[j], currentItem]);
        }
    }

    return result;
}


console.log(find_subsets([1, 2, 3]))

