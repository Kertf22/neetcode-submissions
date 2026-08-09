class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const stack = [];
        const res = temperatures.map(_=> 0);

        for(let i=0;i< temperatures.length;i++) {
            const current = temperatures[i];
            while(stack.length>0 && 
            current > stack[stack.length-1][1]) {
                const [r,] = stack.pop();
                res[r] = i - r;
            }
            stack.push([i,current]);
        }
        return res;
    }
}
