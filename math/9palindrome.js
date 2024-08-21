/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  //check edge case
  // 1:convert the number to string and reverse it and compare with the original number
  //2: compare the half the number with the reverse of the other half
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let reverseHalf = 0;
  while (reverseHalf < x) {
    reverseHalf = reverseHalf * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return reverseHalf === x || Math.floor(reverseHalf / 10) === x;
};
