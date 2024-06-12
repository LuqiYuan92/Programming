/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//189. Rotate Array
//Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]

const reverseNums = (nums, start, end) => {
  while (start < end) {
    [nums[end], nums[start]] = [nums[start], nums[end]];
    start++;
    end--;
  }
};

var rotate = function (nums, k) {
  k = k % nums.length;

  nums.reverse();

  reverseNums(nums, 0, k - 1);
  reverseNums(nums, k, nums.length - 1);

  console.log(nums);
};

let nums1 = [1, 2, 3, 4, 5, 6, 7],
  k1 = 3;
let nums2 = [-1, -100, 3, 99],
  k2 = 2;

rotate(nums1, k1);

rotate(nums2, k2);
