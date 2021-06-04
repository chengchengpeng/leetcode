/*
 * @Descripttion:
 * @version:
 * @Author: chengchengpeng
 * @Date: 2021-05-27 09:47:14
 * @LastEditors: chengchengpeng
 * @LastEditTime: 2021-05-27 13:45:44
 */
// n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

// 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。

// 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

var solveNQueens = function(n) {
  let board = [], result = []
  for (let i = 0; i<n; i++) {
    board.push(new Array(n).fill("."))
  }
  backFun(0)
  function backFun(k) {
    if (k === n) {
      result.push(getResult(board))
    }else{
      for (let i= 0; i<n; i++) {
        if (canSet(k, i)) {
          board[k][i] = "Q"
          backFun(k+1)
          board[k][i] = "."
        }
      }
    }
  }
  function canSet(i, j) {
    for (let k = 0; k<i; k++) {
      if(board[k][j] === "Q") {
        return false
      }
    }
    let arr = [[-1,1], [-1,-1]]
    for (let [a, b] of arr){
      let ii = i+a, jj = j+b
      while (board[ii] && board[ii][jj]) {
        if(board[ii][jj] === "Q"){
            return false
        }
        ii = ii+a
        jj = jj+b
      }
    }
    return true
  }
  function getResult(board) {
    let result = []
    for (let item of board){
      result.push(item.join(""))
    }
    return result
  }
  return result
};
console.log(solveNQueens(4));
