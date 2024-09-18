/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let seen = {};
  let left = 0,
    length = 0;
  let char, right;

  for (right = 0; right < s.length; right++) {
    char = s[right];
    if (char in seen && seen[char] >= left) {
      //seen[char] >= left is to check if the char is within sliding window of the current substring
      //seen[char] < right is default cuz the loop iteration is in an increasing order
      left = seen[char] + 1;
    } else {
      length = Math.max(right - left + 1, length);
    }
    seen[char] = right;
    console.log(s.slice(left, right + 1));
  }
  return length;
};

s = "tmmzuxt";
