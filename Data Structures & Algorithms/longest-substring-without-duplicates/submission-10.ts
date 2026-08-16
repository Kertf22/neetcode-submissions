class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let max = 0;
        let chars = new Set();
        let l=0;
        for (let r=0;r<s.length;r++) {
            if (chars.has(s[r])) {
                for (const c of chars) {
                    chars.delete(s[l]);
                    l++;
                    if (c == s[r]) break;
                }
            }
            chars.add(s[r]);
            max = Math.max(max,chars.size);
        }
        return max;
    }
}
