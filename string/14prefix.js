/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }
  let base = strs[0];

  //time complexity is O(n*m)
  //vertical comparison using the first string as the base
  //if the base string is the longest string (the next word out of bound) or the first uncommon strings are found, return the common prefix using slice()
  //if the base string is the shortest string, the common prefix is the base string
  for (let i = 0; i < base.length; i++) {
    for (let word of strs) {
      if (i > word.length - 1 || base[i] !== word[i]) {
        return base.slice(0, i);
      }
    }
  }
  return base;
};
