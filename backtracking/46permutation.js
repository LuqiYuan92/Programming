/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums, sub = [], result = []) {
  if (nums.length === 0) {
    result.push([...sub]);
    return;
  }

  //index is the current element to be included in the sub array
  //index=0,1,2 ->[1,2,3]; index=0,1->[2,3]; when index iterate through(0,1,0)->result[1,3,2]
  for (let i = 0; i < nums.length; i++) {
    sub.push(nums[i]);
    let newNum = nums.filter((num, index) => index !== i);
    permute(newNum, sub, result);
    sub.pop();
  }
  return result;
};
