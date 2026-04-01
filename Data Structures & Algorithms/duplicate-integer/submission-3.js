class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    	hasDuplicate = (arr) => {
		const arrayValues = {}
        for(let i = 0; i < arr.length; i++){
            if(arrayValues[arr[i]]){
                return true
            } else {
                arrayValues[arr[i]] = 1
            }
        }
        return false
	}
}
