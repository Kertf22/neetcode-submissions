class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let sn= s
        .replace(/[^a-zA-Z0-9]/g,"")
        .toLowerCase();
        
        let left=0;
        let right= sn.length-1;
        
        while(right>left) {
            if (sn[left]!=sn[right]) return false;
            left++;
            right--;
        }

        return true;
    }
}
