/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (
  candidates,
  target,
  index = 0,
  sub = [],
  result = []
) {
  if (target <= 0) {
    if (target === 0) {
      result.push(sub.slice());
    }
    return;
  }

  if (index < candidates.length) {
    let value = candidates[index];
    sub.push(value);
    //include the current element and update the target value;
    combinationSum(candidates, target - value, index, sub, result);

    //choose not to include the current element
    sub.pop();
    combinationSum(candidates, target, index + 1, sub, result);
  }
  return result;
};
