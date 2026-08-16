class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let max = 0;
        const subs = new Set<string>();
        let sub = "";
        for (let i=0;i<s.length;i++) {
            const exist = sub.indexOf(s[i]);
            if (exist != -1) {
                subs.add(sub);
                sub = sub.slice(exist+1,sub.length)
            };
            sub += s[i];
        }
        subs.add(sub);

        for (const item of subs) {
            max = Math.max(item.length, max);
        };

        return max;
    }
}
