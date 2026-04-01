class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if(!nums.length)  return [-1, -1];

        for(let i = 0; i <= nums.length; i++){
        const value = target - nums[i]
           	if (nums.includes(value) && nums.indexOf(value) !== i) {
			return [i, nums.indexOf(value)]
		}
        }
        [-1, -1]
    }
}
