// 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

// 你可以认为每种硬币的数量是无限的。


var coinChange = function (coins, amount) {
  if (amount === 0) return 0
  let mat = new Array(amount + 1).fill(0)
  for (let j = 0; j < coins.length; j++) {
    mat[coins[j]] = 1
    for (let i = coins[j] + 1; i <= amount; i++) {
      if (mat[i - coins[j]] > 0) {
        // console.log(111);
        if (mat[i] === 0) {
          mat[i] = mat[i - coins[j]] + 1
        } else {
          mat[i] = Math.min(mat[i - coins[j]] + 1, mat[i])
        }
      }
    }
  }
  return mat[amount] !== 0 ? mat[amount] : -1
};
coins = [186, 419, 83, 408]
amount = 6249
console.log(coinChange(coins, amount));

// int coinChange(vector<int>& coins, int amount) {
//   if (coins.empty()) return -1;
//   vector<int> dp(amount + 1, amount + 2);
//   dp[0] = 0;
//   for (int i = 1; i <= amount; ++i) {
//      for (const int & coin : coins) {
//          if (i >= coin) {
//             dp[i] = min(dp[i], dp[i-coin] + 1);
// }
// }
// }
//     return dp[amount] == amount + 2? -1: dp[amount];
// }
