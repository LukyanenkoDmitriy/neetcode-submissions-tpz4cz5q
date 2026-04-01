class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    
    hasDuplicate = (num) => {
		return new Set(num).size !== num.length
	}
}
