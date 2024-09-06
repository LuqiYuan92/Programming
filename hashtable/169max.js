/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function (nums) {
  let count = 0;
  result = 0;
  for (let item of nums) {
    //if the count is 0, then the previous element has been offset by the current element
    //reset the result to the current element, the count would be 1 after the ternary operator
    if (count === 0) result = item;
    //ternary operator allows for the count to be increased if the current element is the result
    //decrease the count if the current element is not the result---majority element
    item === result ? count++ : count--;
  }
  return result;
};

var majorityElement1 = function (nums) {
  let hash = {};
  let maxCount = 0;
  let result;
  for (let item of nums) {
    hash[item] = hash[item] ? hash[item] + 1 : 1;
    if (hash[item] > maxCount) {
      result = item;
      maxCount = hash[item];
    }
  }
  return result;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement2 = function (nums) {
  let hash = {};
  let result;
  for (let item of nums) {
    hash[item] = hash[item] ? hash[item] + 1 : 1;
    if (hash[item] > nums.length / 2) {
      result = item;
    }
  }
  return result;
};
