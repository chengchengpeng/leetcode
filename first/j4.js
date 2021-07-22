// 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
// 请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

var findNumberIn2DArray = function(matrix, target) {
  let i = 0, j = matrix[0].length-1
  debugger
  while (i<matrix.length && j>=0){
    let item = matrix[i][j]
    if (item > target) {
      j--
    }else if (item < target) {
      i++
    }else{
      return true
    }
  }
  return false
};
let a = [
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
console.log(findNumberIn2DArray(a, 5));
