class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const ended = position.length;
        const stack=[];
        for(let i=0;i<position.length;i++) {
            stack[i] = [position[i],speed[i]];
        }

        stack.sort((a,b) => a[0]-b[0]);
        let count=0;
        let t=0;
        while(stack.length > 0) {
            let [p,s] = stack.pop();
            if (p + s*t >= target) continue;
            t = (target - p)/s;
            count++;
        }
        return count;

    }
}
