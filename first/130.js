/*
 * @Descripttion:
 * @version:
 * @Author: chengchengpeng
 * @Date: 2021-05-31 13:58:28
 * @LastEditors: chengchengpeng
 * @LastEditTime: 2021-05-31 14:57:25
 */
// 给你一个 m x n 的矩阵 board ，由若干字符 'X' 和 'O' ，找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。

var solve = function(board) {
  let Xlength = board[0].length, Ylength = board.length, initArr = [],
   helpArr = [[0, 1],[0,-1], [1,0], [-1, 0]], visited = []
  for (let i = 1; i< Xlength-1; i++) {
    if (board[0][i] === 'O') {
      initArr.push([0, i])
    }
    if (board[Ylength-1][i] === 'O') {
      initArr.push([Ylength-1, i])
    }
  }
  for (let i = 0; i< Ylength; i++) {
      if (board[i][0] === 'O') {
        initArr.push([i, 0])
      }
      if (board[i][Xlength-1] === 'O') {
        initArr.push([i, Xlength-1])
      }
      visited.push(new Array(Xlength).fill(false))
  }
  for (let [x, y] of initArr) {
    if (!visited[x][y]) {
      visited [x][y] = true
      dfs(x, y)
    }
  }
  for (let i = 0; i<Ylength; i++) {
    for (let j = 0; j<Xlength;j++) {
      if (board[i][j] === 'O' && !visited[i][j]) {
        board[i][j] = 'X'
      }
    }
  }
  function dfs(x, y) {
    for (let [a,b] of helpArr){
      let n = x+a, m = b+y
      if (board[n] && board[n][m] && !visited[n][m] && board[n][m] === 'O') {
        visited [n][m] = true
        dfs(n, m)
      }
    }
  }
};
board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]

console.log(solve(board));
