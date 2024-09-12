/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsets2 = function (nums) {
  let result = [],
    sub = [];
  function backtrack2(start) {
    //base case ,DFS recursion exit condition, hit the leaf node of decision tree
    if (start === nums.length) {
      result.push([...sub]);
      return;
    }
    //choose not include the current element
    backtrack2(start + 1);

    //choose to include the current element
    sub.push(nums[start]);
    backtrack2(start + 1);
    sub.pop();
  }
  backtrack2(0);
  return result;
};

var subsets = function (nums) {
  let result = [],
    sub = [];
  function backtrack(start) {
    result.push([...sub]);
    for (let i = start; i < nums.length; i++) {
      sub.push(nums[i]);
      backtrack(i + 1);
      sub.pop();
    }
  }
  backtrack(0);
  return result;
};
