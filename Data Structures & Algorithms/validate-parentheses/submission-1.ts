class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const reverse = {"]":"[",
        "}":"{",
        ")":"(",
        }
        const close = new Set([ ')', '}',  ']']);

        const stack = [];
        for (const char of s) {
          if (close.has(char) && stack.length > 0 && stack[stack.length-1] == reverse[char])stack.pop(); 
          else stack.push(char);
        }

        return !stack.length;
    }
}
