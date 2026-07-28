class Solution {
    localV = new Date().getMilliseconds().toFixed(2)+"___"
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let ns = ""
        for (let i =0;i<strs.length;i++) {
            ns+=strs[i]+this.localV;
        }
        return ns;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if (str==this.localV)return [""];
        if (str.length==0) return [];
        const r=str.split(this.localV);
        r.pop();
        return r; 
    }
}
