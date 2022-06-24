import java.util.Arrays;
import java.util.PriorityQueue;
import java.util.HashMap;


// https://www.geeksforgeeks.org/nearly-sorted-algorithm/

class Solution {
    public static int[] sortKSortedElement(int[] nums, int k) {
        int[] result = new int[nums.length];
        int j = 0;
        PriorityQueue<Integer> minHeap = new PriorityQueue<Integer>();

        for (int i = 0; i < nums.length; i++) {
            minHeap.add(nums[i]);
            if (minHeap.size() > k) {
                int heapVal = minHeap.remove();
                result[j++] = heapVal;
            }
        }

        while (minHeap.size() > 0) {
            result[j++] = minHeap.remove();
        }

        return result;
    }

    public static void main(String[] args) {
        int[] firstSol = Solution.sortKSortedElement(new int[] { 6, 5, 3, 2, 8, 10, 9 }, 3);
        // {2, 3, 5, 6, 8, 9, 10}
        System.out.println(Arrays.toString(firstSol));

        int[] secondSol = Solution.sortKSortedElement(new int[] { 10, 9, 8, 7, 4, 70, 60, 50 }, 4);
        // 4, 7, 8, 9, 10, 50, 60, 70
        System.out.println(Arrays.toString(secondSol));

    }
}
