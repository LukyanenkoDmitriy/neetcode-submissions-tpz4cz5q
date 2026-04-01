class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const objResult = {}
        
        strs.forEach(str => {
            const checkedStr = str.split('').sort().join()
            if(!objResult[checkedStr]) {
                objResult[checkedStr] = [str]
            } else {
                objResult[checkedStr].push(str)
            }
        })
        
        return Object.values(objResult)
    }
}
