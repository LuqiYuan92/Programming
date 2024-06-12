/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//283. Move Zeroes

var moveZeroes0 = function (nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      arr.push(nums[i]);
    }
  }

  return arr;
};

a = [1, 2, 3, 0, 1, 0, 0, 2];
// console.log(moveZeroes(a));

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      let int = nums[left];
      nums[left] = nums[right];
      nums[right] = int;
      left++;
    }
  }

  console.log(nums);
};

var moveZeroes2 = function (nums) {
  left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
  }
  console.log(nums);
};
moveZeroes(a);
moveZeroes2(a);
