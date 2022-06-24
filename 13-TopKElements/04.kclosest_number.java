import java.util.Arrays;
import java.util.HashMap;
import java.util.PriorityQueue;


// https://www.educative.io/courses/grokking-the-coding-interview/N8MJQNYyJPL

// https://leetcode.com/problems/find-k-closest-elements/

// note; if order needs to be mainted, use binary search

class Solution {
    public static int[] kClosestNumber(int[] nums, int k, int x) {
        // map {
        // key(num) - value (diff)
        // }
        // maxHeap

        HashMap<Integer, Integer> numDiffFromXMap = new HashMap<Integer, Integer>();

        for (int num: nums) {
            numDiffFromXMap.put(num, Math.abs(num - x));
        }

        PriorityQueue<Integer> maxHeap = new PriorityQueue<Integer>((a, b) -> numDiffFromXMap.get(b) - numDiffFromXMap.get(a));

        for (int key: numDiffFromXMap.keySet()) {
            maxHeap.add(key);
            if (maxHeap.size() > k) {
                maxHeap.remove();
            }
        }

        int[] top = new int[k];
        for(int i = k - 1; i >= 0; --i) {
            top[i] = maxHeap.poll();
        }
        return top;

    }

    public static void main(String[] args) {
        int[] firstSol = Solution.kClosestNumber(new int[] { 5, 6, 7, 8, 9 }, 3, 7);
        // 6, 7, 8
        System.out.println(Arrays.toString(firstSol));

        int[] secondSol = Solution.kClosestNumber(new int[] { 2, 4, 5, 6, 9 }, 3, 6);
        // 4,5,6
        System.out.println(Arrays.toString(secondSol));

        int[] thirdSol = Solution.kClosestNumber(new int[] { 2, 4, 5, 6, 9 }, 3, 10);
        // 5,6,9
        System.out.println(Arrays.toString(thirdSol));

    }
}
