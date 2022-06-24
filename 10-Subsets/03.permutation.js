// https://www.youtube.com/watch?v=1cspuQ6qHW0&list=PL_z_8CaSLPWeT1ffjiImo0sYTcnLzo-wY&index=15

// https://leetcode.com/problems/permutations/

function main(input) {
    let result = [];
    permutation(input, 0, []);
    return result;

    function permutation(input, index, perm) {
        if (index == input.length) {
            result.push(perm);
            return;
        }

        let currentPermutationLength = result.length;
        for (let i = 0; i < currentPermutationLength + 1; i++) {
            let newPermutation = [...result]
            newPermutation.splice(i, 0, input[index]); // insert nums[index] at index 'i'
            permutation(input, index + 1, newPermutation);
        }
    }
}

console.log(main([1, 3, 5]));