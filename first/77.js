/*
 * @Descripttion:
 * @version:
 * @Author: chengchengpeng
 * @Date: 2021-05-26 18:45:39
 * @LastEditors: chengchengpeng
 * @LastEditTime: 2021-05-26 20:12:34
 */

// 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

var combtine = function(n, k) {
  let result = [], resitem = new Array(k)
  backtracking(0)
  return result
  function backtracking(first) {
    if (count === k) {
      result.push(JSON.parse(JSON.stringify(resitem)))
    }else{
      for (let i = first; i<= n; i++)  {
        resitem[count++] = i
        backtracking(first+1)
        count--
      }
    }
  }
}
