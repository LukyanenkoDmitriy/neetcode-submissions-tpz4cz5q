class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
      const result = []

  for (let i = 0; i < nums.length; i++) {
    const value = nums.reduce((acc, curr, j) => {
      if (i !== j) {
        acc *= curr
      }
      return acc
    }, 1)
    result.push(value)
  }
  return result
    }
}
