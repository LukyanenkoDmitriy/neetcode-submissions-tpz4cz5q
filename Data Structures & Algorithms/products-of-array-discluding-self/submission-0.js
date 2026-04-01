class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        	const result = []
	const fn = nums => nums.reduce((curr, acc) => curr * acc, 1)
	nums.forEach((num, i) => {
		const copyArr = [...nums]
		copyArr.splice(i, 1)
		result.push(fn(copyArr))
	})

	return result
    }
}
