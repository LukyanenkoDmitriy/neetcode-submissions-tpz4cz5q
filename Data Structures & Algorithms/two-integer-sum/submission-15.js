class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            const dif = target - nums[i];
            if (map.has(dif)) {
                return [i, map.get(dif)];
            }
            map.set(nums[i], i);
        }
        return [];
    }
}
