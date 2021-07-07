// 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。

// 返回被除数 dividend 除以除数 divisor 得到的商。

// 整数除法的结果应当截去（truncate）其小数部分，例如：truncate(8.345) = 8 以及 truncate(-2.7335) = -2

var divide = function (dividend, divisor) {
  let count = 0, sum = 0, temdividend = dividend, temdivisor = divisor
  if (dividend < 0) temdividend = -dividend
  if (divisor < 0) temdivisor = -divisor
  function getsum(a, b) {
    if (a < b) return 0
    let res = 1, init = b, pre = b
    b = b + b
    while (a >= b) {
      res = res + res
      pre = b
      b = b + b
    }
    return res + getsum(a - pre, init)
  }
  count = getsum(temdividend, temdivisor)
  if ((dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)) {

    return count >= 2147483648 ? 2147483647 : count
  } else {
    return count > 2147483648 ? -2147483648 : -count
  }
};
console.log(divide(6, 2));
console.log(divide(-6, 2));
console.log(divide(7, 2));
console.log(divide(2147483647, 2));
