// 实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。

var myPow = function(x, n) {
  if (n===0) {
    return x === 0 ? 0 : 1
  }
  function getResult(y,m){
    if (m ===1) return y
    let mid = Math.floor(m/2)
    if (mid === m/2) {
      return getResult(y*y, mid)
    }else {
      return getResult(y*y, mid) * y
    }
  }
  if (n > 0) {
    return getResult(x, n)
  }else {
    return 1/getResult(x, n)
  }
};
