class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let indexedMap = new Map();

        for(const item of strs) {
            const count = new Array(26).fill(0);
            for (const ch of item) count[ch.charCodeAt(0) - 97]++;
            const mapKey = count.join("#");
            // let key: string = item.split("").sort().join("");
            if (!indexedMap.has(mapKey)) indexedMap.set(mapKey, [])
            indexedMap.get(mapKey).push(item);
            
        };

        return [...indexedMap.values()];
    }
}
