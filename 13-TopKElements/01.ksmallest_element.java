import java.util.PriorityQueue;

// https://leetcode.com/problems/kth-largest-element-in-an-array/submissions/
// commented part

// Example 1:
// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

// Example 2:
// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

class Solution {
    public static int findKthLargest(int[] nums, int k) {

        PriorityQueue<Integer> maxHeap = new PriorityQueue<Integer>((a, b) -> b - a);

        for (int i = 0; i < nums.length; i++) {
            maxHeap.add(nums[i]);

            if (maxHeap.size() > k) {
                maxHeap.remove();
            }
        }
        return maxHeap.remove();
    }

    public static void main(String[] args) {
        int firstSol = Solution.findKthLargest(new int[] { 1, 5, 12, 2, 11, 5 }, 3);
        // 5
        System.out.println(firstSol);

        int secondSol = Solution.findKthLargest(new int[] { 1, 5, 12, 2, 11, 5 }, 4);
        // 5
        System.out.println(secondSol);

    }
}