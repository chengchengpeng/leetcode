/*
 * @Descripttion:
 * @version:
 * @Author: chengchengpeng
 * @Date: 2021-06-05 09:59:30
 * @LastEditors: chengchengpeng
 * @LastEditTime: 2021-06-05 10:14:49
 */
// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 注意：给定 n 是一个正整数。
var climbStairs = function(n) {
  let arr = [0,1,2],
  if (n<=2) {
    return arr[n]
  }
    for (let i = 3; i<=n; i++) {
      arr[3] = arr[1] + arr[2]
      arr[1] = arr[2]
      arr[2] = arr[3]
    }
    return arr[n]
};

console.log(climbStairs(3));
