class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {    
        let max = nums.length;
        let idx = Math.floor(max/2);
        let min = 0;
        
        while(idx > min && idx < max) {
            if (nums[idx] == target) return idx; 
            else if(nums[idx] > target) {
                max = idx;
                idx = Math.floor(max/2);
            } else {
                min = idx;
                idx = Math.floor((max+min)/2);
            }
        }
        if (nums[idx] == target) return idx;

        return -1;
    }



}
