/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  //if the current sum is >= target, no need to update the right point, only slide the left point

  let left = 0;
  sum = 0;
  minLen = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    //decrease the sum by subtracting the left point value before moving the left point
    //total sum in the next interation could be zero and exit the while loop if left and right point to the same index in the cureent loop, so left<=right  is guranteed
    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }
  return minLen === Infinity ? 0 : minLen;
};
