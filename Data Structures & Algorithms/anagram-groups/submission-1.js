class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        		const res = {}
		strs.forEach(str => {
			const sortStr = str.split('').sort().join('')
			if (res[sortStr]) {
				res[sortStr] = [...res[sortStr], str]
			} else res[sortStr] = [str]
		})

		return Object.values(res)
    }
}
