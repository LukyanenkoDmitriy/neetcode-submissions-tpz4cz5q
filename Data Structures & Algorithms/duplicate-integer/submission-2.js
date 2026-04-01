class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    	hasDuplicate = (arr) => {
		const set = new Set(arr)
		return arr.length !== set.size
	}
}
