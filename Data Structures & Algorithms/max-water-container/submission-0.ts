class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let l=0;
        let r=heights.length-1;
        let max = 0;

        while (r>l) {
            const h = Math.min(heights[l],heights[r]);
            const a = h * (r-l);
            max = Math.max(a,max);
            if (h == heights[l]) l++;
            else r--;
        }

        return max;
    }
}
