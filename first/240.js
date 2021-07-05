// 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：

// 每行的元素从左到右升序排列。
// 每列的元素从上到下升序排列。

var searchMatrix = function (matrix, target) {
  let x = matrix.length - 1, y = matrix[0].length - 1
  function search(xstart, ystart, xend, yend) {
    if (xstart === xend && ystart === yend) {
      if (matrix[xstart][yend] !== target) {
        return false
      } else {
        return true
      }
    } else {
      let x = Math.floor((xstart + xend) / 2), y = Math.floor((ystart + yend) / 2)
      let res1 = false, res2 = false, res3 = false
      if (matrix[x][y] === target) {
        return true
      } else if (matrix[x][y] > target) {
        if (x - 1 >= xstart && y - 1 >= ystart) {
          res1 = search(xstart, ystart, x - 1, y - 1)
          if (res1) return res1
        }
        if (xend >= x && y - 1 >= ystart) {
          res2 = search(x, ystart, xend, y - 1)
          if (res2) return res2
        }
        if (x - 1 >= xstart && yend >= y) {
          res3 = search(xstart, y, x - 1, yend)
          if (res3) return res3
        }
        return false
      } else {
        if (xend >= x + 1 && yend >= y + 1) {
          res1 = search(x + 1, y + 1, xend, yend)
          if (res1) return res1
        }
        if (x >= xstart && yend >= y + 1) {
          res2 = search(xstart, y + 1, x, yend)
          if (res2) return res2
        }
        if (xend >= x + 1 && y >= ystart) {
          res3 = search(x + 1, ystart, xend, y)
          if (res3) return res3
        }
        return false
      }
    }
  }
  return search(0, 0, x, y)
};

var searchMatrix2 = function (matrix, target) {
  let x = 0, y = matrix[0].length-1
  while(matrix[x] && (matrix[x][y] || matrix[x][y]===0)) {
    if (matrix[x]
      [y]  === target) {
      return true
    } else if(matrix[x][y]  > target) {
      y--
    }else {
      x++
    }
  }
  return false
}
matrix =
[[0,0,0]
,[2,7,9],
[7,8,11]], target = 7

console.log(searchMatrix2(matrix, target));
