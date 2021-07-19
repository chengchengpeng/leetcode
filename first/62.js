// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

// 问总共有多少条不同的路径？

var uniquePaths = function(m, n) {
  let mat = []
  for (let i = 0; i<m; i++) {
    mat.push(new Array(n).fill(1))
  }
  for (let i = 0; i<m; i++) {
    for (let j = 0; j<n; j++) {
      let sum = 0
      if (j-1>=0) {
        sum = mat[i][j-1]
      }
      if (i-1>=0) {
        sum = sum + mat[i-1][j]
      }
      mat[i][j] = sum
    }
  }
  return mat[n-1][m-1]
};
