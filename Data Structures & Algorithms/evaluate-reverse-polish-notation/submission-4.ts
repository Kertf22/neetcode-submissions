class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */

    evalRPN(tokens: string[]): number {
        const chars = new Set(["+", "*", "-", "/"]);
        let stack = [];
        for (let i = 0; i < tokens.length; i++) {
            const char = tokens[i];
            if (chars.has(char)) {
                let a = stack.pop();
                let b = stack.pop();
                let r = 0;
                if (char == "+") r = b + a;
                else if (char == "-") r = b - a;
                else if (char == "*") r = b * a;
                else if (char == "/") {
                    r = b / a;
                    r = r > 0 ? Math.floor(r) : Math.ceil(r);
                }
                stack.push(r);
                continue;
            }
            stack.push(+char);
        }

        return stack.pop();
    }
}
