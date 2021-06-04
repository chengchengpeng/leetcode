/*
 * @Descripttion:
 * @version:
 * @Author: chengchengpeng
 * @Date: 2021-05-13 17:14:41
 * @LastEditors: chengchengpeng
 * @LastEditTime: 2021-05-13 17:28:48
 */
// 给定一个数组 prices ，其中 prices[i] 是一支给定股票第 i 天的价格。

// 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。

// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。s

let prices = [7,1,5,3,6,4]
let hasBuy = false, get = 0, sum = 0
for (let i = 0; i<prices.length; i++) {
  if (prices[i+1] > prices[i] && !hasBuy) {
    get = prices[i]
    hasBuy = true
  }
  if(prices[i+1] < prices[i] && hasBuy){
    hasBuy = false
    sum = sum + prices[i] - get
  }
  if(i=== prices.length-1 && hasBuy){
    sum = sum + prices[i] - get
  }
}
console.log(sum);
