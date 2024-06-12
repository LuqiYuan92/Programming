// Given an integer array nums, find the subarray with the largest sum, and return its sum.
//53. Maximum Subarray
var maxSubArray = function (nums) {
  let curSum = 0,
    maxSum = 0;

  for (let i = 0; i < nums.length; i++) {
    curSum = nums[i];
    maxSum = math.max(curSum, maxSum);
    for (let j = i + 1; j < nums.length; j++) {
      curSum = nums[i] + nums[j];
      maxSum = math.max(curSum, maxSum);
      for (let z = j + 1; z < nums.length; z++) {
        curSum = nums[i] + nums[j] + nums[z];
        maxSum = math.max(curSum, maxSum);
      }
    }
  }

  return maxSum;
};

var maxSubArray1 = function (nums) {
  maxSum = nums[0];

  //nums[i - 1] is the accumulator
  for (let i = 1; i < nums.length; i++) {
    console.log("first", nums[i - 1], nums[i]);
    nums[i] = Math.max(0, nums[i - 1]) + nums[i];
    if (maxSum < nums[i]) {
      maxSum = nums[i];
    }
    console.log("second", nums[i]);
  }
  return maxSum;
};

var maxSubArray2 = function (nums) {
  let maxSum = nums[0];
  let curSum = 0;
  for (let i = 0; i < nums.length; i++) {
    console.log("first", curSum);
    curSum += nums[i];
    if (maxSum < curSum) {
      maxSum = curSum;
    }

    // if cursum is negative, cut it off, starting sum up from the next item
    if (curSum < 0) {
      curSum = 0;
    }
    console.log("curSum", curSum, "max", maxSum);
  }
  return maxSum;
};

let nums1 = [5, 4, -1, 7, 8];

let nums2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

let nums3 = [-5, -4, -1, -7, -8];

// maxSubArray2(nums1);
maxSubArray2(nums3);
