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

    characterReplacement(s: string, k: number): number {
        let chars = new Set();
        for (const c of s) {
            chars.add(c);
        }
 
        let max=0;

        for (const c of chars) {
            let l=0;
            let count=0;
            for (let r=0;r<s.length;r++) {
                if(s[r]==c) count++;
                while((r-l+1)-count > k) {
                    if (s[l]==c)count--;
                    l++;
                }
                max = Math.max(r-l+1,max)
            }
        }
        
        return max;
    }
}
