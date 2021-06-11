// 给定一个由 0 和 1 组成的矩阵，找出每个元素到最近的 0 的距离。

// 两个相邻元素间的距离为 1

var updateMatrix = function(mat) {
  let row = mat[0].length, column = mat.length, total = 0
  visited = JSON.parse(JSON.stringify(mat)), queue = []
    for (let i = 0; i< column; i++) {
      for (let j = 0; j<row; j++) {
        if (mat[i][j] === 0) {
          queue.push([i,j])
          visited[i][j] = true
        }else {
          visited[i][j] = false
        }
      }
    }
    let positonto = [[0,1], [0,-1],[-1,0],[1,0]]
    while (queue.length) {
      total++
      length = queue.length
      while (length--) {
        postion = queue.shift()
        for (let [n, m] of positonto) {
          let x = postion[0] + n, y = postion[1] + m
          if (mat[x] && mat[x][y] && !visited[x][y] ) {
            queue.push([x, y])
            visited[x][y] =  true
            mat[x][y] = total
          }
        }
      }
    }
    return mat
}

let mat = [[0,0,0],
[0,1,0],
[0,0,0]]

console.log(updateMatrix(mat));
