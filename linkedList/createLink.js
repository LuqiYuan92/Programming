class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
    return this;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;

    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  insert(index, value) {
    if (index >= this.length) {
      console.log("insert at the end");
      this.append(value);
      return this;
    }

    if (index === 0) {
      console.log("insert at the front");
      this.prepend(value);
      return this;
    } else if ((index < this.length) & (index > 0)) {
      const newNode = new Node(value);
      let leader = this.traverseToIndex(index - 1);
      let follower = leader.next;
      newNode.next = follower;
      leader.next = newNode;
      this.length++;
    }
    return this.printList();
  }

  traverseToIndex(index) {
    //check parameters;
    let count = 0;
    let currentNode = this.head;
    while (index !== count) {
      count++;
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  remove(index) {
    //check parameters;
    const leader = this.traverseToIndex(index - 1);
    let unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }

  reverse() {
    //only one node
    if (this.head.next === null) {
      return this.head;
    }
    let first = this.head;
    let second = first.next;

    this.tail = this.head;
    this.tail.next = null;

    //second pointer moved toward next element
    while (second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    //first pointed to the last element in original linked list
    this.head = first;
    return this.printList();
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(20);
myLinkedList.prepend(5);
myLinkedList.insert(1, 88);
myLinkedList.insert(10, 100);
myLinkedList.insert(0, 1);
myLinkedList.remove(2);
console.log("original", myLinkedList.printList());
console.log("reverse", myLinkedList.reverse());
console.log(myLinkedList);
