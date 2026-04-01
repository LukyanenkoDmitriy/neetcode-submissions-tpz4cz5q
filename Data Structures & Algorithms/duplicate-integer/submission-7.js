class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    
   hasDuplicate = num => {
	const numbersCount = {}

	num.forEach(num => {
		if (numbersCount[num]) numbersCount[num]++
		else numbersCount[num] = 1
	})
	return num.length !== Object.keys(numbersCount).length
}
}
