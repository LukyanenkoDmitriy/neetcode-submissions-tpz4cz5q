class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const unifyString = (s) => {
            return s.split("").sort().join("");
        };

        return unifyString(s) === unifyString(t);
    }
}
