class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let result = [];
        numbers.forEach((num, i) => {
            const value = target - num;
            if (numbers.includes(value)) {
                result = [numbers.indexOf(value) + 1, i + 1];
            }
        });
        return result;
    }
}
