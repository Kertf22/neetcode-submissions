class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let res = 0;
        let l =0;
        let r =height.length-1;
        let maxL=height[l];
        let maxR=height[r];
        if (maxR > maxL) l++; 
        else r--;

        while (r>l) {
            const min = Math.min(maxL, maxR);
            const i = maxR > maxL ? l : r

            res+= Math.max(min-height[i],0);

            if (maxR > maxL) {
                if ( height[i] >= maxL)maxL=height[i];
            } else {
                if (height[i] >= maxR) maxR=height[i]
            }
            
            if (maxR > maxL) l++; 
            else r--;
        }
        return res;
    }
}
