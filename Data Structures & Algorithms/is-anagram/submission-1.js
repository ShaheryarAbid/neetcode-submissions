class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sFreq = {};
        const tFreq = {};

        for (let ch of s) {
            sFreq[ch] = (sFreq[ch] ?? 0) + 1;
        }
        for (let ch of t) {
            tFreq[ch] = (tFreq[ch] ?? 0) + 1;
        }
        for (let p in sFreq) {
            if (sFreq[p] !== tFreq[p]) {
                return false;
            }
        }
        for (let p in tFreq) {
            if (tFreq[p] !== sFreq[p]) {
                return false;
            }
        }
        return true;
    }
}
