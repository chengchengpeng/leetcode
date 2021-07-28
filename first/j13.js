var movingCount = function(m, n, k) {
  let mat = []
  for (let i =0; i<m; i++) {
    mat.push(new Array(n).fill(false))
  }
  function dfs(i,j) {
    mat[i][j] = true
    total++
    let to = [[1,0], [-1,0], [0,1], [0, -1]]
    for (let [a ,b ] of to) {
      if (i + a <m && i+a >= 0 && b + j <n && b+j >=0 && !mat[i+a][j+b] && isFlag(i+a, j+b) <=k){
        dfs(i+a, j+b)
      }
    }
  }
  function isFlag(i,j) {
    return i%10 + Math.floor(i/10) + j%10 + Math.floor(j/10)
  }
  return total
};
