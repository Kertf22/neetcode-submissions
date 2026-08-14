class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        //                l   r        
        // [0,2,0,3,1,0,1,3,2,1]
        // acc=1
        // let res = 0;
        // let l =0;
        // let r =0;
        // let maxL=height[l];
        // let maxR=height[r];
        // while (r>l) {
        // }
        const maxL = new Array(height.length).fill(0)
        for (let i=1;i<height.length;i++) {
            maxL[i] =  height[i-1]>maxL[i-1]?height[i-1]: maxL[i-1];
        }
        const maxR= new Array(height.length).fill(0)
        maxR[height.length-1]=0;

        for (let i=height.length-2;i>0;i--) {
            maxR[i] = height[i+1]>maxR[i+1] ? height[i+1] : maxR[i+1];
        }
        console.log(maxL,maxR)
        let res = 0;
        for (let i=1;i<height.length;i++) {
            const min = Math.min(maxL[i],maxR[i]);
            const v = Math.max(min-height[i],0);
            res+=v;
        }
        
        return res;
    }
}
