// 给定一个整数数组，其中第 i 个元素代表了第 i 天的股票价格 。​

// 设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:

// 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
// 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
var maxProfit = function(prices) {
  let mat1 = new Array(prices.length) //有股票
  let mat2 = new Array(prices.length) //没有股票， 非冷冻期
  let mat3 = new Array(prices.length) //没有股票， 冷冻期
  mat1[0] = -prices[0]
  mat2[0] = 0
  mat3[0] = 0

  for (let i = 1; i <prices.length; i++) {
    mat1[i] = Math.max(mat1[i-1], mat2[i-1]-prices[i])
    mat2[i] = Math.max(mat3[i-1], mat2[i-1])
    mat3[i] = mat1[i-1]+prices[i]
  }
  return Math.max(mat3[prices.length-1], mat2[prices.length-1])
};
let prices = [1,2,3,0,2]
console.log(maxProfit(prices));
