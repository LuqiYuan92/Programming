/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let dp = new Array(s.length + 1).fill(false);
  dp[0] = true;

  //i is the starting index of the substring
  //j is the ending index of the substring plus 1 cuz slice does not include the ending index(exclusive)
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      if (dp[i] === false) continue;
      if (wordDict.includes(s.slice(i, j))) {
        dp[j] = true;
        //substring up to j-1 can be segmented into valid words.
        //j=True is the starting index of the substring
      }
    }
  }
  //check if the whole string can be broken down into dictionary words.
  return dp[dp.length - 1];
};
