class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        const stack = []; // [height,count]
        let max=0;
        for (let i=0;i<heights.length;i++) {
            let start=i;
            while (stack.length > 0 && stack[stack.length-1][1] > heights[i]
            ) {
                const [ih,h] = stack.pop();
                let w = i-ih;
                // w = w + poped > i ? w : w+ poped ;
                let a = h * w ;
                max = Math.max(max,a);
                start=ih;
            }
            stack.push([start,heights[i]]);
        }
        
        while(stack.length) {
            const [ih,h] = stack.pop();
            let a = h * (heights.length-ih);
            max = Math.max(max,a);
        }

        return max;
    }
}
