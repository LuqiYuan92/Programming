/**
 * @param {number[]} nums
 * @return {number}
 */

var missingNumber = function (nums) {
  //using XOR operator
  //n^n=0; 0^n=n

  let xor = 0;

  for (let i = 0; i <= nums.length; i++) {
    xor ^= i;
  }

  for (let n of nums) {
    xor ^= n;
  }

  return xor;
};

var missingNumber = function (nums) {
  //sum of n numbers = n*(n+1)/2

  let sum = 0;

  for (let n of nums) {
    sum += n;
  }

  let len = nums.length;
  let totalSum = (len * (len + 1)) / 2;

  return totalSum - sum;
};
