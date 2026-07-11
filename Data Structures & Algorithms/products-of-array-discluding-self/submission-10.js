class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const result = new Array(n).fill(1);

        let left = 1; // произведение всех элементов слева от текущей позиции
        let right = 1; // произведение всех элементов справа от текущей позиции

        let l = 0; // указатель слева
        let r = n - 1; // указатель справа

        while (l < n) {
            // Заполняем левый указатель
            result[l] *= left;
            left *= nums[l];

            // Заполняем правый указатель
            result[r] *= right;
            right *= nums[r];

            l++;
            r--;
        }

        return result;
    }
}
