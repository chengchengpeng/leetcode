// 根据 百度百科 ，生命游戏，简称为生命，是英国数学家约翰·何顿·康威在 1970 年发明的细胞自动机。

// 给定一个包含 m × n 个格子的面板，每一个格子都可以看成是一个细胞。每个细胞都具有一个初始状态：1 即为活细胞（live），或 0 即为死细胞（dead）。每个细胞与其八个相邻位置（水平，垂直，对角线）的细胞都遵循以下四条生存定律：

// 如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
// 如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
// 如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
// 如果死细胞周围正好有三个活细胞，则该位置死细胞复活；
// 下一个状态是通过将上述规则同时应用于当前状态下的每个细胞所形成的，其中细胞的出生和死亡是同时发生的。给你 m x n 网格面板 board 的当前状态，返回下一个状态。

var gameOfLife = function(board) {
  let newBoard = JSON.parse(JSON.stringify(board))
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j<board[0].length;j++) {
      board[i][j] = getStatus(i, j, newBoard[i][j])
    }
  }
  function getStatus(i,j,status) {
    let arr = [[-1,-1], [0, -1], [0,1], [1, 0],[-1, 0], [-1,1],[1, -1], [1,1]], count = 0
    for (let [n, m] of arr){
      if (n+i>=0 && n+i<board.length && m+j>=0 && m+j<board[0].length && newBoard[n+i][m+j]===1){
        count++
      }
    }
    if (status === 1){
      if (count<2 || count>3) status = 0
    }else {
      if (count ===3) {
        status = 1
      }
    }
    return status
  }
  return board
};
