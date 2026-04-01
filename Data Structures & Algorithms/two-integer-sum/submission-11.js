class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
 twoSum(nums, target) {
	let result = []

	nums.forEach((num, i) => {
		let value = target - num
		if (nums.includes(value)) {
			console.log(nums.includes(value))
			result = [i, nums.indexOf(value)]
		}
	})

	return result
}
}
