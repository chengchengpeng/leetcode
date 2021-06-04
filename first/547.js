/*
 * @Descripttion:
 * @version:
 * @Author: chengchengpeng
 * @Date: 2021-05-25 15:59:44
 * @LastEditors: chengchengpeng
 * @LastEditTime: 2021-05-25 17:36:29
 */
// 有 n 个城市，其中一些彼此相连，另一些没有相连。如果城市 a 与城市 b 直接相连，且城市 b 与城市 c 直接相连，那么城市 a 与城市 c 间接相连。

// 省份 是一组直接或间接相连的城市，组内不含其他没有相连的城市。

// 给你一个 n x n 的矩阵 isConnected ，其中 isConnected[i][j] = 1 表示第 i 个城市和第 j 个城市直接相连，而 isConnected[i][j] = 0 表示二者不直接相连。

// 返回矩阵中 省份 的数量。

// var findCircleNum = function(isConnected) {
//   let n = isConnected.length, isVisited = new Set(), result = 0
//   for (let i = 0; i < n; i++) {
//     if (!isVisited.has(i)) {
//       dfs(isConnected, i)
//       result++
//     }
//   }
//   function dfs(isConnected, i) {
//     for (let j= 0; j< n; j++){
//       if (isConnected[i][j] === 1 && !isVisited.has(j)){
//         isVisited.add(j)
//         dfs(isConnected, j)
//       }
//     }
//   }
//   return result
// };

var findCircleNum = function(isConnected) {
  let n = isConnected.length, isVisited = new Set(), result = 0, queue = [], j
  for (let i = 0; i < n; i++) {
    if (!isVisited.has(i)) {
      queue.push(i)
      while (queue.length) {
        j = queue.shift()
        for (let k = 0; k< n; k++) {
          if (isConnected[j][k] === 1 && !isVisited.has(k)){
            isVisited.add(k)
            queue.push(k)
          }
        }
      }
      result++
    }
  }
  return result
}
