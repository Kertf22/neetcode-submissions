class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const res = new Map();
        for (let i=0;i<nums.length;i++) {
            res.set(target - nums[i],i);
        }
        for (let i=0;i<nums.length;i++) {
            const j = res.get(nums[i]);
            if (!j|| j==i) continue
            if (i > j) return [j,i]
            else return [i,j]
        }
        return [0,1];
    }
}
