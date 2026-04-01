class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
	  for (let i = 0; i < nums.length; i++) {
    const j = nums.indexOf(target - nums[i]);
    if (j !== -1 && j !== i) return [i, j];
  }
  return [];
	}
}
