//217. Contains Duplicate

//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate1 = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) return true;
    }
  }
  return false;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate2 = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) return true;
    map.set(nums[i], i);
  }
  return false;
};

let nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

let nums2 = [1, 2];
console.log(containsDuplicate2(nums));

console.log(containsDuplicate2(nums2));
