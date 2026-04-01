class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
	const obj = {}
	nums.forEach(num => {
		if (obj[num]) {
			obj[num]++
		} else obj[num] = 1
	})
	const arrayNums = Object.entries(obj)
	arrayNums.sort((a, b) => b[1] - a[1])
	const result = arrayNums.map(a => a[0])
	return result.slice(0, k)
}
}
