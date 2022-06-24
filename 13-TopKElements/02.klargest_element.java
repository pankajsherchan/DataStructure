import java.util.PriorityQueue;

// https://leetcode.com/problems/kth-largest-element-in-an-array/

class Solution {
    public static int findKthSmallest(int[] nums, int k) {

        PriorityQueue<Integer> minHeap = new PriorityQueue<Integer>();

        for (int i = 0; i < nums.length; i++) {
            minHeap.add(nums[i]);

            if (minHeap.size() > k) {
                minHeap.remove();
            }
        }

        return minHeap.remove();
    }

    public static void main(String[] args) {
        int firstSol = Solution.findKthSmallest(new int[] { 3, 2, 1, 5, 6, 4 }, 2);
        // 5
        System.out.println(firstSol);

        int secondSol = Solution.findKthSmallest(new int[] { 3, 2, 3, 1, 2, 4, 5, 5, 6 }, 4);
        // 4
        System.out.println(secondSol);

    }
}
