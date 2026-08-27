/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
       if (!list1 && !list2) return null;
        if (list1 && !list2) return list1;
        if (!list1 && list2) return list2;
        let pos1 = list1;
        let pos2 = list2;
        let res:any = {};
        let current = res;
        while(pos1 || pos2) {
            let minPos = null;
            if(!pos1 && pos2) minPos=1
            else if(pos1 && !pos2) minPos=0
            else if(pos1 && pos2 && pos1.val > pos2.val) minPos=1
            else minPos=0;
            if(current.val == undefined) current.val = minPos ? pos2.val : pos1.val;
            else {
            current.next = {
                val: minPos ? pos2.val : pos1.val,
                next: null,
            }
            current = current.next;
            } 
            if(minPos) pos2=pos2.next;
            else pos1=pos1.next;
        }
        return res;
    }
}
