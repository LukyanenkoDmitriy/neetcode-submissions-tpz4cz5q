class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const recordBrackets = {
            "(": ")",
            "[": "]",
            "{": "}",
        };

        for (let char of s) {
            if (char === "(" || char === "{" || char === "[") {
                stack.push(char);
            } else {
                if (stack.length === 0) return false;
                const lastStackChar = stack.pop();
                if (recordBrackets[lastStackChar] !== char) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}
