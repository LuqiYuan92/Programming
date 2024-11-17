/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let goal = nums.length - 1;
  for (let index = nums.length - 1; index >= 0; index--) {
    //if the current index can reach the goal, update the goal to the current index
    if (index + nums[index] >= goal) {
      goal = index;
    }
  }
  //if the goal is 0, it means the first index can reach the last index
  if (goal === 0) {
    return true;
  } else return false;
};
