class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let res = new Map();
        for (let i=0; i<nums.length; i++) {
            const compliment = target - nums[i];
            if (res.has(compliment)) {
                return [res.get(compliment), i];
            }
            res.set(nums[i], i);
        }

        return [];
    }
}
