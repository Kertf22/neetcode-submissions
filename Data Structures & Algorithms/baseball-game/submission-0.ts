class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const stack = [];

        for (const o of operations) {
            if(o=="C") stack.pop();
            else if(o=="D") stack.push(stack[stack.length-1]*2);
            else if (o=="+") stack.push(stack[stack.length-1]+stack[stack.length-2])
            else stack.push(Number(o))
        }

        return stack.reduce((a,acc)=> acc+a,0);
    }
}
