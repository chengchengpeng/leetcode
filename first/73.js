// 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。
var setZeroes = function(matrix) {
  let column, row
  for (let i = 0;i<matrix.length; i++) {
    if (matrix[i][0] === 0){
      column = true
      break
    }
  }
  for (let j = 0;j<matrix[0].length; j++) {
    if (matrix[0][j] === 0){
      row = true
      break
    }
  }
  for (let i = 1; i<matrix.length; i++) {
    for (let j = 1;j<matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0
        matrix[i][0] = 0
      }
    }
  }
  for (let i = 1; i<matrix.length; i++) {
    for (let j = 1;j<matrix[0].length; j++) {
      if (matrix[0][j] === 0 || matrix[i][0] === 0) {
        matrix[i][j] = 0
      }
    }
  }
  if (column) {
    for (let i = 0;i<matrix.length; i++) {
      matrix[i][0] = 0
    }
  }
  if (row) {
    for (let j = 0;j<matrix[0].length; j++) {
      matrix[0][j] = 0
    }
  }
  return matrix
};
