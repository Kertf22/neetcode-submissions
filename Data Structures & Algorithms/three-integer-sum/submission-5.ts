class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */


    threeSum(nums: number[]): number[][] {
        nums.sort((a,b) => a-b);
        const res = [];

        // num[i] = -(num[left] + num[right])
        for (let i=0;i<nums.length;i++) {
            if (nums[i] > 0) break;

            let left = i+1;
            let right = nums.length - 1;

            while(right>left) {
                const sum = nums[i]+nums[left]+nums[right];
                if (sum > 0) right--;
                else if (sum < 0) left++;
                else {
                    let r = [nums[i],nums[left],nums[right]];
                    let has = res.some(a =>  a[0] == r[0] && a[1] == r[1] && a[2]==r[2])
                    if (!has) res.push(r)       
                    left++
                }
            }
        }
        return res;
    }
}
