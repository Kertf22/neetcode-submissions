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
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        if (!head || !head.next) return head;;
        let current = head.next;
        let last = head;
        while(current.next) {
            const auxi =current.next;
            current.next = last; 
            last = current;
            current = auxi;
        }

        current.next = last;
        head.next = null;

        return current;
    } 
}
