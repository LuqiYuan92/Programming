/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let same = nums[0] === nums[nums.length - 1];
  let increase = nums[0] < nums[nums.length - 1];
  let decrease = nums[0] > nums[nums.length - 1];

  if (same) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== nums[0]) {
        return false;
      }
    }
    return true;
  }
  if (increase) {
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        return false;
      }
    }
    return true;
  }
  if (decrease) {
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] < nums[i + 1]) {
        return false;
      }
    }
    return true;
  }
};
