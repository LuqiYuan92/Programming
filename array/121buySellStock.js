var maxProfit = function (prices) {
  let buy = prices[0];
  let maxProfit = 0;
  for (const sell of prices.slice(1)) {
    if (buy < sell) {
      maxProfit = Math.max(sell - buy, maxProfit);
    } else {
      //if buy high ,but sell low; update the buy to the low point
      buy = sell;
    }
    console.log(maxProfit);
  }
  return maxProfit;
};

let prices = [7, 1, 5, 3, 6, 4];

maxProfit(prices);
