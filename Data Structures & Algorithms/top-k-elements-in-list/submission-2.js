class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
	const list = {}

	nums.forEach(num => {
		if (!list[num]) {
			list[num] = 1
		} else {
			list[num]++
		}
	})
	return Object.keys(list)
		.sort((a, b) => list[b] - list[a])
		.slice(0, k)
    }
}
