/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let leftResult = biSearch(nums, target, true);
  let rightResult = biSearch(nums, target, false);

  return [leftResult, rightResult];

  //binary search
  function biSearch(nums, target, leftSearch) {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;

    while (left <= right) {
      let mid = Math.floor((right + left) / 2);
      if (nums[mid] < target) {
        left = mid + 1;
      } else if (nums[mid] > target) {
        right = mid - 1;
      } else {
        result = mid;
        //if leftSearch is true, search the left side of the mid point
        //if leftSearch is false, search the right side of the mid point
        if (leftSearch) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
    }
    return result;
  }
};
