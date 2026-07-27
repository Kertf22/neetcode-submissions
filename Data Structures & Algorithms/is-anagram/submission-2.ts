class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length != t.length) return false;
        
        const map = new Map();
        for (let i=0;i<s.length;i++) {
            const exist = map.get(s[i]);
            map.set(s[i],exist ? exist + 1 : 1)
        }

        for (let i=0;i<t.length;i++) {
            const count = map.get(t[i]);
            if (!count) return false;
            map.set(t[i], count-1)
        }
        return true;
    }
}
