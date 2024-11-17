/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let result = [],
    sub = [];

  function backtrack(x) {
    if (sub.length === k) {
      result.push([...sub]);
      return;
    }
    //the next number to be included in the sub array should be greater than the current number cuz no duplicate
    //outer loop is the decision tree, inner loop is the DFS recursion
    while (x <= n) {
      sub.push(x);
      backtrack(x + 1);
      sub.pop();
      x++;
    }
  }

  backtrack(1);
  return result;
};
