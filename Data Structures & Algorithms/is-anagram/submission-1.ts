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

        const map2 = new Map();
        for (let i=0;i<t.length;i++) {
            const exist = map2.get(t[i]);
            map2.set(t[i],exist ? exist + 1 : 1)
        }

        for (const [k,v] of map.entries()) {
            if (map2.get(k) != v) return false;
        }

        return true;
    }
}
