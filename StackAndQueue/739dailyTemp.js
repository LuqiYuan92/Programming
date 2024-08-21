/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  //stack = paris of index and temperature [temp,index]
  //stack is in monotonic decreasing order to store the low temp until we find the next greater temperature to calculate the difference
  let stack = [];
  let result = new Array(temperatures.length).fill(0);
  for (let [index, value] of temperatures.entries()) {
    while (stack.length > 0 && value > stack[stack.length - 1][0]) {
      let [popTemp, popIndex] = stack.pop();
      result[popIndex] = index - popIndex;
    }

    stack.push([value, index]);
  }
  return result;
};
