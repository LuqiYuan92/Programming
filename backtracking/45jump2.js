/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let left = 0;
  right = 0;
  let count = 0;

  //left and right is the range of the current jump
  //if right is the last index, no need to jump
  while (right < nums.length - 1) {
    let farthest = 0;
    for (let i = left; i < right + 1; i++) {
      farthest = Math.max(farthest, i + nums[i]);
    }
    left = right + 1;
    right = farthest;
    count++;
  }

  return count;
};

//O(n) time
//o(1) space
