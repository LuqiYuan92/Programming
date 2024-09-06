/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  //using set() cuz result should only contain unique value
  let seen = new Set(),
    result = new Set();

  //sliding window left and right=left+10;
  for (let left = 0; left + 10 <= s.length; left++) {
    let sub = s.slice(left, left + 10);
    // let sub = s.substring(left, left + 10);
    if (seen.has(sub)) {
      result.add(sub);
    } else {
      seen.add(sub);
    }
  }
  //   return Array.from(result);
  return [...result];
};
