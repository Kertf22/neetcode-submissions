class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let max=1;
        let res:number[] = nums.map(_=>0);
        let zero = null;

        for (let i=0;i<nums.length;i++) {
            if(nums[i]==0) {
                if(zero!=null) return res;
                zero=i;
            }
            else max = max*nums[i]
        }

        if(zero) res[zero] = max;
        else res = nums.map(n => max/n);
        return res;
    }
}
