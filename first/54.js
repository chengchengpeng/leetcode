// 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

var spiralOrder = function(matrix) {
  let arr = [], assist = {
    left:{
      next:"top",
      value:[0,-1]
    },
    top:{
      next:"right",
      value:[-1,0]
    },
    right:{
      next:"bottom",
      value:[0,1]
    },
    bottom:{
      next:"left",
      value:[1,0]
    }
  },res = []

  for (let i = 0; i<matrix.length;i++) {
    arr.push(new Array(matrix[0].length).fill(false))
  }
  let i = 0, j =0, to = 'right'
  debugger
  while (true){
    arr[i][j] = true
    res.push(matrix[i][j])
    let tem = nextTo(i,j,to)
    if (!tem) return res
    to = tem[2]
    i = tem[0]
    j = tem [1]
  }
  function nextTo(n,m, to) {
    let myto = to
    while(true){
      let i = assist[myto].value[0] + n, j = assist[myto].value[1] + m
      if (i >=0 && i<matrix.length && j>=0 && j<matrix[0].length && !arr[i][j]){
        return [i,j, myto]
      }
      myto = assist[myto].next
      if (myto === to) return false
    }
   }
};

let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
console.log(spiralOrder(matrix));
