class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
  	const anagrams = {}
	strs.forEach(str => {
		const sortedStr = str.split('').sort().join('')
		if (anagrams[sortedStr]) {
			anagrams[sortedStr].push(str)
		} else anagrams[sortedStr] = anagrams[sortedStr] = [str]
	})
	return Object.values(anagrams)
    }
}
