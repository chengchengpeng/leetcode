// 给定一个整数 n，返回 n! 结果尾数中零的数量。

var trailingZeroes = function(n) {
  let count = 0, val = 0
  for (let i = 5; i<=n; i+=5){
    val = i
    while (val/5 === Math.floor(val/5)) {
      count++
      val = val/5
    }
  }
  return count
};
