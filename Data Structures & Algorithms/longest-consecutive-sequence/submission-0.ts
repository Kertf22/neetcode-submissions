class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        
        let s = new Set<number>();
        let max = 0;
        // 2,3,4,5,6

        for (let i =0; i<nums.length;i++) {
            s.add(nums[i]);
        }

        for (const k of s) {
            let mb = 1;
            while(s.has(k-mb)) {
                s.delete(k-mb);
                mb++;
            } 
            let mh = 1;
            while(s.has(k+mh)) {
                s.delete(k+mh);
                mh++;
            } 
            s.delete(k);
            max = max > mh + mb - 1 ? max: mh + mb - 1
        }

        return max;
    }
}
