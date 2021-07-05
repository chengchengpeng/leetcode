// 给定一个整数数组 prices ，它的第 i 个元素 prices[i] 是一支给定的股票在第 i 天的价格。

// 设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。

// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。


var maxProfit = function(k, prices) {
  if (!prices.length) {
    return 0;
}
  let buys = [], sells = [], value = Math.min(k, Math.floor(prices.length/2))+1
  for (let i = 0 ; i<prices.length; i++) {
    buys.push(new Array(value).fill(0))
    sells.push(new Array(value).fill(0))
  }
  buys[0][0] = -prices[0];
  sells[0][0] = 0;
  for (let i = 1; i <= k; ++i) {
      buys[0][i] = sells[0][i] = -Number.MAX_VALUE;
  }
  for (let i = 1; i<prices.length; i++) {
    buys[i][0] = Math.max(sells[i-1][0]-prices[i], buys[i-1][0])
    for (let k = 1; k<value; k++) {
        buys[i][k] = Math.max(sells[i-1][k]-prices[i], buys[i-1][k])
        sells[i][k] =Math.max(buys[i-1][k-1] +prices[i], sells[i-1][k])
    }
  }
  console.log(buys);
  console.log(sells);
  return Math.max(...sells[prices.length-1])
};

var maxProfit2 = function(k, prices) {
  if (!prices.length) {
      return 0;
  }

  const n = prices.length;
  k = Math.min(k, Math.floor(n / 2));
  const buy = new Array(n).fill(0).map(() => new Array(k + 1).fill(0));
  const sell = new Array(n).fill(0).map(() => new Array(k + 1).fill(0));

  buy[0][0] = -prices[0];
  sell[0][0] =  0;
  for (let i = 1; i <= k; ++i) {
      buy[0][i] = sell[0][i] = -Number.MAX_VALUE;
  }

  for (let i = 1; i < n; ++i) {
      buy[i][0] = Math.max(buy[i - 1][0], sell[i - 1][0] - prices[i]);
      for (let j = 1; j <= k; ++j) {
          buy[i][j] = Math.max(buy[i - 1][j], sell[i - 1][j] - prices[i]);
          sell[i][j] = Math.max(sell[i - 1][j], buy[i - 1][j - 1] + prices[i]);
      }
  }
  return Math.max(...sell[n - 1]);
};

let k = 2, prices = [3,2,6,5,0,3]
console.log(maxProfit(k, prices));
