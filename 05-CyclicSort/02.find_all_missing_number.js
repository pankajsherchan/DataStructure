// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

function allMissingNumber(nums) {
    let i = 0;
    const j = nums[i] - 1;
    while (i < nums.length) {
        if (nums[i] != nums[j]) {
            swap(nums, i, nums[i] - 1);
        } else {
            i++;
        }
    }
    console.log(nums)
}

function swap(input, i, j) {
    const temp = input[i];
    input[i] = input[j];
    input[j] = temp;
}

8

console.log(allMissingNumber([4, 3, 2, 7, 8, 2, 3, 1]));