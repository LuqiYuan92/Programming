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
var middleNode = function (head) {
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

var middleNode = function (head) {
  let current = head;
  let count = 0;
  // First pass: count the total number of nodes
  while (current) {
    count++;
    current = current.next;
  }
  let middle = Math.floor(count / 2);

  // Second pass: traverse to the middle node
  current = head;
  for (let i = 0; i < middle; i++) {
    current = current.next;
  }
};
