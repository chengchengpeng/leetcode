// 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。

// 回文串 是正着读和反着读都一样的字符串。

var partition = function(s) {
  let mat = [], n = s.length, res = []
for (let i = 0; i<n; i++) {
  mat.push(new Array(n).fill(true))
}
for (let i = n-1; i>=0; i--) {
  for (let j = i+1; j<n; j++){
    mat[i][j] = mat[i+1][j-1] && (s.charAt(i) === s.charAt(j))
  }
}
let arr = []
debugger
dfs(0)
function dfs(i) {
  if (i === n) {
    res.push(arr)
    return
  }
  for (let j = i; j<n; j++) {
    if (mat[i][j]){
      arr.push(s.slice(i, j+1))
      dfs(j+1)
      arr.pop()
    }
  }
}
return res
};

partition("aab")
