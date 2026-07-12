class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const unifyString = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        let l = 0;
        let r = unifyString.length - 1;

        while (l < r) {
            if (unifyString[l] !== unifyString[r]) {
                return false;
            }
            l++;
            r--;
        }

        return true;
    }
}
