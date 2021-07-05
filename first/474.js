// 给你一个二进制字符串数组 strs 和两个整数 m 和 n 。

// 请你找出并返回 strs 的最大子集的大小，该子集中 最多 有 m 个 0 和 n 个 1 。

// 如果 x 的所有元素也是 y 的元素，集合 x 是集合 y 的 子集 。
var findMaxForm = function(strs, m, n) {
  let mat = []
  for (let i=0; i<=m;i++) {
    mat.push(new Array(n+1).fill(0))
  }
  for (let i = 0; i<strs.length; i++) {
    let zero = 0, one = 0
    for (let k = 0; k<strs[i].length; k++) {
      if (strs[i].charAt(k) === '0') {
        zero++
      }else {
        one++
      }
    }
    for (let a = m; a>=zero; a--) {
      for (let b = n; b>=one; b--) {
        mat[a][b] = Math.max(mat[a][b], mat[a-zero][b-one] + 1)
      }
    }
  }
  return mat[m][n]
};
strs = ["10", "0001", "111001", "1", "0"], m = 5, n = 3
console.log(findMaxForm(strs, m,n));
