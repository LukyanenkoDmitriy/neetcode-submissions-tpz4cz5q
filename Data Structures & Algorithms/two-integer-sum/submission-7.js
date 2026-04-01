class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
			let result = []
		nums.forEach((num, index) => {
			const value = target - num
			if (nums.includes(value)) {
				result = [index, nums.indexOf(value)]
			}
		})
		return result
	}
}
