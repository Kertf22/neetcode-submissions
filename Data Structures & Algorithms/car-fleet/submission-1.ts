class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const cars=[];
        for(let i=0;i<position.length;i++) {
            cars[i] = [position[i],speed[i]];
        }

        cars.sort((a,b) => b[0]-a[0]);
        const stack=[];

        for (let i=0;i<cars.length;i++) {
            const [p,s] = cars[i];
            const t = (target - p)/s;
            if (t > stack[stack.length-1] || stack.length ==0) {
                stack.push(t);
            };
        }

        return stack.length;
        // let count=0;
        // let t=0;
        // while(stack.length > 0) {
        //     let [p,s] = stack.pop();
        //     if (p + s*t >= target) continue;
        //     t = (target - p)/s;
        //     count++;
        // }
        // return count;

    }
}
