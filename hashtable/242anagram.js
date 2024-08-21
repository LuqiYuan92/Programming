/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let fre_s = {};

  for (let char of s) {
    if (char in fre_s) {
      fre_s[char] += 1;
    } else {
      fre_s[char] = 1;
    }
  }

  for (let char of t) {
    if (char in fre_s) {
      fre_s[char] -= 1;
    } else {
      fre_s[char] = 1;
    }
  }

  for (let char in fre_s) {
    if (fre_s[char] !== 0) {
      return false;
    }
  }
  return true;
};

var isAnagram2 = function (s, t) {
  let fre = {};

  for (let char of s) {
    fre[char] = fre[char] + 1 || 1;
  }

  for (let char of t) {
    if (fre[char] === undefined) return false;
    fre[char] -= 1;
  }

  for (let char in fre) {
    if (fre[char] !== 0) {
      return false;
    }
  }
  return true;
};
