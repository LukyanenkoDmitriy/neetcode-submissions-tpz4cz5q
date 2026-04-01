class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
     isAnagram = (s, t) => {
	const checkIsAnagram = string =>
		string.toLowerCase().split('').sort().join('')
	return checkIsAnagram(s) === checkIsAnagram(t)
}
}
	