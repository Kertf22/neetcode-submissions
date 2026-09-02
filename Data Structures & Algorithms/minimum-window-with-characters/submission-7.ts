class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        if (t == "") return "";
        const chars = new Map<string,number>();
        let copy = new Map<string,number>();
        for(const c of t) {
            chars.set(c, (chars.get(c) || 0)+1);
            copy.set(c, 0);
        }
        let res = [-1,-1];
        let resLen = Infinity

        let l=0;
        let count=0;
        let max = chars.size;
        for (let r=0;r<s.length;r++) {
            copy.set(s[r], (copy.get(s[r]) || 0)+1);

            if (chars.has(s[r]) && chars.get(s[r]) == copy.get(s[r])) {
                count++;
            }
            while (max == count) {
                if((r-l+1) < resLen) {
                    resLen=r-l+1;
                    res=[l,r]
                }
                copy.set(s[l], copy.get(s[l])-1);
                if (chars.has(s[l]) && chars.get(s[l]) > copy.get(s[l])) count--;
                l++;
            }
        }
        console.log(res);
        if (resLen==Infinity) return "";
        return s.slice(res[0],res[1]+1);
    }
}
