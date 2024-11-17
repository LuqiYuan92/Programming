/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  //array solution

  let arr = [];

  let node = head;

  while (node) {
    arr.push(node.val);
    node = node.next;
  }

  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    if (arr[left] != arr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

//two point solution
var isPalindrome = function (head) {
  //turtle and hare to find the middle of the linked list
  //reverse the second half of the linked list
  //compare the first half with the second half
  let slow = head;
  fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  //slow is the middle of the linked list
  let right = reverseList(slow);
  let left = head;

  //right is the head of the reversed linked list
  //if even node, right will reach  null first(refer to turtle and hare to find the middle of the linked list)
  while (right) {
    if (left.val !== right.val) {
      return false;
    }
    left = left.next;
    right = right.next;
  }
  return true;

  function reverseList(current) {
    let prev = null;
    while (current) {
      let tmp = current.next;
      current.next = prev;
      prev = current;
      current = tmp;
    }
    return prev;
  }
};
