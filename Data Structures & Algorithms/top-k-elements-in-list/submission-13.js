class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};
        for (let num of nums) {
            if (map[num]) {
                map[num]++;
            } else {
                map[num] = 1;
            }
        }

         return Object.keys(map).sort((a, b) => map[b] - map[a]).splice(0, k)
    }
}
