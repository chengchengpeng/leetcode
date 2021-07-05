// 给定一个二维矩阵，计算其子矩形范围内元素的总和，该子矩阵的左上角为 (row1, col1) ，右下角为 (row2, col2) 。
var NumMatrix = function(matrix) {
  this.mat = []
  for (let i = 0; i<matrix.length; i++) {
    this.mat.push(new Array(matrix[0].length).fill(0))
  }
  for (let i = 0; i<matrix.length; i++) {
    for (let j = 0; j<matrix[0].length;j++) {
      let a = b =c = 0
      if (i === 0 && j=== 0){
      }else if (i=== 0) {
        a = this.mat[i][j-1]
      }else if (j === 0) {
        b = this.mat[i-1][j]
      }else {
        a = this.mat[i][j-1]
        b = this.mat[i-1][j]
        c = this.mat[i-1][j-1]
      }
      this.mat[i][j] = a + b - c + matrix[i][j]
    }
  }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  let a=b=c=0
  if (row1 === 0 && col1 ===0){
  }else if(col1 === 0) {
    a = this.mat[row1-1][col2]
  }else if(row1 === 0) {
    b = this.mat[row2][col1-1]
  }else {
    a = this.mat[row1-1][col2]
    b = this.mat[row2][col1-1]
    c = this.mat[row1-1][col1-1]
  }
  return this.mat[row2][col2] - a- b +c
};

matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]

numMatrix = new NumMatrix(matrix)
console.log(numMatrix.sumRegion(2, 1, 4, 3));
