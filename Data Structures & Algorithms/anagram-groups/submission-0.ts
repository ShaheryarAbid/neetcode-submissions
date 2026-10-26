class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let indexedMap = new Map();

        for(const item of strs) {
            let key: string = item.split("").sort().join("");
            if (!indexedMap.has(key)) indexedMap.set(key, [])
            indexedMap.get(key).push(item);
            
        };

        return [...indexedMap.values()];
    }
}
