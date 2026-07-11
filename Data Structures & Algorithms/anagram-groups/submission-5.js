class Solution {
    /**
     * @param {string[]}
     * @return {string[][]}
     */
    groupAnagrams(strs) {
          const map = new Map()
  strs.forEach(str => {
    const unifyStr = str.split('').sort().join('')
    if (!map.has(unifyStr)) {
      map.set(unifyStr, [str])
    } else {

      map.set(unifyStr, [...map.get(unifyStr), str])
    }
  })

  return Array.from(map.values())
    }
}
