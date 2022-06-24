// https://leetcode.com/problems/top-k-frequent-elements/

import java.util.Arrays;
import java.util.PriorityQueue;
import java.util.HashMap;

class Solution {
    public static int[] findKFrequentNumber(int[] nums, int k) {
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        for (int n: nums) {
            map.put(n, map.getOrDefault(n, 0) + 1);
        }

        PriorityQueue<Integer> minHeap = new PriorityQueue<Integer>((a, b) -> map.get(a) - map.get(b));
        for(int n: map.keySet()) {
            minHeap.add(n);
            if (minHeap.size() > k) {
                minHeap.remove();
            }
        }
        int[] result = new int[k];
        int j = 0;
        while (minHeap.size() > 0) {
            result[j++] = minHeap.remove();
        }

        return result;
    }

    public static void main(String[] args) {
        int[] firstSol = Solution.findKFrequentNumber(new int[] { 1, 1, 1, 2, 2, 3 }, 2);
        // [1,2]
        System.out.println(Arrays.toString(firstSol));

        int[] secondSol = Solution.findKFrequentNumber(new int[] { 1 }, 1);
        //  [1]
        System.out.println(Arrays.toString(secondSol));
    }
}


// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]