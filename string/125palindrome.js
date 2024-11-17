/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  //replace all non-alphanumeric characters with empty string
  let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  return cleaned === cleaned.split("").reverse().join("");
};

var isPalindrome2 = function (s) {
  //replace all non-alphanumeric characters with empty string
  let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  right = cleaned.length - 1;
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
