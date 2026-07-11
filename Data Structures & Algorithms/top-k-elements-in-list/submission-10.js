class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        nums.forEach((num) => {
            if (!map.has(num)) {
                map.set(num, 1);
            } else map.set(num, map.get(num) + 1);
        });
        return [...map.keys()].sort((a, b) => map.get(b) - map.get(a)).splice(0, k);
    }
}
