
// 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
let word = "ABCCED"

function exist(board, word){
  let directions = [[0,1], [0,-1], [1,0], [-1,0]]
  let h = board.length, w = board[0].length
  let visited = new Array(h)
  for (let i = 0; i<visited.length; i++){
    visited[i]  = new Array(w).fill(false)
  }
  function fun(i,j,k) {
    if(word.charAt(k) != board[i][j]){
      return false
    } else if(k == word.length-1) {
      return true
    }
    visited[i][j] = true
    let result = false
    for (const [dx,dy] of directions){
      let newi = i + dx, newj = j + dy;
      if (newi >= 0 && newi < h && newj >= 0 && newj < w) {
          if (!visited[newi][newj]) {
              const flag = fun(newi, newj, k + 1);
              if (flag) {
                  result = true;
                  break;
              }
          }
      }
  }
    visited[i][j] = false
    return result
  }
  for (let i = 0; i<h; i++) {
    for (let j = 0; j<w; j++) {
      const flag = fun(i,j,0)
      if(flag) {
        return true
      }
    }
  }
  return false
}
console.log(exist(board, word));
