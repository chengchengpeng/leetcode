// 两个整数之间的 汉明距离 指的是这两个数字对应二进制位不同的位置的数目。

// 给你两个整数 x 和 y，计算并返回它们之间的汉明距离。

var hammingDistance = function(x, y) {
  let s = x ^ y, res = 0
  while(s){
    res += s & 1
    s >>= 1
  }
  return res
};
