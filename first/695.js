/*
 * @Descripttion:
 * @version:
 * @Author: chengchengpeng
 * @Date: 2021-05-25 13:22:42
 * @LastEditors: chengchengpeng
 * @LastEditTime: 2021-05-25 16:11:38
 */
// 给定一个包含了一些 0 和 1 的非空二维数组 grid 。

// 一个 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在水平或者竖直方向上相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。

// 找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为 0 。)

var maxAreaOfIsland = function(grid) {
  let i = 0,j = 0, gridTem = [], result = 0, row = grid[0].length-1,
   column =grid.length-1
  for (let k = 0; k<grid.length; k++) {
    gridTem.push(new Array(grid[0].length).fill(false))
  }
  while (i<=column && j<=row) {
    if (grid[i][j] === 1 && !gridTem[i][j]) {
      temResult = result
      result = 0
      getResult(i, j)
      if (result < temResult) result = temResult
    }
    if (j===row){
      j = 0
      i++
    }else{
      j++
    }
  }
  function getResult(i,j){
    let arr = [[i+1, j], [i-1, j],[i, j+1],[i, j-1]]
    result++
    gridTem[i][j] = true
    for (let item of arr) {
      if ( grid[item[0]] && grid[item[0]][item[1]] && !gridTem[item[0]][item[1]])
      getResult(item[0], item[1])
    }
  }
  return result
};
let a = [
        [0,0,1,0,0,0,0,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,1,1,0,0,0],
        [0,1,1,0,1,0,0,0,0,0,0,0,0],
        [0,1,0,0,1,1,0,0,1,0,1,0,0],
        [0,1,0,0,1,1,0,0,1,1,1,0,0],
        [0,0,0,0,0,0,0,0,0,0,1,0,0],
        [0,0,0,0,0,0,0,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,1,1,0,0,0,0]
      ]

debugger
console.log(maxAreaOfIsland(a));
