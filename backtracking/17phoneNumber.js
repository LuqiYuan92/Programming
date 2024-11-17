/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits == "") return [];
  let result = [];
  let sub = [];

  let phone = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  //The backtrack function now takes an index parameter to keep track of the current position in the digits string.
  //called with index + 1 to move to the next digit.
  function backtrack(index) {
    if (index === digits.length) {
      result.push(sub.join(""));
      return;
    }
    let number = digits[index];
    for (let letter of phone[number]) {
      sub.push(letter);
      backtrack(index + 1);
      sub.pop();
    }
  }

  backtrack(0);
  return result;
};
