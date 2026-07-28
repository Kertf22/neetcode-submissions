class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map:{[key:number]:number} = {};

        for(const n of nums) {
            map[n] = map[n] ? map[n] + 1 : 1;
            // map.set(n,map.has(n) ? map.get(n)+1:1);
        }

        // for (const n of nums) {
        //     if (map.get(n))
        //     map.get(n);
        // }        
        // {2:4,4:2,6:7}
        // {6:7,2:4,4:2}
        return Object.entries(map).sort((a,b) => b[1]-a[1]).slice(0,k).map(n=> Number(n[0]));
    }
}
