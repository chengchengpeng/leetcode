// 请你判断一个 9x9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。

// 数字 1-9 在每一行只能出现一次。
// 数字 1-9 在每一列只能出现一次。
// 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
// 数独部分空格内已填入了数字，空白格用 '.' 表示。

var isValidSudoku = function(board) {
  let row  = [], column = [], minBoard = []
  for (let i = 0; i< 9; i++) {
    row.push(new Set())
    column.push(new Set())
    minBoard.push(new Set())
  }
  for (let i =0 ;i <9; i++) {
    for (let j = 0; j<9;j++) {
      let key = Math.ceil((3 * (j+1) + 27 * Math.floor(i/3)) /9)-1
      console.log(i,j,key);
      if (row[i].has(board[i][j]) || column[j].has(board[i][j]) ||minBoard[key].has(board[i][j])){
        return false
      }else {
        if (/\d/.test(board[i][j])) {
          row[i].add(board[i][j])
        column[j].add(board[i][j])
        minBoard[key].add(board[i][j])
        }
      }
    }
  }
  return true
};
let borad = [["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
console.log(isValidSudoku(borad));
