/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let current = head;
    
    while (current !== null && current.next !== null) {
        if (current.val === current.next.val) {
            current.next = current.next.next; // Skip the next node
        } else {
            current = current.next; // Move to the next node
        }
    }
    
    return head;
};