var rotate = function(matrix) {
  let t = Math.floor(matrix.length/2), tem= ''
  debugger
  for (let i =0; i<t; i++) {
    for (let j = i; j<matrix.length-i-1; j++){
      let k = 4,n = i, m = j,
      value = matrix[n][m]
      while(k--) {
        tem = matrix[m][matrix.length-1-n]
        matrix[m][matrix.length-1-n] = value
        value = tem
        let temN = n
        n = m
        m = matrix.length-1-temN
      }
    }
  }
  return matrix
};
matrix = [[5,1,9,11],
          [2,4,8,10],
          [13,3,6,7],
          [15,14,12,16]
        ], a =
          [[15,13,2,5],
          [14,3,4,1],
          [12,6,8,9],
          [16,7,10,11]]

console.log(rotate(matrix));
