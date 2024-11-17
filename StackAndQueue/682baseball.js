/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  let stack = [];
  for (let item of operations) {
    if (item == "+") {
      stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
    } else if (item == "D") {
      stack.push(stack[stack.length - 1] * 2);
    } else if (item == "C") {
      stack.pop();
    } else {
      stack.push(parseInt(item));
    }
  }
  return stack.reduce((a, b) => a + b, 0);
};
