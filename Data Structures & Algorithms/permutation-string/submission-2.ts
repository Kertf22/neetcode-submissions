class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
      let chars:{[c:string]:number} = {}
      for (const c of s1) {
        chars[c]=(chars[c] || 0)+1;
      }

      let current = {...chars};
      let l=0;
      // abc
      // lecabee
      //   lr
      for (let l=0;l<s2.length;l++) {
        let c = s2[l];
        if (!chars[c]) {
            continue;
        }
        current[c]--;
        if (current[c] == 0) delete current[c];
        let r=l+1;
        c = s2[r];
        while(current[c] && s2.length > r) {
            current[c]--;
            if (current[c] == 0) delete current[c];
            r++;
            c = s2[r];
        }
        if (Object.keys(current).length == 0) return true;
        current={...chars}
      }
      return false;
    }
}
