/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

//21. Merge Two Sorted Lists

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (list1, list2) {
  let head = new ListNode();
  let current = head;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  // Attach the remaining nodes, if any
  if (list1 != null) {
    current.next = list1;
  } else {
    current.next = list2;
  }
  return head.next;
  //Return the merged list, starting from the next node of the dummy head
};

// let b = 10;
// let a = b;
// b = 5;
// console.log(a, "b", b);

let array1 = [1, 2, 5, 7, 20];
let array2 = [1, 3, 100];

function arrayToLinked(array) {
  let head = new ListNode();
  let current = head;
  for (let item of array) {
    current.next = new ListNode(item);
    current = current.next;
  }
  return head.next;
}

function listToArray(list) {
  let array = [];
  let current = list;
  while (current !== null) {
    array.push(current.val);
    current = current.next;
  }
  return array;
}

function listToArray2(list) {
  let array = [];

  while (list !== null) {
    array.push(list.val);
    list = list.next;
  }
  return array;
}

let list1 = arrayToLinked(array1);
let list2 = arrayToLinked(array2);
let resultList = mergeTwoLists(list1, list2);
let resultArray = listToArray2(resultList);
console.log(resultArray);
