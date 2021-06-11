// 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。


var maximalSquare = function(matrix) {
    let matrixMap = JSON.parse(JSON.stringify(matrix)),
    row = matrix[0].length, column  = matrix.length, result  = 0
    for (let i = 0; i< column; i++) {
      for (let j = 0; j< row; j++) {
        if (matrix[i][j] === '0') {
          matrixMap[i][j] = 0
        }else {
          if (i === 0 || j === 0) {
            matrixMap[i][j] = 1
          }else {
            matrixMap[i][j] = Math.min(matrixMap[i-1][j], matrixMap[i-1][j-1], matrixMap[i][j-1])+ 1
          }
        }
      }
    }
    for (let i = 0; i< column; i++) {
      for (let j = 0; j< row; j++) {
        if (matrixMap[i][j] ** 2 >  result) result  = matrixMap[i][j] ** 2
      }
    }
    return result
  }
  let matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
  console.log(maximalSquare(matrix));

