// interface Item {
//     key:string;
//     init:number;
//     end:number;
// }
class Solution {


    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    count:{[s:string]:number}={}
    getMaxCount():number {
        let max = 0;
        for (const key of Object.keys(this.count)) {
            max = Math.max(this.count[key],max);
        }
        return max;
    }
    characterReplacement(s: string, k: number): number {
        let l=0;
        let max=0;
        for (let r=0;r<s.length;r++) {
            if (!this.count[s[r]]) this.count[s[r]]=1;
            else this.count[s[r]]++;

            while(r-l+1 - this.getMaxCount() > k) {
                this.count[s[l]]--;
                l++;
            }
            max = Math.max(max,r-l+1);
        }
        return max;
    }
}
