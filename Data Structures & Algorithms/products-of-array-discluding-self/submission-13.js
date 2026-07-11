class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const result = new Array(n).fill(1);

        let leftProd = 1;
        for (let i = 0; i < n; i++) {
            result[i] = leftProd;
            leftProd *= nums[i];
        }

        let rightProd = 1;
        for (let i = n - 1; i >= 0; i--) {
            result[i] *= rightProd;
            rightProd *= nums[i];
        }

        return result;
    }
}
