class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (!nums.length) return 0;
        const set = new Set(nums);
        let counter = 0;

        for (let num of set) {
            if (!set.has(num - 1)) {
                let newNum = num;
                let currentCounter = 1;

                while (set.has(newNum + 1)) {
                    currentCounter++;
                    newNum++;
                }

                counter = currentCounter > counter ? currentCounter : counter;
            }
        }
        return counter;
    }
}
