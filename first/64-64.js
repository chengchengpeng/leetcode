
// 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

// 说明：每次只能向下或者向右移动一步。

var minPathSum = function(grid) {
  let row = grid[0].length, column = grid.length
  for (let i = 0; i<column; i++) {
    for (let j = 0; j<row; j++) {
      if (i !== 0 || j !==0) {
        if (i === 0) {
          grid[i][j] = grid[i][j-1]+grid[i][j]
        } else if(j === 0){
          grid[i][j] = grid[i][j] + grid[i-1][j]
        } else {
          if (grid[i-1][j] < grid[i][j-1]) {
            grid[i][j] = grid[i][j] + grid[i-1][j]
          }else {
            grid[i][j] = grid[i][j-1]+grid[i][j]
          }
        }
      }
    }
  }
  return grid[column-1][row-1]
};

let grid = [
           [1,3,1]
          ,[1,5,1]
          ,[4,2,1]]

console.log(minPathSum(grid));
