class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
   topKFrequent(nums, k) {
	let result = {}

	nums.forEach(num => {
		if (result[num]) result[num]++
		else result[num] = 1
	})

	result = Object.keys(result).sort((a, b) => result[b] - result[a])

	return result.splice(0, k)
}
}
