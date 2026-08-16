class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let max = 0;
        let unique = new Set();
        let lastStop=0;
        for (let i=0;i<s.length;i++) {
            if (unique.has(s[i]))  {
                max = Math.max(max, unique.size);
                let j = lastStop;
                unique.delete(s[i]);
                while (s[j] != s[i]) {
                    unique.delete(s[j]);
                    j++
                }
                lastStop=j+1
            }
            unique.add(s[i]);
        }
        return Math.max(max,unique.size)
    }
}
