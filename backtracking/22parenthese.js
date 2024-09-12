/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let result = [],
    sub = [];

  function backtrack(open, close) {
    //base case the length of sub array is 2*n
    if (sub.length === 2 * n) {
      result.push(sub.join(""));
      return;
    }
    //choose to include open parenthes if open parenthesis is less than n
    if (open < n) {
      sub.push("(");
      backtrack(open + 1, close);
      sub.pop();
    }
    //the parenthesis is always open first, so the close parenthesis should be less than open parenthesis
    if (open > close) {
      sub.push(")");
      backtrack(open, close + 1);
      sub.pop();
    }
  }

  backtrack(0, 0);
  return result;
};
