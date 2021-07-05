// 给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。

var integerBreak = function(n) {
  let mat = new Array(n+1).fill(0)
  mat[1] = 1
  for (let i = 2;i<=n; i++) {
    let max = 0
    for (let k =1; k<i; k++){
      max = Math.max(max, mat[k] * (i-k), k * (i-k))
    }
    mat[i] = max
 }
 return mat[n]
};
console.log(integerBreak(10));
