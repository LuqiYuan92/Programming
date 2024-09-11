/**
 * @param {string} s
 * @return {number}
 *
 *
 */

var longestPalindrome = function (s) {
  //hashSet
  //if the character is not in the set, add it to the set
  //if the character is in the set, remove it from the set and increment the result by 2

  let mySet = new Set();
  let result = 0;

  for (let str of s) {
    if (mySet.has(str)) {
      result += 2;
      mySet.delete(str);
    } else {
      mySet.add(str);
    }
  }
  //if there is any character left in the set, add 1 to the result
  if (mySet.size > 0) {
    result += 1;
  }
  return result;
};

var longestPalindrome = function (s) {
  //hashmap increment by 2 if the value is even in each iteration
  let map = {};
  let result = 0;

  for (let str of s) {
    map[str] = (map[str] || 0) + 1;
    if (map[str] % 2 === 0) {
      result += 2;
    }
  }

  for (let key in map) {
    if (map[key] % 2 === 1) {
      result += 1;
      break;
    }
  }
  return result;
};

var longestPalindrome = function (s) {
  //hashmap
  //count the frequency of each character, if the frequency is even, add the frequency to the result
  //if the frequency is odd, add the frequency - 1 to the result
  //if there is any odd frequency character, add 1 to the result
  let map = {};
  let result = 0;

  for (let str of s) {
    map[str] = (map[str] || 0) + 1;
  }

  for (let key in map) {
    if (map[key] % 2 === 0) {
      result += map[key];
    } else {
      result += map[key] - 1;
    }
  }
  //if there is any odd frequency character, add 1 to the result
  for (let key in map) {
    if (map[key] % 2 === 1) {
      result += 1;
      break;
    }
  }
  return result;
};
