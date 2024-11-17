/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  let stack = [];
  //stack store potential n[k] which is the largest index with middle element;
  //interate from the end of the array to find the smallest element

  let middle = -Infinity;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < middle) {
      return true;
    }
    //pop the n[k] element(with larger index)smaller than the current element
    while (stack.length > 0 && stack[stack.length - 1] < nums[i]) {
      middle = stack.pop();
    }
    stack.push(nums[i]);
  }

  return false;
};
