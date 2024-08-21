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
var reverseList = function (head) {
  let newList = null;
  let current = head;
  let nextNode;
  while (current) {
    nextNode = current.next;
    current.next = newList;
    newList = current;
    current = nextNode;
  }
  return newList;
};
