/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  //use the first element as the anchor;
  for (let i = 0; i < nums.length - 2; i++) {
    //if the first element is greater than 0, then there is no way to sum up to 0 in the sorted array
    if (nums[i] > 0) {
      break;
    }
    //skip the duplicates
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    //the second and third elements will be the left and right pointers
    let left = i + 1;
    right = nums.length - 1;
    //check the sum of the three elements

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      //sorted array;if the sum is less than 0, move the left pointer one step to the right
      if (sum < 0) {
        left += 1;
      } else if (sum > 0) {
        right -= 1;
      } else {
        triplet = [nums[i], nums[left], nums[right]];
        result.push(triplet);
        //check the duplicates
        while (l < r && nums[left + 1] === triplet[1]) {
          left += 1;
        }
        //cuz left is already incremented, we need to check if the right pointer is not the same as the previous one in order to sum up to 0
        while (l < r && nums[right] === triplet[2]) {
          right -= 1;
        }
      }
    }
  }
  return result;
};
