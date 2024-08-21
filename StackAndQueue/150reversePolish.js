/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  //calculate the result of the expression using nearest previous two numbers using stack
  let stack = [];
  for (let t of tokens) {
    if (t == "+") {
      stack.push(stack.pop() + stack.pop());
    } else if (t == "-") {
      let a = stack.pop();
      let b = stack.pop();
      stack.push(b - a);
    } else if (t == "*") {
      stack.push(stack.pop() * stack.pop());
    } else if (t == "/") {
      a = stack.pop();
      b = stack.pop();
      stack.push(Math.trunc(b / a));
    } else {
      stack.push(parseInt(t));
    }
  }
  return stack[0];
};
