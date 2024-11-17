/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//1. Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
  return console.log("not found");
};

//minuend-subtrahend=difference

var twoSum2 = (nums, target) => {
  let map = new Map();
  for (var i = 0; i < nums.length; i++) {
    let difference = target - nums[i];
    console.log("sum2", map, difference);
    if (map.has(difference)) {
      return [i, map.get(difference)];
    }
    map.set(nums[i], i);
  }
};

let nums1 = [2, 7, 11, 15];
let target1 = 9;

let nums2 = [3, 2, 4];
let target2 = 6;

// console.log(twoSum2(nums1, target1));
// console.log(twoSum2(nums2, target2));

var twoSum3 = (nums, target) => {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    complement = target - nums[i];
    console.log("sum3", map, complement);
    if (map.has(nums[i])) {
      return [i, map.get(nums[i])];
    }
    map.set(complement, i);
  }
};

// console.log(twoSum3(nums2, target2));

function twoSum4(nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = i;
  }
  console.log("hash", hash);
  for (let i = 0; i < nums.length; i++) {
    dif = target - nums[i];
    if (hash[dif] && hash[dif] !== i) {
      return [i, hash[dif]];
    }
  }
}

console.log(twoSum3(nums1, target1));
console.log(twoSum2(nums1, target1));
// console.log(twoSum4(nums2, target2));
console.log(twoSum4(nums1, target1));
