class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
     encode(strs) {
        return JSON.stringify(strs);
    }

    decode(s) {
        return JSON.parse(s);
    }
}
