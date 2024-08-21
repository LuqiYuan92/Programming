/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let slow = head;
  fast = head;
  //remove the fast pointer n nodes adhead of slow pointer
  for (i = 0; i < n; i++) {
    fast = fast.next;
  }

  //edge case:if the fast pointer is null, remove the head node
  if (fast === null) {
    return head.next;
  }
  //remove fast pinter to the last node of the list
  // slow pointer would be perpectly positioned before the node to be removed
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  //remove the node
  slow.next = slow.next.next;
};
