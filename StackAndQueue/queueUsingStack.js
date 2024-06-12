// 232. Implement Queue using Stacks
class MyQueue {
  constructor() {
    this.deStack = [];
    this.enStack = [];
  }

  push(value) {
    this.enStack.push(value);

    return this;
  }

  //pop0wrong version
  //this.enStack.length changed after this.enStack.pop()
  pop0() {
    if (this.deStack.length === 0) {
      for (let i = 0; i < this.enStack.length; i++) {
        console.log("i", i, "this.enStack.length", this.enStack.length);
        this.deStack.push(this.enStack.pop());
      }
    }

    return this.deStack.pop();
  }

  //correct version
  pop() {
    if (this.deStack.length === 0) {
      while (this.enStack.length) {
        console.log("this.enStack.length", this.enStack.length);
        this.deStack.push(this.enStack.pop());
      }
    }
    return this.deStack.pop();
  }

  peek() {
    if (this.deStack.length === 0) {
      while (this.enStack.length) {
        this.deStack.push(this.enStack.pop());
      }
    }

    return this.deStack[this.deStack.length - 1];
  }

  empty() {
    return !this.deStack.length && !this.enStack.length;
  }
}

let myQueue = new MyQueue();

console.log(myQueue.push(1)); // queue is: [1]
console.log(myQueue.push(2)); // queue is: [1, 2] (leftmost is front of the queue)
console.log(myQueue.push(1));
console.log(myQueue.push(1));
console.log(myQueue.push(1));

console.log(myQueue.pop());
console.log(myQueue);
console.log(myQueue.peek()); // return 1
console.log(myQueue.pop()); // return 1, queue is [2]
console.log(myQueue.pop());
console.log(myQueue.pop());
console.log(myQueue);
console.log(myQueue);
console.log(myQueue.empty()); // return false
