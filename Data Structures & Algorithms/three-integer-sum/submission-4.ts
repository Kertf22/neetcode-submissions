class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */


    threeSum(nums: number[]): number[][] {
        const sorted = nums.sort((a,b) => a-b);
        const res = [];

        // num[i] = -(num[left] + num[right])
        for (let i=0;i<sorted.length;i++) {
            let target = -sorted[i];
            let left = i+1;
            let right = i == sorted.length - 1 ? sorted.length - 2: sorted.length-1;

            while(right>left) {
                const sum = sorted[left]+sorted[right];
                if (sum < target) {
                    left++;
                }
                else if (sum > target) {
                    right--;
                    }
                else {
                    let r = [sorted[i],sorted[left],sorted[right]];
                    let has = res.some(a =>  a[0] == r[0] && a[1] == r[1] && a[2]==r[2])
                    if (!has) res.push(r)       
                    left++
                }
            }
        }
        return res;
    }
}
