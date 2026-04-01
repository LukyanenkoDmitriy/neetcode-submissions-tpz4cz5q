class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
 const result = {}

	const getSortedStr = str => str.split('').sort().join('')

	strs.forEach(str => {
		const sortedStr = getSortedStr(str)
		if (result[sortedStr]) {
			result[sortedStr] = [...result[sortedStr], str]
		} else result[sortedStr] = [str]
	})

	return Object.values(result)
}
}