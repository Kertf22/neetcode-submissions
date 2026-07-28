class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const res = {};
        for (const s of strs) {
            let found = false;
            for (const v of Object.keys(res)) {
                if(this.isAnagram(v,s)) {
                    found=true;
                    res[v].push(s)
                }
            }
            if(!found) res[s] = [s];
        } 

        return Object.values(res);
    }

    isAnagram(s:string,t:string):boolean {
        const first =s.split("").sort().join("");
        const second=t.split("").sort().join("");
        return first == second;
    }
}
