// 编写一个函数，输入是一个无符号整数（以二进制串的形式），返回其二进制表达式中数字位数为 '1' 的个数（也被称为 汉明重量).）。
var hammingWeight = function(n) {
  let total = 0
  while (n !==0) {
    if (n & 1 === 1) total++
    n >>>1
  }
  return total
};
