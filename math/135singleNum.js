/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let result = 0;

  // XOR operator performs a bitwise exclusive OR operation
  for (let n of nums) {
    result = result ^ n;
  }
  return result;
};
