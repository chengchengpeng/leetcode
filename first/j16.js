// 实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。不得使用库函数，同时不需要考虑大数问题。

var myPow = function(x, n) {
  if (n ===  0){
    return x === 0 ? 0 : 1
  }
  function pow(n, m) {
    if (m = 1) return n
    let mid = Math.floor(m/2)
    if (m & 1 === 1) {
      pow(n*n, mid) * n
    }else{
      pow(n*n, mid)
    }
  }
  if (n<0) {
    return  1/pow(x, 0-n)
  }else{
    return pow(x, n)
  }
};
