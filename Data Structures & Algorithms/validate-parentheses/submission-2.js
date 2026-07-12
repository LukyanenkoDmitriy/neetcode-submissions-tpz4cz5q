class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const recordBrackets = {
            ")": "(",
            "]": "[",
            "}": "{",
        };
        for (let char of s) {
            if (char === "(" || char === "{" || char === "[") {
                stack.push(char);
            } else {
                const lastStackChar = stack.pop();
                if (lastStackChar !== recordBrackets[char]) {
                    return false;
                }
            }
        }

        return !stack.length;
    }
}
