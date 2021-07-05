// 给定一个整数数组 prices，其中第 i 个元素代表了第 i 天的股票价格 ；非负整数 fee 代表了交易股票的手续费用。

// 你可以无限次地完成交易，但是你每笔交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。

// 返回获得利润的最大值。

// 注意：这里的一笔交易指买入持有并卖出股票的整个过程，每笔交易你只需要为支付一次手续费。
var maxProfit = function(prices, fee) {
  let mat1 = new Array(prices.length),//有
  mat2 = new Array(prices.length) //无

  mat1[0] = -prices[0]
  mat2[0] = 0
  for (let i = 1; i<prices.length; i++) {
    mat1[i] = Math.max(mat2[i-1]-prices[i], mat1[i-1])
    mat2[i] = Math.max(mat2[i-1], mat1[i-1] + prices[i] - fee)
  }

  return mat2[prices.length-1]
};
