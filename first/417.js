/*
 * @Descripttion:
 * @version:
 * @Author: chengchengpeng
 * @Date: 2021-05-26 09:48:36
 * @LastEditors: chengchengpeng
 * @LastEditTime: 2021-05-26 11:27:07
 */

// 给定一个 m x n 的非负整数矩阵来表示一片大陆上各个单元格的高度。“太平洋”处于大陆的左边界和上边界，而“大西洋”处于大陆的右边界和下边界。

// 规定水流只能按照上、下、左、右四个方向流动，且只能从高到低或者在同等高度上流动。

// 请找出那些水流既可以流动到“太平洋”，又能流动到“大西洋”的陆地单元的坐标。

var pacificAtlantic = function(heights) {
  let visitedMap = [], rowLength = heights[0].length,myHeights = JSON.parse(JSON.stringify(heights))
   columnLength = heights.length, pacifficArr = [], atlanticArr = [], reult = []
  for (let i = 0; i < columnLength; i++) {
    pacifficArr.push([i, 0])
    atlanticArr.push([i, rowLength-1])
    let item = []
    for (let j = 0; j < rowLength; j++) {
      myHeights[i][j] = heights[i][j] + 1
      item.push([false, false])
    }
    visitedMap.push(item)
  }
  for (let j = 0; j < rowLength; j++) {
    pacifficArr.push([0, j])
    atlanticArr.push([columnLength-1, j])
  }
  for (let item of pacifficArr) {
    if(!visitedMap[item[0]][item[1]][0]) {
      visitedMap[item[0]][item[1]][0] = true
      dfs(myHeights,item[0], item[1], 0)
    }
  }
  for (let item of atlanticArr) {
    if(!visitedMap[item[0]][item[1]][1]) {
    visitedMap[item[0]][item[1]][1] = true
    dfs(myHeights, item[0], item[1], 1)
    }
  }
  function dfs(heights, i,j, isPaciffic) { //大西洋
    let arr = [[i, j+1], [i,j-1], [i+1, j], [i-1, j]]
    for (let item of arr) {
      if (heights[item[0]] && heights[item[0]][item[1]]
        && heights[item[0]][item[1]] >= heights[i][j]
        && !visitedMap[item[0]][item[1]][isPaciffic]){
          console.log(item);
          visitedMap[item[0]][item[1]][isPaciffic] = true
          dfs(heights, item[0], item[1], isPaciffic)
      }
    }
  }
  for (let i = 0; i < columnLength; i++) {
    for (let j = 0; j < rowLength; j++) {
      if(visitedMap[i][j][0] && visitedMap[i][j][1])
      reult.push([i,j])
    }
  }
  return reult;
};
let heights = [
          [1,2,2,3,5],
          [3,2,3,4,4],
          [2,4,5,3,1],
          [6,7,1,4,5],
          [5,1,1,2,4]]
          // pacificAtlantic(heights)
console.log(pacificAtlantic(heights));

