/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  // the maximum number of coins that can be used to make the amount is amount
  dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;

  //only need one coin to make the amount that equals to the coin
  for (let c of coins) {
    dp[c] = 1;
  }
  //if the amount is less than the coin, then the amount cannot be made
  //reduce the amount to subproblem of the amount minus the coin
  for (let a = 1; a <= amount; a++) {
    for (let c of coins) {
      if (a - c >= 0) {
        dp[a] = Math.min(dp[a], dp[a - c] + dp[c]);
      }
    }
  }
  //if the amount cannot be made, return -1
  return dp[amount] > amount ? -1 : dp[amount];
};
